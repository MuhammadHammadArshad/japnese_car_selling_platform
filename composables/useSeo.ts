// composables/useSeo.ts
import { useHead } from '#imports'

export function useSeo(options: {
  title: string
  description?: string
  ogImage?: string
  canonical?: string
}) {
  const config = useRuntimeConfig().public
  const origin = config.appOrigin
  const canonicalUrl = options.canonical || origin + useRoute().path
  useHead({
    title: options.title,
    meta: [
      options.description && { name: 'description', content: options.description },
      { property: 'og:title', content: options.title },
      options.description && { property: 'og:description', content: options.description },
      options.ogImage && { property: 'og:image', content: options.ogImage.startsWith('http') ? options.ogImage : origin + options.ogImage },
    ].filter(Boolean) as any[],
    link: [
      { rel: 'canonical', href: canonicalUrl }
    ]
  })
}
