<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: string
  image: string
  path: string
  tags: string[]
}>()

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <NuxtLink :to="path" class="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
    <div class="aspect-[16/10] overflow-hidden bg-warm-100">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      >
    </div>
    <div class="p-5">
      <div class="flex flex-wrap gap-2 mb-3">
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-xs font-medium px-2 py-0.5 rounded-full bg-warm-100 text-warm-700"
        >
          {{ tag }}
        </span>
      </div>
      <h3 class="text-lg font-semibold text-stone-800 group-hover:text-warm-700 transition-colors mb-2">
        {{ title }}
      </h3>
      <p class="text-sm text-stone-500 mb-3 line-clamp-2">{{ description }}</p>
      <time :datetime="date" class="text-xs text-stone-400">{{ formatDate(date) }}</time>
    </div>
  </NuxtLink>
</template>
