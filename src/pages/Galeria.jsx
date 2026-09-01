import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import {
  ArrowLeft,
  ArrowRight,
  Images,
  X,
} from 'lucide-react'

import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import fotos from '../data/fotos.json'

const categories = [
  {
    key: 'all',
    label: 'Todas',
  },
  {
    key: 'campeonatos',
    label: 'Campeonatos',
  },
  {
    key: 'treinos',
    label: 'Treinos',
  },
  {
    key: 'visitas',
    label: 'Visitas',
  },
  {
    key: 'graduacoes',
    label: 'Graduações',
  },
]

const categoryLabels = {
  campeonatos: 'Campeonatos',
  treinos: 'Treinos',
  visitas: 'Visitas',
  graduacoes: 'Graduações',
}

const INITIAL_LIMIT = 12

function normalizeImagePath(src) {
  return src.startsWith('/')
    ? src
    : `/${src}`
}

/*
 * Distribui as categorias para que a primeira tela
 * não mostre apenas fotografias de campeonatos.
 */
function mixCategories(items) {
  const keys = categories
    .filter(({ key }) => key !== 'all')
    .map(({ key }) => key)

  const groups = keys.reduce(
    (result, key) => ({
      ...result,
      [key]: items.filter(
        (photo) => photo.categoria === key,
      ),
    }),
    {},
  )

  const largestGroup = Math.max(
    ...Object.values(groups).map(
      (group) => group.length,
    ),
  )

  const result = []

  for (
    let index = 0;
    index < largestGroup;
    index += 1
  ) {
    keys.forEach((key) => {
      if (groups[key][index]) {
        result.push(groups[key][index])
      }
    })
  }

  return result
}

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Galeria | Projeto Jiu-Jitsu Desterro',
  description:
    'Fotos de treinos, competições, graduações e visitas do Projeto Jiu-Jitsu Desterro, na Paraíba.',
  url: 'https://jiujitsudesterro.vercel.app/galeria',
}

