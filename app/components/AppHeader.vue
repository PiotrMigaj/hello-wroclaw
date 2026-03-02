<script setup lang="ts">
const isMenuOpen = ref(false)
const router = useRouter()

function closeMenu() {
  isMenuOpen.value = false
}

router.afterEach(() => {
  isMenuOpen.value = false
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-warm-200">
    <nav class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold text-warm-800 hover:text-warm-600 transition-colors">
        Hello Wrocław
      </NuxtLink>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-6 text-sm font-medium">
        <li>
          <NuxtLink to="/" class="text-stone-600 hover:text-warm-700 transition-colors" @click="closeMenu">
            Strona główna
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" class="text-stone-600 hover:text-warm-700 transition-colors" @click="closeMenu">
            Blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="text-stone-600 hover:text-warm-700 transition-colors" @click="closeMenu">
            O blogu
          </NuxtLink>
        </li>
      </ul>

      <!-- Hamburger button (mobile only) -->
      <button
        class="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
        :aria-label="isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'"
        :aria-expanded="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span
          class="block w-6 h-0.5 bg-stone-700 transition-all duration-300 origin-center"
          :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"
        />
        <span
          class="block w-6 h-0.5 bg-stone-700 transition-all duration-300"
          :class="isMenuOpen ? 'opacity-0' : ''"
        />
        <span
          class="block w-6 h-0.5 bg-stone-700 transition-all duration-300 origin-center"
          :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"
        />
      </button>
    </nav>

    <!-- Mobile dropdown menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden border-t border-warm-200 bg-white/95 backdrop-blur-md"
    >
      <ul class="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1 text-sm font-medium">
        <li>
          <NuxtLink
            to="/"
            class="block py-3 text-stone-600 hover:text-warm-700 transition-colors border-b border-warm-100"
            @click="closeMenu"
          >
            Strona główna
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/blog"
            class="block py-3 text-stone-600 hover:text-warm-700 transition-colors border-b border-warm-100"
            @click="closeMenu"
          >
            Blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="block py-3 text-stone-600 hover:text-warm-700 transition-colors"
            @click="closeMenu"
          >
            O blogu
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
