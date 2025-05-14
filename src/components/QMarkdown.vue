<template>
  <q-card v-bind="cardAttrs" :class="cardClass" :style="cardStyle">
    <!-- Header Slot -->
    <template v-if="$slots.header">
      <q-card-section class="q-pa-none">
        <slot name="header" />
      </q-card-section>
    </template>

    <!-- Content Section -->
    <q-card-section :class="`q-pa-${props.contentPadding}`">
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
            <q-scroll-area
              :style="{ height: computedHeight }"
              :native-scroll="props.scrollNative"
              :content-style="{ scrollBehavior: 'smooth' }"
            >
              <div v-html="displayHtml" class="q-markdown-content" />
            </q-scroll-area>
          </template>
          <template v-else>
            <div v-html="displayHtml" class="q-markdown-content" />
          </template>
        </div>
      </transition-group>
    </q-card-section>

    <!-- Footer Slot -->
    <template v-if="$slots.footer">
      <q-card-section class="q-pa-none">
        <slot name="footer" />
      </q-card-section>
    </template>
  </q-card>
</template>

<script lang="ts" setup>
// Prevent automatic attr binding on root
defineOptions({ inheritAttrs: false });

import {
  ref,
  computed,
  watch,
  onMounted,
  onServerPrefetch,
  getCurrentInstance,
  useAttrs,
  defineProps,
  withDefaults
} from 'vue';
import { debounce } from 'quasar';
import DOMPurify from 'dompurify';

interface Props {
  /** Optional custom MarkdownIt-like parser */
  mdInstance?: { render: (src: string) => string };
  /** Use native scrolling instead of Quasar scrollbars */
  scrollNative?: boolean;
  /** Padding size for content: xs, sm, md, lg, xl */
  contentPadding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Raw markdown string */
  source?: string;
  /** Path to markdown file under assets */
  file?: string;
  /** Fixed height for scroll area */
  height?: string | number;
  /** Sanitize html output */
  sanitize?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  sanitize: true,
  contentPadding: 'md',
  scrollNative: false
});

// Extract card attrs
const attrs = useAttrs();
const cardClass = attrs.class as string | undefined;
const cardStyle = attrs.style as string | Record<string, string> | undefined;
const cardAttrs = Object.fromEntries(
  Object.entries(attrs).filter(
    ([k]) => k !== 'class' && k !== 'style'
  )
);

// Markdown state
const rawMarkdown = ref(props.source || '');
const loading = ref(false);
const error = ref<string | null>(null);

// Choose parser
const vm = getCurrentInstance();
const defaultMd = vm?.appContext.config.globalProperties.$md;
const parser = props.mdInstance ?? defaultMd;

// Parsed html
const parsedHtml = ref('');
const updateHtml = debounce(() => {
  parsedHtml.value = parser
    ? parser.render(rawMarkdown.value)
    : rawMarkdown.value;
}, 300);

watch(rawMarkdown, () => updateHtml(), { immediate: true });

// Import markdown files
const modules = import.meta.glob<string>(
  '../assets/**/*.md',
  { query: '?raw', import: 'default' }
);

// Load file logic
async function loadMarkdownFile() {
  if (props.source || !props.file) return;
  loading.value = true;
  error.value = null;
  try {
    if (import.meta.env.SSR) {
      const key = `../assets/${props.file}`;
      const loader = modules[key];
      if (!loader){
        error.value ='File not found';
        loading.value = false;
        return;
      }
      rawMarkdown.value = await loader();
    } else {
      if (props.file.startsWith('/')) {
        const res = await fetch(props.file);
        if (!res.ok) {
          error.value =`HTTP ${res.status}`;
          loading.value = false;
          return;
        }
        rawMarkdown.value = await res.text();
      } else {
        const key = `../assets/${props.file}`;
        const loader = modules[key];
        if (!loader) {
          error.value ='File not found';
          loading.value = false;
          return;
        }
        rawMarkdown.value = await loader();
      }
    }
  } catch (e) {
    error.value = (e as Error).message;
  } finally {
    loading.value = false;
  }
}

// SSR & client load
onServerPrefetch(loadMarkdownFile);
onMounted(loadMarkdownFile);

// Display html
const displayHtml = computed(() =>
  props.sanitize
    ? DOMPurify.sanitize(parsedHtml.value)
    : parsedHtml.value
);

// Compute height
const computedHeight = computed(() =>
  props.height == null
    ? ''
    : typeof props.height === 'number'
      ? `${props.height}px`
      : props.height
);
</script>

<style scoped>
.q-markdown-content {
  font-size: 0.9rem;
  line-height: 1.5;
}
.q-markdown-content :deep(h1) {
  font-size: 1.5em;
  padding: 0.25em 0 0.5em;
}
.q-markdown-content :deep(h2) {
  font-size: 1.25em;
  padding: 0.75em 0 0.5em;
}
.q-markdown-content :deep(h3) {
  font-size: 1.1em;
  padding: 0.75em 0 0.5em;
}
</style>
