import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CalendarDays,
  FileCheck,
  Landmark,
  Users,
} from 'lucide-react'

import PageHero from '../components/PageHero'
import SEO from '../components/SEO'

const graduados = [
  {
    nome: 'Jerffeson Ramon',
    cargo: 'Adulto · Faixa Roxa',
    img: '/img/membros/jerffeson.jpeg',
  },
  {
    nome: 'Thaissa Vitória',
    cargo: 'Adulto · Faixa Azul',
    img: '/img/membros/thaissavitoria.jpeg',
  },
  {
    nome: 'Arquires Ryan',
    cargo: 'Juvenil · Faixa Azul',
    img: '/img/membros/arquires.jpeg',
  },
  {
    nome: 'Laís Oliveira',
    cargo: 'Adulto · Faixa Azul',
    img: '/img/membros/laisoliveira.jpeg',
  },
  {
    nome: 'Inácio Teles',
    cargo: 'Adulto · Faixa Azul',
    img: '/img/membros/inacioteles.jpeg',
  },
  {
    nome: 'Iasmin Silva',
    cargo: 'Adulto · Faixa Azul',
    img: '/img/membros/iasminsilva.jpeg',
  },
]

const timeline = [
  {
    year: '2013',
    icon: CalendarDays,
    title: 'Início do projeto',
    text: 'O Projeto Jiu-Jitsu — Disciplina e Educação para a Vida inicia suas atividades em Desterro, oferecendo treinamento de jiu-jitsu à comunidade.',
  },
  {
    year: '2025',
    icon: FileCheck,
    title: 'Formalização da associação',
    text: 'Em 8 de agosto de 2025 é formalizada a Associação Jiu-Jitsu — Disciplina e Educação para a Vida, entidade privada sem fins lucrativos sediada em Desterro.',
  },
  {
    year: '2026',
    icon: Landmark,
    title: 'Reconhecimento da Câmara Municipal',
    text: 'Em junho de 2026, o projeto recebe uma Moção de Apoio da Câmara Municipal de Desterro e apresenta oficialmente sua história e atuação à população.',
  },
  {
    year: 'Hoje',
    icon: Users,
    title: 'Continuidade do trabalho',
    text: 'O projeto mantém turmas para crianças e adultos, participa de competições e segue oferecendo acesso gratuito ao jiu-jitsu no município.',
  },
]

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Nossa História | Projeto Jiu-Jitsu Desterro',
  description:
    'Conheça a história do Projeto Jiu-Jitsu — Disciplina e Educação para a Vida, em atividade em Desterro, Paraíba, desde 2013.',
  url: 'https://jiujitsudesterro.vercel.app/sobre',
  about: {
    '@type': 'Organization',
    name: 'Associação Jiu-Jitsu - Disciplina e Educação para a Vida',
    alternateName: 'Projeto Jiu-Jitsu Desterro',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Desterro',
      addressRegion: 'PB',
      addressCountry: 'BR',
    },
  },
}

