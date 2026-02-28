<template>
  <div class="my-10 rounded-2xl border border-warm-200 bg-gradient-to-br from-warm-50 to-white p-6 md:p-8 shadow-sm">
    <p class="text-xs font-semibold text-warm-600 uppercase tracking-widest mb-1">Fotograf Wrocław</p>
    <p class="text-xl font-bold text-stone-800 mb-4">Anna Migaj — Niebieskie Aparaty</p>
    <div class="text-stone-600 leading-relaxed [&_a]:text-warm-600 [&_a]:font-medium [&_a]:underline [&_a]:decoration-warm-300 [&_a]:underline-offset-2 hover:[&_a]:decoration-warm-500">
      <slot />
    </div>
    <a
      href="https://niebieskie-aparaty.pl"
      target="_blank"
      class="inline-block mt-5 px-6 py-2.5 bg-warm-600 text-white font-medium rounded-lg hover:bg-warm-700 transition-colors text-sm"
    >
      Umów sesję fotograficzną →
    </a>
  </div>
</template>