export default function Galeria() {
  const [activeFilter, setActiveFilter] =
    useState('all')

  const [showAll, setShowAll] =
    useState(false)

  const [lightboxIndex, setLightboxIndex] =
    useState(null)

  const closeButtonRef = useRef(null)
  const dialogRef = useRef(null)
  const lastFocusedElement = useRef(null)

  const mixedPhotos = useMemo(
    () => mixCategories(fotos),
    [],
  )

  const filteredPhotos = useMemo(() => {
    if (activeFilter === 'all') {
      return mixedPhotos
    }

    return fotos.filter(
      (photo) =>
        photo.categoria === activeFilter,
    )
  }, [activeFilter, mixedPhotos])

  const displayedPhotos = useMemo(() => {
    if (
      activeFilter === 'all' &&
      !showAll
    ) {
      return filteredPhotos.slice(
        0,
        INITIAL_LIMIT,
      )
    }

    return filteredPhotos
  }, [
    activeFilter,
    filteredPhotos,
    showAll,
  ])

  const lightboxPhoto =
    lightboxIndex !== null
      ? displayedPhotos[lightboxIndex]
      : null

  function handleFilter(key) {
    setActiveFilter(key)
    setShowAll(false)
    setLightboxIndex(null)
  }

  function openLightbox(index) {
    lastFocusedElement.current =
      document.activeElement

    setLightboxIndex(index)
  }

  function closeLightbox() {
    setLightboxIndex(null)
  }

  function showPrevious() {
    setLightboxIndex((current) => {
      if (current === null) {
        return null
      }

      return current === 0
        ? displayedPhotos.length - 1
        : current - 1
    })
  }

  function showNext() {
    setLightboxIndex((current) => {
      if (current === null) {
        return null
      }

      return current ===
        displayedPhotos.length - 1
        ? 0
        : current + 1
    })
  }

  /*
   * Modal:
   * - bloqueia scroll
   * - Escape fecha
   * - setas navegam
   * - Tab permanece dentro do diálogo
   * - foco volta para a miniatura ao fechar
   */
  useEffect(() => {
    if (lightboxIndex === null) {
      return undefined
    }

    const previousOverflow =
      document.body.style.overflow

    document.body.style.overflow = 'hidden'

    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeLightbox()
        return
      }

      if (event.key === 'ArrowLeft') {
        showPrevious()
        return
      }

      if (event.key === 'ArrowRight') {
        showNext()
        return
      }

      if (
        event.key === 'Tab' &&
        dialogRef.current
      ) {
        const focusableElements =
          dialogRef.current.querySelectorAll(
            'button:not([disabled]), a[href]',
          )

        if (!focusableElements.length) {
          return
        }

        const first =
          focusableElements[0]

        const last =
          focusableElements[
            focusableElements.length - 1
          ]

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault()
          last.focus()
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener(
      'keydown',
      handleKeyDown,
    )

    return () => {
      document.body.style.overflow =
        previousOverflow

      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )

      lastFocusedElement.current?.focus()
    }
  }, [
    lightboxIndex,
    displayedPhotos.length,
  ])

  return (
    <>
      <SEO
        title="Fotos e Conquistas | Projeto Jiu-Jitsu Desterro"
        description="Veja fotos dos treinos, campeonatos, graduações e visitas do Projeto Jiu-Jitsu Desterro, na Paraíba."
        path="/galeria"
        schema={gallerySchema}
      />

      <div className="bg-light min-h-screen">
        <PageHero
          accent="Nossa trajetória"
          title="Galeria"
          subtitle="Registros de treinos, competições, graduações e encontros que fazem parte da história do projeto."
        />

        <section className="bg-white py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* CABEÇALHO */}
            <div className="max-w-2xl mb-10">
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                Arquivo do projeto
              </p>

              <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide">
                Registros do tatame
              </h2>

              <p className="text-zinc-600 mt-4 leading-relaxed">
                As fotografias documentam diferentes
                momentos da atuação do projeto em
                Desterro e em competições da região.
              </p>
            </div>

            {/* FILTROS */}
            <div
              className="flex flex-wrap gap-2 mb-12"
              role="group"
              aria-label="Filtrar fotografias por categoria"
            >
              {categories.map(
                ({ key, label }) => {
                  const count =
                    key === 'all'
                      ? fotos.length
                      : fotos.filter(
                          (photo) =>
                            photo.categoria ===
                            key,
                        ).length

                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() =>
                        handleFilter(key)
                      }
                      aria-pressed={
                        activeFilter === key
                      }
                      className={`px-4 py-2 rounded-full border text-[11px] font-bold uppercase tracking-wider transition-colors ${
                        activeFilter === key
                          ? 'bg-black border-black text-white'
                          : 'bg-white border-zinc-300 text-zinc-500 hover:border-black hover:text-black'
                      }`}
                    >
                      {label}

                      <span
                        className={`ml-2 ${
                          activeFilter === key
                            ? 'text-zinc-400'
                            : 'text-zinc-400'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  )
                },
              )}
            </div>

            {/* FOTOS */}
            {displayedPhotos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
                {displayedPhotos.map(
                  (photo, index) => (
                    <figure
                      key={`${photo.src}-${index}`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          openLightbox(index)
                        }
                        className="block w-full text-left group"
                        aria-label={`Ampliar foto: ${photo.alt}`}
                      >
                        <span className="block relative overflow-hidden rounded-xl bg-zinc-900 aspect-square">
                          <img
                            src={normalizeImagePath(
                              photo.src,
                            )}
                            alt={photo.alt}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />

                          <span className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                        </span>
                      </button>

                      <figcaption className="pt-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">
                          {categoryLabels[
                            photo.categoria
                          ] ||
                            photo.categoria}
                        </p>

                        <p className="text-sm text-zinc-700 leading-relaxed">
                          {photo.alt}
                        </p>
                      </figcaption>
                    </figure>
                  ),
                )}
              </div>
            ) : (
              <div className="border-y border-zinc-200 py-16 text-center">
                <Images
                  size={34}
                  className="mx-auto text-zinc-300 mb-4"
                  aria-hidden="true"
                />

                <p className="text-sm text-zinc-500">
                  Ainda não há fotografias nesta
                  categoria.
                </p>
              </div>
            )}

            {/* VER MAIS */}
            {activeFilter === 'all' &&
              !showAll &&
              filteredPhotos.length >
                INITIAL_LIMIT && (
                <div className="mt-14 text-center">
                  <button
                    type="button"
                    onClick={() =>
                      setShowAll(true)
                    }
                    className="btn-primary"
                  >
                    Ver mais fotos
                  </button>

                  <p className="text-xs text-zinc-400 mt-3">
                    {filteredPhotos.length -
                      INITIAL_LIMIT}{' '}
                    registros adicionais
                  </p>
                </div>
              )}
          </div>
        </section>

        {/* CONTEXTO */}
        <section className="bg-zinc-950 text-white py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:items-center">
            <div>
              <p className="text-red-400 font-bold uppercase tracking-[4px] text-xs mb-3">
                Acervo em construção
              </p>

              <h2 className="font-display text-4xl md:text-5xl tracking-wide">
                A história também é feita de registros
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed mt-3 max-w-2xl">
                A galeria será ampliada à medida que
                novos treinos, competições, graduações e
                atividades forem documentados.
              </p>
            </div>

            <a
              href="/contato"
              className="text-sm font-bold text-white hover:text-red-400 transition-colors"
            >
              Conhecer o projeto →
            </a>
          </div>
        </section>
      </div>

      {/* LIGHTBOX */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeLightbox()
            }
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Foto ampliada: ${lightboxPhoto.alt}`}
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col items-center"
          >
            {/* FECHAR */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              className="absolute -top-1 right-0 md:-right-12 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors z-20"
              aria-label="Fechar fotografia ampliada"
            >
              <X
                size={24}
                aria-hidden="true"
              />
            </button>

            {/* IMAGEM */}
            <div className="w-full flex items-center justify-center pt-14 md:pt-0">
              <img
                src={normalizeImagePath(
                  lightboxPhoto.src,
                )}
                alt={lightboxPhoto.alt}
                className="max-w-full max-h-[75vh] object-contain"
              />
            </div>

            {/* LEGENDA */}
            <div className="w-full max-w-3xl text-center mt-5 px-12">
              <p className="text-red-300 text-[10px] uppercase tracking-widest font-bold mb-2">
                {categoryLabels[
                  lightboxPhoto.categoria
                ] ||
                  lightboxPhoto.categoria}
              </p>

              <p className="text-white text-sm md:text-base leading-relaxed">
                {lightboxPhoto.alt}
              </p>
            </div>

            {/* NAVEGAÇÃO */}
            {displayedPhotos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 md:bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  aria-label="Fotografia anterior"
                >
                  <ArrowLeft
                    size={21}
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 md:bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  aria-label="Próxima fotografia"
                >
                  <ArrowRight
                    size={21}
                    aria-hidden="true"
                  />
                </button>
              </>
            )}

            <p className="text-zinc-500 text-xs mt-4">
              {lightboxIndex + 1} de{' '}
              {displayedPhotos.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}