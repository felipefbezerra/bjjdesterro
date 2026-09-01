import { Link } from 'react-router-dom'
import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react'

import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import {
  contact,
  createWhatsAppUrl,
} from '../data/contacts'

const destaques = [
  {
    icon: Award,
    label: 'Faixa-preta',
    description: 'Jiu-Jitsu',
  },
  {
    icon: GraduationCap,
    label: 'Bacharel',
    description: 'Educação Física',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Presidente',
    description: 'Associação',
  },
  {
    icon: ShieldCheck,
    label: 'Fundador',
    description: 'Projeto desde 2013',
  },
]

const trajetoria = [
  {
    ano: '2013',
    titulo: 'Fundação do projeto',
    texto:
      'Ramon inicia em Desterro o Projeto Jiu-Jitsu — Disciplina e Educação para a Vida, com atividades gratuitas para a comunidade.',
  },
  {
    ano: '2023',
    titulo: 'Participação em competições',
    texto:
      'O projeto participa de eventos como o Campeonato Paraibano em Pombal e o Open de Patos, representando Desterro no circuito esportivo regional.',
  },
  {
    ano: '2025',
    titulo: 'Formalização da associação',
    texto:
      'Com a constituição formal da Associação Jiu-Jitsu — Disciplina e Educação para a Vida, Ramon Cleber assume a presidência da entidade.',
  },
  {
    ano: '2026',
    titulo: 'Reconhecimento institucional',
    texto:
      'Ramon representa o projeto na Câmara Municipal de Desterro durante a solenidade em que a instituição recebe uma Moção de Apoio.',
  },
]

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ramon Cleber do Carmo Lima',
  image:
    'https://jiujitsudesterro.vercel.app/img/membros/professorramon.jpeg',
  jobTitle: 'Professor de Jiu-Jitsu',
  description:
    'Faixa-preta de jiu-jitsu, fundador do Projeto Jiu-Jitsu Desterro e presidente da Associação Jiu-Jitsu — Disciplina e Educação para a Vida.',
  affiliation: {
    '@type': 'Organization',
    name: 'Associação Jiu-Jitsu - Disciplina e Educação para a Vida',
    url: 'https://jiujitsudesterro.vercel.app/',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Desterro',
    addressRegion: 'PB',
    addressCountry: 'BR',
  },
}

const whatsappMessage =
  'Olá, professor Ramon! Conheci o Projeto Jiu-Jitsu Desterro pelo site e gostaria de mais informações sobre os treinos.'

