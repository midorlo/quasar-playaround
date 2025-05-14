#!/usr/bin/env node
/* eslint-disable */
const fs = require('fs');
const path = require('path');

// Pfade definieren
const projectRoot = path.resolve(__dirname, '..');
const srcPath = path.join(projectRoot, 'README.md');
const destDir = path.join(projectRoot, 'src', 'assets', 'markdown');
const destPath = path.join(destDir, 'README.md');

// Zielverzeichnis anlegen, falls nicht vorhanden
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Datei kopieren
try {
  fs.copyFileSync(srcPath, destPath);
  console.log(`README.md wurde erfolgreich nach ${destPath} kopiert.`);
} catch (err) {
  console.error('Fehler beim Kopieren von README.md:', err);
  process.exit(1);
}
