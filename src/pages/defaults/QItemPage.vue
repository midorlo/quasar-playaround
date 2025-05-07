<template>
  <q-page class="flex flex-column q-pa-md">

    <!-- 8. Eingestanzt-Effekt für Text -->
    <section>
      <h2 class="text-h4 q-mb-md">Eingestanzt-Effekt für Text</h2>
      <q-item class="q-pa-md q-mb-sm">
        <q-item-section>
          <q-item-label class="text-h6 text-inset">Eingestanzt aussehender Text</q-item-label>
          <q-item-label caption>Beschreibung mit eingestanztem Look</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
    </section>

    <!-- 1. Minimalistisches Design -->
    <section>
      <h2 class="text-h4 q-mb-md">Minimalistisches Design</h2>
      <q-item
        class="q-pa-none q-mb-md q-hoverable"
        :style="{ transition: 'all 0.3s ease' }"
      >
        <q-item-section>
          <q-item-label class="text-h6">Modernes Element</q-item-label>
          <q-item-label caption>Kurze Beschreibung</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
    </section>

    <!-- 2. Neutrale Farbpalette mit Akzenten -->
    <section>
      <h2 class="text-h4 q-mb-md">Neutrale Farbpalette mit Akzenten</h2>
      <q-item class="q-pa-md" :style="{ backgroundColor: '#f9f9f9' }">
        <q-item-section>
          <q-item-label class="text-h6 text-blue-5">Titel des Items</q-item-label>
          <q-item-label caption>Beschreibung hier</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn color="primary" label="Aktion" flat />
        </q-item-section>
      </q-item>
      <q-separator />
    </section>

    <!-- 3. Abgerundete Ecken und Schatten -->
    <section>
      <h2 class="text-h4 q-mb-md">Abgerundete Ecken und Schatten</h2>
      <q-item
        class="q-pa-md q-mb-sm q-shadow-2"
        :style="{ borderRadius: '12px', backgroundColor: '#fff' }"
      >
        <q-item-section>
          <q-item-label class="text-h6">Modernes Element</q-item-label>
          <q-item-label caption>Beschreibung</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
    </section>

    <!-- 4. Interaktive Elemente und Icons -->
    <section>
      <h2 class="text-h4 q-mb-md">Interaktive Elemente und Icons</h2>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label class="text-h6">Element mit Icon</q-item-label>
          <q-item-label caption>Beschreibung des Elements</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="mdi-arrow-right" />
        </q-item-section>
      </q-item>
      <q-separator />
    </section>

    <!-- 5. Dark Mode-Unterstützung -->
    <section>
      <h2 class="text-h4 q-mb-md">Dark Mode-Unterstützung</h2>
      <q-item
        :class="{'q-item--dark': $q.dark.isActive}"
        class="q-pa-md"
      >
        <q-item-section>
          <q-item-label class="text-h6">Item im Dark Mode</q-item-label>
          <q-item-label caption>Dark Mode Beschreibung</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
    </section>

    <!-- 6. Typografie und Abstände -->
    <section>
      <h2 class="text-h4 q-mb-md">Typografie und Abstände</h2>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label class="text-h5 text-bold">Großer Titel</q-item-label>
          <q-item-label caption class="text-body2">Kleinere, aber klare Beschreibung</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
    </section>

    <!-- 7. Zusätzliche Animationen -->
    <section>
      <h2 class="text-h4 q-mb-md">Zusätzliche Animationen</h2>
      <q-item
        class="q-pa-md q-hoverable"
        :style="{ transition: 'all 0.3s ease-in-out' }"
      >
        <q-item-section>
          <q-item-label class="text-h6">Titel des Items</q-item-label>
          <q-item-label caption>Beschreibung des Items</q-item-label>
        </q-item-section>
      </q-item>
    </section>

  </q-page>
</template>

<style scoped>
.q-hoverable:hover {
  transform: translateY(-5px);
  background-color: #f7f7f7;
}

.text-inset {
  font-weight: bold;
  color: #b5b5b5; /* Helle Textfarbe für den „eingestanzten“ Look */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3), -1px -1px 2px rgba(255, 255, 255, 0.2); /* Schattierung für den eingestanzten Effekt */
}
</style>
