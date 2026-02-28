<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-warm-200">
    <nav class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold text-warm-800 hover:text-warm-600 transition-colors">
        Hello Wrocław
      </NuxtLink>
      <ul class="flex items-center gap-6 text-sm font-medium">
        <li>
          <NuxtLink to="/" class="text-stone-600 hover:text-warm-700 transition-colors">
            Strona główna
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" class="text-stone-600 hover:text-warm-700 transition-colors">
            Blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="text-stone-600 hover:text-warm-700 transition-colors">
            O blogu
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
