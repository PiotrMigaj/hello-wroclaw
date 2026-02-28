<script setup lang="ts">
useSeoMeta({
  title: 'Artykuły o Wrocławiu - Historia, zabytki i ciekawostki',
  ogTitle: 'Artykuły o Wrocławiu - Historia, zabytki i ciekawostki',
  description: 'Przeczytaj artykuły o historii Wrocławia, zabytkach, krasnalach, mostach i innych ciekawostkach tego fascynującego miasta.',
  ogDescription: 'Przeczytaj artykuły o historii Wrocławia, zabytkach, krasnalach, mostach i innych ciekawostkach tego fascynującego miasta.',
})

const { data: posts } = await useAsyncData('blog-listing', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .all(),
)
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-16">
    <h1 class="text-3xl font-bold text-stone-800 mb-2">Blog</h1>
    <p class="text-stone-500 mb-10">Artykuły o historii, zabytkach i ciekawostkach Wrocławia.</p>

    <div v-if="posts?.length" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <ArticleCard
        v-for="post in posts"
        :key="post.path"
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :image="post.image"
        :path="post.path"
        :tags="post.tags"
      />
    </div>
    <p v-else class="text-stone-500">Brak artykułów.</p>
  </div>
</template>
