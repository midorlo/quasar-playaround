// src/boot/markdown-it.ts
// noinspection JSUnusedGlobalSymbols

import { boot } from 'quasar/wrappers';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $md: MarkdownIt;
  }
}

export default boot(({ app }) => {
  // Erweiterte Instanz mit Commonmark und Plugins
  const md: MarkdownIt = new MarkdownIt('commonmark', {
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
    highlight: function (str: string, lang: string): string {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs"><code>' +
            hljs.highlight(str, { language: lang }).value +
            '</code></pre>'
          );
        } catch {
          // Handle error
        }
      }
      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    },
  });
  // Global verfügbar machen
  app.config.globalProperties.$md = md;
});
