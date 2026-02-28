<script setup lang="ts">
useSeoMeta({
  title: 'Hello Wrocław - Odkryj historię i tajemnice miasta',
  ogTitle: 'Hello Wrocław - Odkryj historię i tajemnice miasta',
  description: 'Blog o Wrocławiu - odkryj fascynującą historię, zabytki, krasnale i tajemnice jednego z najpiękniejszych miast w Polsce.',
  ogDescription: 'Blog o Wrocławiu - odkryj fascynującą historię, zabytki, krasnale i tajemnice jednego z najpiękniejszych miast w Polsce.',
})

const { data: posts } = await useAsyncData('recent-posts', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .limit(3)
    .all(),
)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="py-20 px-6 text-center bg-gradient-to-b from-warm-100 to-warm-50">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-bold text-stone-800 mb-6">
          Hello <span class="text-warm-600">Wrocław</span>
        </h1>
        <p class="text-lg md:text-xl text-stone-600 leading-relaxed">
          Odkryj fascynującą historię, zabytki i tajemnice jednego z najpiękniejszych miast w Polsce.
          Mosty, krasnale, gotyckie kościoły i tętniący życiem Rynek — to wszystko czeka na Ciebie.
        </p>
      </div>
    </section>

    <!-- Recent articles -->
    <section class="max-w-5xl mx-auto px-6 py-16">
      <h2 class="text-2xl font-bold text-stone-800 mb-8">Najnowsze artykuły</h2>
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
      <div class="mt-10 text-center">
        <NuxtLink to="/blog" class="inline-block px-6 py-3 bg-warm-600 text-white font-medium rounded-lg hover:bg-warm-700 transition-colors">
          Zobacz wszystkie artykuły
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
