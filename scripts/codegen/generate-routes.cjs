/* eslint-disable */
const fs = require('fs');
const path = require('path');

/**
 * Konvertiert einen CamelCase- oder PascalCase-String in kebab-case
 */
function toKebab(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

/**
 * Ersatz von Platzhaltern im Template: %key%
 */
function renderTemplate(template, data) {
  return template.replace(/%([\w_]+)%/g, (_, key) => data[key] || '');
}

/**
 * Rekursiv alle Unterordner einsammeln
 */
function getSubdirectories(dir) {
  const dirs = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      const sub = path.join(dir, entry.name);
      dirs.push(sub);
      dirs.push(...getSubdirectories(sub));
    }
  }
  return dirs;
}

/**
 * Listet alle Dateien, die auf "Page.vue" enden
 */
function getPageFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith('Page.vue'))
    .map((e) => e.name);
}

function main() {
  console.log('🛠️  Generiere Routen…');

  const projectRoot = process.cwd();
  const pagesDir = path.join(projectRoot, 'src', 'pages');
  const templatesDir = path.join(__dirname, 'templates');

  // 1) Templates einlesen
  const layoutTpl = fs.readFileSync(path.join(templatesDir, 'layout.template'), 'utf-8');
  const pageTpl = fs.readFileSync(path.join(templatesDir, 'page.template'), 'utf-8');
  const routesTpl = fs.readFileSync(path.join(templatesDir, 'routes.template'), 'utf-8');
  console.log('🛠️  Templates gelesen');

  // 2) Verzeichnisse scannen
  const allDirs = [pagesDir, ...getSubdirectories(pagesDir)];
  let relDirs = allDirs.map((d) => {
    const rel = path.relative(pagesDir, d).replace(/\\/g, '/');
    return rel === '' || rel === '.' ? '' : rel;
  });
  relDirs = Array.from(new Set(relDirs)).sort();
  console.log('🛠️  Ordner gelesen');

  const layoutBlocks = [];

  for (const rel of relDirs) {
    const absDir = rel ? path.join(pagesDir, rel) : pagesDir;
    let pages = getPageFiles(absDir).sort();
    if (pages.length === 0) continue;

    // 3) Page-Routen generieren
    const pageRoutes = pages
      .map((file) => {
        const nameBase = file.replace('Page.vue', '');
        const kebab = toKebab(nameBase);
        const prefix = rel ? rel.split('/').map(toKebab).join('-') + '-' : '';
        const routeName = `${prefix}${kebab}-page`;
        const fullPath = rel ? `${rel}/${file}` : file;
        return renderTemplate(pageTpl, {
          page_path: kebab,
          page_name: routeName,
          page_fullpath: fullPath,
        });
      })
      .join('\n');

    // 4) Layout-Route bauen
    const routePath = rel ? `/${rel}` : '/';
    const layoutBlock = renderTemplate(layoutTpl, {
      route_path: routePath,
      page_routes: pageRoutes,
    });
    layoutBlocks.push(layoutBlock);
  }

  // 5) Gesamte Routen-Datei erstellen
  const output = renderTemplate(routesTpl, {
    layout_routes: layoutBlocks.join('\n'),
  });

  // 6) In src/routes/generated-routes.ts schreiben
  const outDir = path.join(projectRoot, 'src', 'router');
  const outFile = path.join(outDir, 'generated-routes.ts');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, output, 'utf-8');
  console.log(`✅  ${outFile} erstellt`);
}

main();
