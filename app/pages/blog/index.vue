<script setup lang="ts">
const siteUrl = 'https://hellowroclaw.pl'

useSeoMeta({
  title: 'Artykuły o Wrocławiu - Historia, zabytki i ciekawostki',
  ogTitle: 'Artykuły o Wrocławiu - Historia, zabytki i ciekawostki',
  description: 'Przeczytaj artykuły o historii Wrocławia, zabytkach, krasnalach, mostach i innych ciekawostkach tego fascynującego miasta.',
  ogDescription: 'Przeczytaj artykuły o historii Wrocławia, zabytkach, krasnalach, mostach i innych ciekawostkach tego fascynującego miasta.',
  ogUrl: `${siteUrl}/blog`,
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/blog` }],
})

const { data: posts } = await useAsyncData('blog-listing', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .all(),
)

const search = ref('')
const activeTag = ref<string | null>(null)

const allTags = computed(() => {
  const tags = posts.value?.flatMap(p => p.tags) ?? []
  return [...new Set(tags)].sort()
})

const filteredPosts = computed(() => {
  const q = search.value.trim().toLowerCase()
  return (posts.value ?? []).filter((post) => {
    const matchesSearch = !q
      || post.title.toLowerCase().includes(q)
      || post.description.toLowerCase().includes(q)
    const matchesTag = !activeTag.value || post.tags.includes(activeTag.value)
    return matchesSearch && matchesTag
  })
})

function toggleTag(tag: string) {
  activeTag.value = activeTag.value === tag ? null : tag
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-10 md:py-16">
    <h1 class="text-3xl font-bold text-stone-800 mb-2">Blog</h1>
    <p class="text-stone-500 mb-8">Artykuły o historii, zabytkach i ciekawostkach Wrocławia.</p>

    <!-- Search -->
    <div class="relative mb-6">
      <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
      </svg>
      <input
        v-model="search"
        type="search"
        placeholder="Szukaj artykułów…"
        class="w-full pl-9 pr-4 py-2.5 rounded-lg border border-warm-200 bg-white text-stone-700 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-warm-400 focus:border-transparent transition"
      >
    </div>

    <!-- Tag filters -->
    <div v-if="allTags.length" class="flex flex-wrap gap-2 mb-8">
      <button
        v-for="tag in allTags"
        :key="tag"
        class="px-3 py-1 rounded-full text-xs font-medium transition-colors"
        :class="activeTag === tag
          ? 'bg-warm-600 text-white'
          : 'bg-warm-100 text-warm-700 hover:bg-warm-200'"
        @click="toggleTag(tag)"
      >
        {{ tag }}
      </button>
    </div>

    <!-- Results -->
    <div v-if="filteredPosts.length" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <ArticleCard
        v-for="post in filteredPosts"
        :key="post.path"
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :image="post.image"
        :path="post.path"
        :tags="post.tags"
      />
    </div>

    <p v-else class="text-stone-500 py-12 text-center">
      Brak artykułów pasujących do
      <template v-if="search && activeTag">&ldquo;{{ search }}&rdquo; z tagiem &ldquo;{{ activeTag }}&rdquo;</template>
      <template v-else-if="search">&ldquo;{{ search }}&rdquo;</template>
      <template v-else>tagu &ldquo;{{ activeTag }}&rdquo;</template>.
      <button class="ml-1 text-warm-600 hover:underline" @click="search = ''; activeTag = null">Wyczyść filtry</button>
    </p>
  </div>
</template>
