// src/quasar.config.ts

// noinspection JSUnusedGlobalSymbols

import { defineConfig } from '#q-app/wrappers';
import { fileURLToPath } from 'node:url';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import fs from 'fs';
import path from 'path';

// Root directory of the project (for ESM)
const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig((ctx) => ({
  // Boot files
  boot: ['i18n', 'axios', 'markdown-it'],

  // Global styles
  css: ['app.scss'],

  // Extra icon libraries
  extras: ['roboto-font', 'material-icons'],

  build: {
    target: {
      browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
      node: 'node20',
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/quasar-playaround/' : '/',
    typescript: {
      strict: true,
      vueShim: true,
    },
    vueRouterMode: 'hash',

    // Vite-Plugins
    vitePlugins: [
      // Vue I18n
      [
        '@intlify/unplugin-vue-i18n/vite',
        {
          ssr: ctx.modeName === 'ssr',
          include: [fileURLToPath(new URL('./src/i18n', import.meta.url))],
        },
      ],

      // TypeScript-Checker + ESLint
      [
        'vite-plugin-checker',
        {
          vueTsc: true,
          eslint: {
            lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{ts,js,mjs,cjs,vue}"',
            useFlatConfig: true,
          },
        },
        { server: false },
      ],

      // README.md ins dist kopieren
      ...viteStaticCopy({
        targets: [{ src: 'README.md', dest: '' }],
      }),

      // Serve README.md in devserver
      {
        name: 'serve-readme',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/README.md') {
              const filePath = path.resolve(rootDir, 'README.md');
              fs.readFile(filePath, (err, data) => {
                if (err) {
                  res.statusCode = 404;
                  return res.end('Not found');
                }
                res.setHeader('Content-Type', 'text/markdown');
                res.end(data);
              });
            } else {
              next();
            }
          });
        },
      },
    ],
  },

  devServer: {
    open: false,
  },

  framework: {
    config: {},
    plugins: [],
  },

  animations: [],

  ssr: {
    prodPort: 3000,
    middlewares: ['render'],
    pwa: false,
  },

  pwa: {
    workboxMode: 'GenerateSW',
  },

  cordova: {},

  capacitor: {
    hideSplashscreen: true,
  },

  electron: {
    preloadScripts: ['electron-preload'],
    inspectPort: 5858,
    bundler: 'packager',
    packager: {},
    builder: {
      appId: 'quasar-playaround',
    },
  },

  bex: {
    extraScripts: [],
  },
}));
