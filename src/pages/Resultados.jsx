import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  CalendarDays,
  MapPin,
  Newspaper,
} from 'lucide-react'

import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import { resultados } from '../data/resultados'

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Resultados e Notícias | Projeto Jiu-Jitsu Desterro',
  description:
    'Resultados esportivos, competições, notícias e reconhecimento institucional do Projeto Jiu-Jitsu Desterro.',
  url: 'https://jiujitsudesterro.vercel.app/resultados',
}

export default function Resultados() {
  return (
    <>
      <SEO
        title="Resultados e Notícias | Jiu-Jitsu Desterro (PB)"
        description="Acompanhe resultados esportivos, campeonatos, notícias e reconhecimento institucional do Projeto Jiu-Jitsu Desterro, na Paraíba."
        path="/resultados"
        schema={collectionSchema}
      />

      <div className="bg-light min-h-screen">
        <PageHero
          accent="Projeto em atividade"
          title="Resultados e Notícias"
          subtitle="Competições, conquistas e acontecimentos que fazem parte da trajetória do Projeto Jiu-Jitsu Desterro."
        />

        {/* DESTAQUE */}
        <section className="bg-white py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                Reconhecimento
              </p>

              <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide">
                Destaque recente
              </h2>
            </div>

            <article className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] border-y border-zinc-200">
              <div className="py-8 lg:pr-10 lg:border-r border-zinc-200">
                <p className="font-display text-6xl md:text-7xl text-zinc-200">
                  13
                </p>

                <p className="font-display text-3xl text-black tracking-wide">
                  JUN · 2026
                </p>

                <p className="inline-flex items-center gap-2 text-xs text-zinc-500 mt-4">
                  <MapPin
                    size={15}
                    aria-hidden="true"
                  />
                  Desterro · PB
                </p>
              </div>

              <div className="py-8 lg:pl-10">
                <div className="flex items-center gap-2 text-accent mb-4">
                  <Newspaper
                    size={17}
                    aria-hidden="true"
                  />

                  <span className="text-xs font-bold uppercase tracking-widest">
                    Institucional
                  </span>
                </div>

                <h3 className="font-display text-4xl md:text-5xl text-black tracking-wide leading-none mb-5">
                  Projeto recebe Moção de Apoio da Câmara Municipal de Desterro
                </h3>

                <p className="text-zinc-600 leading-relaxed max-w-3xl mb-7">
                  O Projeto Jiu-Jitsu — Disciplina e Educação
                  para a Vida recebeu reconhecimento do Poder
                  Legislativo municipal e apresentou sua
                  trajetória e atuação à população de Desterro.
                </p>

                <Link
                  to="/noticias/mocao-de-apoio-camara-desterro-2026"
                  className="inline-flex items-center gap-2 font-bold text-sm text-black hover:text-accent transition-colors"
                >
                  Ler notícia
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* COMPETIÇÕES */}
        <section className="bg-zinc-100 py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                No tatame
              </p>

              <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide">
                Competições
              </h2>

              <p className="text-zinc-600 mt-4 leading-relaxed">
                Alguns registros da participação do projeto em
                eventos esportivos dentro e fora da Paraíba.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-12">
              {resultados.map((resultado) => (
                <article
                  key={resultado.id}
                  className="group"
                >
                  <div className="overflow-hidden rounded-xl bg-zinc-900 aspect-[16/10]">
                    <img
                      src={resultado.imagem}
                      alt={resultado.titulo}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="pt-5">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays
                          size={14}
                          aria-hidden="true"
                        />
                        {resultado.ano}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <MapPin
                          size={14}
                          aria-hidden="true"
                        />
                        {resultado.local}
                      </span>
                    </div>

                    <h3 className="font-display text-3xl md:text-4xl text-black tracking-wide leading-none mb-3">
                      {resultado.titulo}
                    </h3>

                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {resultado.resumo}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* POSICIONAMENTO */}
        <section className="bg-black text-white py-16 md:py-20 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-7 items-start">
            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center">
              <Award
                size={21}
                className="text-red-400"
                aria-hidden="true"
              />
            </div>

            <div>
              <h2 className="font-display text-4xl md:text-5xl tracking-wide mb-4">
                Representando Desterro no jiu-jitsu
              </h2>

              <p className="text-zinc-400 leading-relaxed max-w-3xl">
                A participação em campeonatos permite que os
                alunos vivenciem novas experiências esportivas
                e também leva o nome do município de Desterro
                para eventos realizados em diferentes cidades
                da região.
              </p>

              <Link
                to="/galeria"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-red-400 transition-colors mt-6"
              >
                Ver registros na galeria
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}