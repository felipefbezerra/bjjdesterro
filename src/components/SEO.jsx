import { useEffect } from 'react'

const SITE_URL = 'https://jiujitsudesterro.vercel.app'

const DEFAULT_TITLE =
  'Jiu-Jitsu Gratuito em Desterro (PB) | Projeto Social'

const DEFAULT_DESCRIPTION =
  'Projeto social de jiu-jitsu em Desterro, Paraíba. Aulas gratuitas para crianças a partir de 7 anos e adultos. Disciplina e Educação para a Vida.'

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attribute).forEach(([key, val]) => {
    element.setAttribute(key, val)
  })

  element.setAttribute('content', value)
}

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = '/img/bjjlogo.png',
  type = 'website',
  schema,
  noIndex = false,
}) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`
    const imageUrl = image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`

    document.title = title
    document.documentElement.lang = 'pt-BR'

    setMeta(
      'meta[name="description"]',
      { name: 'description' },
      description,
    )

    setMeta(
  'meta[name="robots"]',
  { name: 'robots' },
  noIndex ? 'noindex, nofollow' : 'index, follow',
)

    setMeta(
      'meta[property="og:title"]',
      { property: 'og:title' },
      title,
    )

    setMeta(
      'meta[property="og:description"]',
      { property: 'og:description' },
      description,
    )

    setMeta(
      'meta[property="og:type"]',
      { property: 'og:type' },
      type,
    )

    setMeta(
      'meta[property="og:url"]',
      { property: 'og:url' },
      canonicalUrl,
    )

    setMeta(
      'meta[property="og:image"]',
      { property: 'og:image' },
      imageUrl,
    )

    setMeta(
      'meta[property="og:locale"]',
      { property: 'og:locale' },
      'pt_BR',
    )

    setMeta(
      'meta[property="og:site_name"]',
      { property: 'og:site_name' },
      'Projeto Jiu-Jitsu Desterro',
    )

    setMeta(
      'meta[name="twitter:card"]',
      { name: 'twitter:card' },
      'summary_large_image',
    )

    setMeta(
      'meta[name="twitter:title"]',
      { name: 'twitter:title' },
      title,
    )

    setMeta(
      'meta[name="twitter:description"]',
      { name: 'twitter:description' },
      description,
    )

    setMeta(
      'meta[name="twitter:image"]',
      { name: 'twitter:image' },
      imageUrl,
    )

    let canonical = document.head.querySelector(
      'link[rel="canonical"]',
    )

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }

    canonical.setAttribute('href', canonicalUrl)

    const existingSchema = document.getElementById(
      'structured-data',
    )

    if (existingSchema) {
      existingSchema.remove()
    }

    if (schema) {
      const script = document.createElement('script')

      script.id = 'structured-data'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)

      document.head.appendChild(script)
    }
  }, [title, description, path, image, type, schema])

  noIndex

  return null

  
}