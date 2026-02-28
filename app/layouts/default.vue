<template>
  <div class="min-h-screen flex flex-col bg-warm-50 font-sans text-stone-800">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
