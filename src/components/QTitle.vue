<template>
  <div :class="['q-title', titleClass, titleSpacing]">
      <div :class="titleStyle">
        <span v-if="icon" class="icon-wrapper">
          <q-icon :name="icon" class="q-icon" />
        </span>
        {{ text }}
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QTitle',
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
    pageTitle: {
      type: Boolean,
      required: false,
      default: false,
    },
    sectionTitle: {
      type: Boolean,
      required: false,
      default: false,
    },
    subsectionTitle: {
      type: Boolean,
      required: false,
      default: false,
    },
    contentTitle: {
      type: Boolean,
      required: false,
      default: false,
    },
    elementTitle: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    titleClass() {
      if (this.pageTitle) return 'page-title';
      if (this.sectionTitle) return 'section-title';
      if (this.subsectionTitle) return 'subsection-title';
      if (this.contentTitle) return 'content-title';
      if (this.elementTitle) return 'element-title';
      return 'default-title';
    },
    titleStyle() {
      if (this.pageTitle) return 'text-h3 text-primary font-bold';
      if (this.sectionTitle) return 'text-h4 text-primary font-semibold';
      if (this.subsectionTitle) return 'text-h5 text-primary font-medium';
      if (this.contentTitle) return 'text-h5 text-primary';
      if (this.elementTitle) return 'text-h6 text-primary';
      return 'text-h5 text-primary';
    },
    // Dynamische Quasar-Klassen für Abstände (padding, margin)
    titleSpacing() {
      if (this.pageTitle) return 'q-mb-xl'; // Verwendung der Quasar-Klasse für großen Margin-Bottom
      if (this.sectionTitle) return 'q-mb-lg'; // Quasar-Klasse für mittleren Margin-Bottom
      if (this.subsectionTitle) return 'q-mb-md'; // Quasar-Klasse für kleinen Margin-Bottom
      if (this.contentTitle) return 'q-mb-sm'; // Quasar-Klasse für noch kleineren Margin-Bottom
      if (this.elementTitle) return 'q-mb-xs'; // Quasar-Klasse für sehr kleinen Margin-Bottom
      return 'q-mb-md'; // Standardmäßig mittlerer Abstand
    },
  },
});
</script>

<style scoped lang="scss">
.q-title {
  display: flex;
  flex-direction: column;
  gap: 8px; /* Flexbox-gesteuerte Abstände zwischen den Elementen */
}

.q-title-link {
  display: block; /* Den gesamten Titelbereich klickbar machen */
}

.q-anchor-link {
  font-size: 0.875rem;
  color: #137fad;
  text-decoration: none;
  margin-left: 8px;
}

.q-router-link {
  font-size: 0.875rem;
  color: #137fad;
  text-decoration: none;
}
</style>