export default function Professor() {
  return (
    <>
      <SEO
        title="Professor Ramon Cleber | Jiu-Jitsu Desterro (PB)"
        description="Conheça Ramon Cleber do Carmo Lima, faixa-preta de jiu-jitsu, fundador do projeto social Jiu-Jitsu Desterro e presidente da associação."
        path="/professor"
        image="/img/membros/professorramon.jpeg"
        schema={personSchema}
      />

      <div className="bg-light min-h-screen">
        <PageHero
          accent="Fundador · Professor"
          title="Ramon Cleber"
          subtitle="Conheça o professor responsável pela criação e coordenação do Projeto Jiu-Jitsu Desterro."
        />

        {/* BIOGRAFIA */}
        <section className="bg-white py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              {/* FOTO */}
              <div>
                <figure className="relative max-w-md mx-auto">
                  <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/25 rounded-2xl" />

                  <div className="relative rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl">
                    <img
                      src="/img/membros/professorramon.jpeg"
                      alt="Professor Ramon Cleber do Carmo Lima"
                      loading="eager"
                      decoding="async"
                      className="w-full aspect-[3/4] object-cover object-center"
                    />

                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-24">
                      <p className="font-display text-3xl text-white tracking-wide">
                        Ramon Cleber
                      </p>

                      <p className="text-red-300 text-xs font-bold uppercase tracking-widest mt-1">
                        Faixa-preta · Fundador · Professor
                      </p>
                    </figcaption>
                  </div>
                </figure>
              </div>

              {/* BIO */}
              <div>
                <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                  Sobre o professor
                </p>

                <h1 className="font-display text-6xl md:text-7xl tracking-wide text-black leading-none mb-6">
                  Ramon
                  <br />
                  Cleber
                </h1>

                <div className="w-12 h-1 bg-accent mb-8" />

                <div className="space-y-5 text-zinc-600 leading-relaxed">
                  <p>
                    <strong>Ramon Cleber do Carmo Lima</strong>{' '}
                    é faixa-preta de jiu-jitsu, bacharel em
                    Educação Física e fundador do Projeto
                    Jiu-Jitsu — Disciplina e Educação para a
                    Vida.
                  </p>

                  <p>
                    Em 2013, iniciou o projeto em Desterro com a
                    proposta de oferecer treinamento gratuito à
                    comunidade. Desde então, acompanha turmas
                    infantis e adultas e participa da formação
                    técnica dos alunos.
                  </p>

                  <p>
                    Com a formalização da Associação Jiu-Jitsu —
                    Disciplina e Educação para a Vida, em 2025,
                    passou também a exercer a presidência da
                    entidade.
                  </p>

                  <p>
                    Em junho de 2026, representou a instituição
                    na Câmara Municipal de Desterro durante a
                    apresentação pública do projeto e a concessão
                    de uma Moção de Apoio ao trabalho
                    desenvolvido.
                  </p>
                </div>

                {/* CREDENCIAIS */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-7 mt-10 pt-8 border-t border-zinc-200">
                  {destaques.map(
                    ({
                      icon: Icon,
                      label,
                      description,
                    }) => (
                      <div
                        key={label}
                        className="flex items-start gap-3"
                      >
                        <Icon
                          size={21}
                          className="text-accent flex-shrink-0 mt-1"
                          aria-hidden="true"
                        />

                        <div>
                          <p className="font-bold text-black text-sm">
                            {label}
                          </p>

                          <p className="text-xs text-zinc-500 mt-1">
                            {description}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mt-10">
                  <a
                    href={createWhatsAppUrl(
                      contact.ramon.whatsapp,
                      whatsappMessage,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle
                      size={18}
                      aria-hidden="true"
                    />
                    Falar com o professor
                  </a>

                  <Link
                    to="/agenda"
                    className="inline-flex items-center px-6 py-3 font-bold text-sm text-black hover:text-accent transition-colors"
                  >
                    Ver horários de treino
                    <span
                      className="ml-2"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRAJETÓRIA */}
        <section className="bg-zinc-950 text-white py-20 md:py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl mb-14">
              <p className="text-red-400 font-bold uppercase tracking-[4px] text-xs mb-3">
                Atuação
              </p>

              <h2 className="font-display text-5xl md:text-6xl tracking-wide">
                Trajetória no projeto
              </h2>

              <p className="text-zinc-400 leading-relaxed mt-4">
                A história do professor está diretamente ligada
                à construção e à continuidade do projeto em
                Desterro.
              </p>
            </div>

            <div className="border-t border-zinc-800">
              {trajetoria.map((item) => (
                <article
                  key={`${item.ano}-${item.titulo}`}
                  className="grid grid-cols-[75px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10 py-8 border-b border-zinc-800"
                >
                  <p className="font-display text-3xl md:text-4xl text-red-400">
                    {item.ano}
                  </p>

                  <div>
                    <h3 className="font-display text-2xl md:text-3xl tracking-wide text-white mb-2">
                      {item.titulo}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                      {item.texto}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PAPEL NO PROJETO */}
        <section className="bg-white py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            <div>
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                No dia a dia
              </p>

              <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide leading-none">
                Professor,
                <br />
                coordenador e dirigente
              </h2>
            </div>

            <div className="space-y-6 text-zinc-600 leading-relaxed">
              <p>
                A atuação de Ramon não se limita à condução dos
                treinos. Como fundador e presidente da
                associação, ele participa da organização das
                atividades, do acompanhamento dos alunos e da
                representação institucional do projeto.
              </p>

              <p>
                Essa combinação entre trabalho técnico no tatame
                e gestão da instituição ajuda a manter uma
                continuidade entre os objetivos esportivos e a
                atuação social desenvolvida em Desterro.
              </p>

              <div className="pt-4">
                <Link
                  to="/sobre"
                  className="inline-flex items-center font-bold text-sm text-black hover:text-accent transition-colors"
                >
                  Conheça a história do projeto
                  <span
                    className="ml-2"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-zinc-100 py-16 md:py-20 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                Conheça o treino
              </p>

              <h2 className="font-display text-4xl md:text-5xl text-black tracking-wide">
                Visite o projeto em Desterro
              </h2>

              <p className="text-zinc-600 text-sm mt-3">
                Consulte os horários e entre em contato antes da
                sua primeira aula.
              </p>
            </div>

            <Link
              to="/contato"
              className="btn-primary whitespace-nowrap text-center"
            >
              Quero participar
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}