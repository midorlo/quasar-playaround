<template>
  <!-- q-card füllt nun standardmäßig die verfügbare Fläche -->
  <q-card v-bind="cardAttrs" class="fit" :class="cardClass" :style="cardStyle">
    <!-- Card-Section mit reduziertem Top-Padding -->
    <q-card-section class="q-pt-sm q-px-md q-pb-md">
      <!-- Übergang zwischen Skeleton und Inhalten -->
      <transition-group
        appear
        tag="div"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-if="error" key="error">
          <q-banner dense type="warning">{{ error }}</q-banner>
        </div>
        <div v-else-if="loading" key="skeleton">
          <q-skeleton type="rect" animated :height="computedHeight || '200px'" />
        </div>
        <div v-else key="content">
          <template v-if="props.height">
            <q-scroll-area :style="{ height: computedHeight }">
              <div v-html="displayHtml" class="q-markdown-content" />
            </q-scroll-area>
          </template>
          <template v-else>
            <div v-html="displayHtml" class="q-markdown-content" />
          </template>
        </div>
      </transition-group>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
// Verhindert, dass alle Attribute automatisch auf das Root-Element angewendet werden
defineOptions({ inheritAttrs: false });

import {
  computed,
  defineProps,
  getCurrentInstance,
  onMounted,
  ref,
  useAttrs,
  watch,
  withDefaults,
} from 'vue';
import { debounce } from 'quasar';
import DOMPurify from 'dompurify';

interface Props {
  source?: string;
  file?: string;
  height?: string | number;
  /** Wenn true, wird HTML gesäubert; bei false rohe Ausgabe */
  sanitize?: boolean;
}

const props = withDefaults(defineProps<Props>(), { sanitize: true });

// Alle nicht-Prop-Attribute einlesen (inkl. klassenspezifische Props wie flat, bordered etc.)
const attrs = useAttrs();
// Card-Attribute ohne Destructuring
const cardClass = attrs.class as string | undefined;
const cardStyle = attrs.style as string | Record<string, string> | undefined;
const cardAttrs = Object.fromEntries(
  Object.entries(attrs).filter(([key]) => !['class', 'style'].includes(key)),
);

// Raw Markdown content
const rawMarkdown = ref<string>(props.source || '');

// State für Loading & Error
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

// Parsed HTML (debounced)
const parsedHtml = ref<string>('');
const updateHtml = debounce(() => {
  parsedHtml.value = md ? md.render(rawMarkdown.value) : rawMarkdown.value;
}, 300);

// Markdown parser-Instanz aus Vue globalProperties (z.B. MarkdownIt)
const vm = getCurrentInstance();
const md = vm?.appContext.config.globalProperties.$md;

// Watch rawMarkdown changes
watch(
  rawMarkdown,
  () => {
    updateHtml();
  },
  { immediate: true },
);

// Vite raw-loader für .md-Dateien im src/assets-Ordner
const modules = import.meta.glob<string>('../assets/**/*.md', { query: '?raw', import: 'default' });

onMounted(async () => {
  loading.value = true;
  error.value = null;
  try {
    if (!props.source && props.file) {
      if (props.file.startsWith('/')) {
        const res = await fetch(props.file);
        if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
        rawMarkdown.value = await res.text();
      } else {
        const key = `../assets/${props.file}`;
        const loader = modules[key];
        if (loader) rawMarkdown.value = await loader();
        else throw new Error(`File not found: ${props.file}`);
      }
    }
  } catch (err) {
    error.value = (err as Error).message;
  } finally {
    loading.value = false;
  }
});

// Je nach Flag sanitizen oder rohen HTML-String verwenden
const displayHtml = computed<string>(() => {
  return props.sanitize ? DOMPurify.sanitize(parsedHtml.value) : parsedHtml.value;
});

// Höhe für Scroll-Area berechnen
const computedHeight = computed<string>(() => {
  if (props.height == null) return '';
  return typeof props.height === 'number' ? `${props.height}px` : props.height;
});
</script>

<style scoped>
.q-markdown-content {
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Überschriften mit reduziertem Top-Padding statt Margin über :deep() */
.q-markdown-content :deep(h1) {
  font-size: 1.5em;
  /* Oberes Padding reduziert */
  padding: 0.25em 0 0.5em 0;
}

.q-markdown-content :deep(h2) {
  font-size: 1.25em;
  padding: 0.75em 0 0.5em 0;
}

.q-markdown-content :deep(h3) {
  font-size: 1.1em;
  padding: 0.75em 0 0.5em 0;
}
</style>
