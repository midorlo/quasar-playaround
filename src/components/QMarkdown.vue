<template>
  <div v-html="sanitizedHtml" class="q-markdown-content text-h1" />
</template>

<script lang="ts" setup>
import { ref, computed, getCurrentInstance, onMounted } from 'vue';
import DOMPurify from 'dompurify';

interface Props {
  source?: string;
  file?: string;
}

const props = defineProps<Props>();

// roher Markdown-Inhalt
const raw = ref(props.source ?? '');

// Vite Raw-Loader (.md) unter src/assets
const modules = import.meta.glob<string>('../assets/**/*.md', { query: '?raw', import: 'default' });

onMounted(async () => {
  if (props.file) {
    if (props.file.startsWith('/')) {
      // public/ via HTTP
      const res = await fetch(props.file);
      if (!res.ok)
        throw new Error(
          `Markdown-Datei konnte nicht geladen werden (HTTP ${res.status} ${res.statusText})`,
        );
      raw.value = await res.text();
    } else {
      // src/assets via Vite import
      const key = `../assets/${props.file}`;
      const loader = modules[key];
      if (!loader) {
        console.error(`QMarkdown: File not found: ${key}`);
      } else {
        raw.value = await loader();
      }
    }
  }
});

// MarkdownIt-Instanz aus Boot-File
const vm = getCurrentInstance();
if (!vm) throw new Error('QMarkdown: Vue-Instanz nicht gefunden');
const md = vm.appContext.config.globalProperties.$md;

// Rendern + Sanitizen
const html = computed(() => md.render(raw.value));
const sanitizedHtml = computed(() => DOMPurify.sanitize(html.value));
</script>
<style scoped>
.q-markdown-content {
  font-size: 0.9rem;
  line-height: 1.5;
}
.q-markdown-content ::v-deep h1 {
  font-size: 1.5em;
  margin: 0.75em 0 0.5em;
}
.q-markdown-content ::v-deep h2 {
  font-size: 1.25em;
  margin: 0.75em 0 0.5em;
}
.q-markdown-content ::v-deep h3 {
  font-size: 1.1em;
  margin: 0.75em 0 0.5em;
}
</style>