export default function Sobre() {
  return (
    <>
      <SEO
        title="Projeto Social de Jiu-Jitsu em Desterro (PB) | Nossa História"
        description="Conheça a história do Projeto Jiu-Jitsu — Disciplina e Educação para a Vida, em atividade em Desterro, Paraíba, desde 2013."
        path="/sobre"
        schema={aboutSchema}
      />

      <div className="bg-light min-h-screen">
        <PageHero
          accent="Desde 2013"
          title="Nossa História"
          subtitle="Mais de uma década de jiu-jitsu gratuito, formação esportiva e trabalho comunitário em Desterro."
        />

        {/* APRESENTAÇÃO */}
        <section className="bg-white py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                O começo
              </p>

              <h2 className="font-display text-5xl md:text-6xl tracking-wide text-black leading-none mb-6">
                Um projeto construído
                <br />
                dentro da comunidade
              </h2>

              <div className="w-12 h-1 bg-accent mb-7" />

              <div className="space-y-5 text-zinc-600 leading-relaxed">
                <p>
                  O <strong>Projeto Jiu-Jitsu — Disciplina e
                  Educação para a Vida</strong> iniciou suas
                  atividades em Desterro, Paraíba, em 2013.
                </p>

                <p>
                  Desde o início, a proposta foi manter o
                  jiu-jitsu acessível à comunidade, reunindo
                  crianças, jovens e adultos em torno da prática
                  esportiva e da rotina de treinamento.
                </p>

                <p>
                  Ao longo dos anos, o trabalho passou a reunir
                  alunos de diferentes idades, formar praticantes
                  graduados e representar Desterro em eventos e
                  competições.
                </p>

                <p>
                  Em 2025, esse trabalho ganhou uma estrutura
                  institucional própria com a formalização da
                  associação que hoje representa oficialmente o
                  projeto.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-9">
                <Link
                  to="/contato"
                  className="btn-primary"
                >
                  Conhecer o projeto
                </Link>

                <Link
                  to="/agenda"
                  className="inline-flex items-center px-6 py-3 text-sm font-bold text-black hover:text-accent transition-colors"
                >
                  Ver horários
                  <ArrowRight
                    size={17}
                    className="ml-2"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            <figure>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/25 rounded-2xl" />

                <div className="relative rounded-2xl overflow-hidden bg-zinc-900 shadow-xl">
                  <img
                    src="/img/treinos/treinogeral2026.jpeg"
                    alt="Alunos do Projeto Jiu-Jitsu Desterro reunidos durante treinamento"
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>

              <figcaption className="mt-5 text-sm text-zinc-500 leading-relaxed">
                O trabalho desenvolvido no tatame é resultado da
                participação contínua de alunos, professor,
                famílias e apoiadores do projeto.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* LINHA DO TEMPO */}
        <section className="bg-zinc-950 text-white py-20 md:py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl mb-14">
              <p className="text-red-400 font-bold uppercase tracking-[4px] text-xs mb-3">
                Trajetória
              </p>

              <h2 className="font-display text-5xl md:text-6xl tracking-wide">
                Marcos do projeto
              </h2>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                Uma história construída ao longo dos anos e que
                passou da iniciativa comunitária à organização
                formal de uma associação.
              </p>
            </div>

            <div className="border-t border-zinc-800">
              {timeline.map(
                ({
                  year,
                  icon: Icon,
                  title,
                  text,
                }) => (
                  <article
                    key={year}
                    className="grid grid-cols-[70px_1fr] md:grid-cols-[120px_50px_1fr] gap-5 md:gap-7 py-8 border-b border-zinc-800"
                  >
                    <p className="font-display text-3xl md:text-4xl text-red-400">
                      {year}
                    </p>

                    <div className="hidden md:flex w-11 h-11 border border-zinc-700 rounded-full items-center justify-center">
                      <Icon
                        size={18}
                        className="text-zinc-300"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3 className="font-display text-2xl md:text-3xl tracking-wide text-white mb-2">
                        {title}
                      </h3>

                      <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                        {text}
                      </p>
                    </div>
                  </article>
                ),
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a
                href="https://www.folhapatoense.com/2026/06/13/projeto-social-de-jiu-jitsu-recebe-mocao-de-apoio-da-camara-municipal-de-desterro-e-apresenta-trabalho-a-populacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                Matéria sobre a Moção de Apoio
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* FORMALIZAÇÃO */}
        <section className="bg-white py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                Instituição
              </p>

              <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide leading-none">
                Associação
                <br />
                formalizada
              </h2>
            </div>

            <div>
              <p className="text-zinc-600 leading-relaxed mb-8">
                A Associação Jiu-Jitsu — Disciplina e Educação
                para a Vida foi formalizada em 8 de agosto de
                2025 e possui sede em Desterro, Paraíba. A
                entidade está registrada como associação privada
                e tem como atividade principal o ensino de
                esportes.
              </p>

              <dl className="border-t border-zinc-200">
                <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 py-5 border-b border-zinc-200">
                  <dt className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Razão social
                  </dt>

                  <dd className="text-sm font-semibold text-black">
                    Associação Jiu-Jitsu — Disciplina e
                    Educação para a Vida
                  </dd>
                </div>

                <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 py-5 border-b border-zinc-200">
                  <dt className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    CNPJ
                  </dt>

                  <dd className="text-sm font-semibold text-black">
                    62.946.261/0001-56
                  </dd>
                </div>

                <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 py-5 border-b border-zinc-200">
                  <dt className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Constituição
                  </dt>

                  <dd className="text-sm font-semibold text-black">
                    8 de agosto de 2025
                  </dd>
                </div>

                <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 py-5 border-b border-zinc-200">
                  <dt className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Sede
                  </dt>

                  <dd className="text-sm font-semibold text-black">
                    Desterro · Paraíba
                  </dd>
                </div>

                <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 py-5 border-b border-zinc-200">
                  <dt className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Presidente
                  </dt>

                  <dd className="text-sm font-semibold text-black">
                    Ramon Cleber do Carmo Lima
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ALUNOS GRADUADOS */}
        <section
          id="alunos"
          className="py-20 md:py-24 px-6 bg-zinc-100"
        >
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                Formação no tatame
              </p>

              <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide">
                Alunos graduados
              </h2>

              <p className="text-zinc-600 mt-4 leading-relaxed">
                Alguns dos alunos que avançaram em sua trajetória
                técnica dentro do jiu-jitsu.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {graduados.map((aluno) => (
                <article
                  key={aluno.nome}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900">
                    <img
                      src={aluno.img}
                      alt={aluno.nome}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h3 className="font-display text-xl md:text-2xl text-white tracking-wide leading-none">
                        {aluno.nome}
                      </h3>

                      <p className="text-red-300 text-[10px] md:text-xs font-bold uppercase tracking-wider mt-2">
                        {aluno.cargo}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-black text-white py-16 md:py-20 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-red-400 font-bold uppercase tracking-[4px] text-xs mb-3">
                Próximo capítulo
              </p>

              <h2 className="font-display text-4xl md:text-5xl tracking-wide">
                Venha conhecer essa história de perto
              </h2>
            </div>

            <Link
              to="/contato"
              className="btn-primary whitespace-nowrap text-center"
            >
              Visitar o projeto
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}