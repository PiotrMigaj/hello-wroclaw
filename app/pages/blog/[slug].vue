<script setup lang="ts">
const route = useRoute()
const siteUrl = 'https://hello-wroclaw.netlify.app'

const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first(),
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artykuł nie został znaleziony' })
}

const absoluteImage = post.value.image?.startsWith('http')
  ? post.value.image
  : `${siteUrl}${post.value.image}`

useSeoMeta({
  title: post.value.title,
  ogTitle: post.value.title,
  description: post.value.description,
  ogDescription: post.value.description,
  ogImage: absoluteImage,
  ogType: 'article',
  ogUrl: `${siteUrl}${route.path}`,
  articlePublishedTime: post.value.date,
  articleTag: post.value.tags,
  twitterCard: 'summary_large_image',
  twitterTitle: post.value.title,
  twitterDescription: post.value.description,
  twitterImage: absoluteImage,
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}${route.path}` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.value.title,
        description: post.value.description,
        image: absoluteImage,
        datePublished: post.value.date,
        url: `${siteUrl}${route.path}`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${siteUrl}${route.path}`,
        },
        author: {
          '@type': 'Organization',
          name: 'Hello Wrocław',
          url: siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Hello Wrocław',
          url: siteUrl,
        },
        keywords: post.value.tags.join(', '),
      }),
    },
  ],
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article v-if="post" class="max-w-3xl mx-auto px-6 py-16">
    <header class="mb-12">
      <NuxtLink to="/blog" class="text-sm text-warm-600 hover:text-warm-700 transition-colors mb-6 inline-flex items-center gap-1">
        &larr; Powrót do bloga
      </NuxtLink>

      <div class="flex flex-wrap gap-2 mb-4 mt-6">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="px-2.5 py-0.5 rounded-full bg-warm-100 text-warm-700 text-xs font-medium"
        >
          {{ tag }}
        </span>
      </div>

      <h1 class="text-3xl md:text-4xl font-bold text-stone-800 mb-4 leading-tight">
        {{ post.title }}
      </h1>

      <p class="text-lg text-stone-500 leading-relaxed mb-4">
        {{ post.description }}
      </p>

      <time :datetime="post.date" class="text-sm text-stone-400 block mb-8">
        {{ formatDate(post.date) }}
      </time>

      <div class="aspect-[16/9] rounded-2xl overflow-hidden bg-warm-100">
        <img :src="post.image" :alt="post.title" class="w-full h-full object-cover">
      </div>
    </header>

    <div class="prose prose-stone prose-lg max-w-none
      prose-headings:font-bold prose-headings:text-stone-800
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-warm-100
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
      prose-p:text-stone-600 prose-p:leading-relaxed
      prose-li:text-stone-600 prose-li:my-1
      prose-ul:my-4 prose-ul:space-y-1
      prose-strong:text-stone-800 prose-strong:font-semibold
      prose-a:text-warm-600 prose-a:font-medium prose-a:underline prose-a:decoration-warm-300 prose-a:underline-offset-2 hover:prose-a:decoration-warm-600 hover:prose-a:text-warm-700
      prose-img:rounded-xl prose-img:shadow-sm
      prose-hr:border-warm-100">
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>
