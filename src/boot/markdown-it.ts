// src/boot/markdown-it.ts
import { boot } from 'quasar/wrappers'
import MarkdownIt from 'markdown-it'


declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $md: MarkdownIt
  }
}

export default boot(({ app }) => {
  // Basis-Instanz mit Standard-Optionen
  const md = new MarkdownIt({
    html: true,         // <b>... erlauben
    linkify: true,      // URLs automatisch verlinken
    typographer: true,  // „Anführungszeichen“ & co.
    breaks:true,
  })

  // Global verfügbar machen
  app.config.globalProperties.$md = md
})
