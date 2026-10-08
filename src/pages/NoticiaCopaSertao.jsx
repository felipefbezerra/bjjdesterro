import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ExternalLink,
  MapPin,
  Medal,
} from 'lucide-react'

import SEO from '../components/SEO'

const PATH = '/noticias/copa-sertao-jiu-jitsu-patos-2026'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline:
    'Projeto Jiu-Jitsu Desterro conquista 16 medalhas na Copa Sertão de Jiu-Jitsu',
  datePublished: '2026-09-20',
  dateModified: '2026-10-08',
  image:
    'https://jiujitsudesterro.vercel.app/img/campeonatos/equipemedalhista-1600.jpg',
  author: {
    '@type': 'Organization',
    name: 'Projeto Jiu-Jitsu Desterro',
    url: 'https://jiujitsudesterro.vercel.app/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Projeto Jiu-Jitsu Desterro',
    logo: {
      '@type': 'ImageObject',
      url: 'https://jiujitsudesterro.vercel.app/img/bjjlogo.png',
    },
  },
  mainEntityOfPage: `https://jiujitsudesterro.vercel.app${PATH}`,
  description:
    'Projeto social de jiu-jitsu de Desterro (PB) conquistou 16 medalhas na Copa Sertão de Jiu-Jitsu, em Patos: 11 de ouro, 4 de prata e 1 de bronze.',
}

const quadro = [
  { total: 11, medalha: 'Ouro' },
  { total: 4, medalha: 'Prata' },
  { total: 1, medalha: 'Bronze' },
]

/*
 * Medalhistas já identificados pelo projeto.
 * A lista é parcial: para completar, basta acrescentar o
 * nome no grupo correspondente.
 */
const medalhistas = [
  {
    medalha: 'Ouro',
    atletas: [
      'Bruna',
      'Débora',
      'Isabela',
      'Luiz Carlos',
      'Rodrigo',
      'Sophia',
    ],
  },
  {
    medalha: 'Prata',
    atletas: [
      'Arthur Vinicius',
      'Jerffeson Ramon',
      'Vitor',
    ],
  },
  {
    medalha: 'Bronze',
    atletas: ['Felipe'],
  },
  {
    medalha: 'Pódio infantojuvenil',
    atletas: ['João Lucas'],
  },
]

const fotos = [
  {
    src: '/img/campeonatos/luizpodio2.jpeg',
    alt: 'Luiz Carlos no pódio da Copa Sertão de Jiu-Jitsu, em Patos',
    legenda: 'Luiz Carlos · ouro',
  },
  {
    src: '/img/campeonatos/bellaebruna.jpg',
    alt: 'Bruna e Isabela no pódio da Copa Sertão de Jiu-Jitsu, em Patos',
    legenda: 'Bruna e Isabela · ouro',
  },
  {
    src: '/img/campeonatos/sophiapodio.jpg',
    alt: 'Sophia no pódio da Copa Sertão de Jiu-Jitsu, em Patos',
    legenda: 'Sophia · ouro',
  },
  {
    src: '/img/campeonatos/rodrigofernandespodio.jpg',
    alt: 'Rodrigo no pódio da Copa Sertão de Jiu-Jitsu, em Patos',
    legenda: 'Rodrigo · ouro',
  },
  {
    src: '/img/campeonatos/vitorpodio2.jpg',
    alt: 'Vitor no pódio da Copa Sertão de Jiu-Jitsu, em Patos',
    legenda: 'Vitor · prata',
  },
  {
    src: '/img/campeonatos/jerffesonramon2.jpg',
    alt: 'Jerffeson Ramon no pódio da Copa Sertão de Jiu-Jitsu, em Patos',
    legenda: 'Jerffeson Ramon · prata',
  },
]

/*
 * Matérias da imprensa sobre a participação do projeto.
 * Para incluir outra, basta acrescentar { veiculo, url }.
 */
const referencias = [
  {
    veiculo: 'Folha Patoense',
    url: 'https://folhapatoense.com/2026/09/21/projeto-de-jiu-jitsu-de-desterro-conquista-16-medalhas-na-copa-sertao-em-patos-0/',
  },
  {
    veiculo: 'Patos Online',
    url: 'https://patosonline.com/noticia/280246/projeto-de-jiu-jitsu-de-desterro-conquista-16-medalhas-na-copa-sertao-em-patos-pb',
  },
  {
    veiculo: 'Correio Serrano',
    url: 'https://correioserrano.com.br/projeto-de-jiu-jitsu-de-desterro-conquista-16-medalhas-na-copa-sertao-em-patos-pb/',
  },
  {
    veiculo: 'Teixeira em Foco',
    url: 'https://teixeiraemfoco.com/noticia/20644/projeto-de-jiu-jitsu-de-desterro-conquista-16-medalhas-na-copa-sertao-em-patos',
  },
  {
    veiculo: 'Portal do Curimataú',
    url: 'https://portaldocurimatau.com.br/curimatau/projeto-de-jiu-jitsu-de-desterro-conquista-16-medalhas-na-copa-sertao-em-patos-pb/',
  },
]

export default function NoticiaCopaSertao() {
  return (
    <>
      <SEO
        title="Projeto Jiu-Jitsu Desterro conquista 16 medalhas na Copa Sertão"
        description="Projeto Jiu-Jitsu — Disciplina e Educação para a Vida conquistou 16 medalhas na Copa Sertão de Jiu-Jitsu, em Patos (PB): 11 de ouro, 4 de prata e 1 de bronze."
        path={PATH}
        image="/img/campeonatos/equipemedalhista-1600.jpg"
        type="article"
        schema={articleSchema}
      />

      <article className="bg-white min-h-screen">
        <header className="bg-black text-white pt-32 pb-16 md:pt-36 md:pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/resultados"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft
                size={16}
                aria-hidden="true"
              />
              Resultados e Notícias
            </Link>

            <p className="text-red-400 text-xs font-bold uppercase tracking-[4px] mb-4">
              Competição
            </p>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-wide leading-none max-w-4xl">
              Projeto conquista 16 medalhas na Copa Sertão de Jiu-Jitsu, em Patos
            </h1>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-7 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <CalendarDays
                  size={16}
                  aria-hidden="true"
                />
                20 de setembro de 2026
              </span>

              <span className="inline-flex items-center gap-2">
                <MapPin
                  size={16}
                  aria-hidden="true"
                />
                Patos · Paraíba
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-medium mb-10">
            O Projeto Jiu-Jitsu — Disciplina e Educação para a
            Vida conquistou 16 medalhas na Copa Sertão de
            Jiu-Jitsu, realizada em Patos no domingo, 20 de
            setembro de 2026. Todos os atletas do projeto que
            competiram subiram ao pódio.
          </p>

          <dl
            className="grid grid-cols-3 border-y border-zinc-200 divide-x divide-zinc-200 mb-10"
            aria-label="Quadro de medalhas do projeto na Copa Sertão"
          >
            {quadro.map(({ total, medalha }) => (
              <div
                key={medalha}
                className="flex flex-col-reverse py-6 px-4 first:pl-0 last:pr-0"
              >
                <dt className="text-xs font-bold uppercase tracking-widest text-accent mt-1">
                  {medalha}
                </dt>

                <dd className="font-display text-6xl md:text-7xl text-black leading-none">
                  {total}
                </dd>
              </div>
            ))}
          </dl>

          <figure className="mb-10">
            <div className="overflow-hidden rounded-xl bg-zinc-900 aspect-[4/3]">
              <img
                src="/img/campeonatos/equipemedalhista-1600.jpg"
                alt="Atletas do Projeto Jiu-Jitsu Desterro reunidos no tatame do projeto, com as medalhas da Copa Sertão"
                width="1600"
                height="1200"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            <figcaption className="text-xs text-zinc-500 leading-relaxed mt-3">
              Os medalhistas reunidos no tatame do projeto, em
              Desterro, no treino geral após a competição.
            </figcaption>
          </figure>

          <div className="space-y-6 text-zinc-600 leading-relaxed">
            <p>
              Foram 11 medalhas de ouro, 4 de prata e 1 de
              bronze. A equipe viajou a Patos com atletas de
              diferentes idades e graduações, das turmas
              infantojuvenis aos adultos, acompanhada pelo
              professor Ramon Cleber do Carmo Lima,
              idealizador do projeto.
            </p>

            <p>
              O resultado reflete os valores trabalhados no
              dia a dia do tatame — disciplina, respeito,
              responsabilidade, perseverança e superação — e
              foi alcançado mesmo diante das dificuldades e da
              falta de apoio que o projeto enfrenta para se
              manter.
            </p>

            <p>
              De volta a Desterro, os medalhistas se reuniram
              no treino geral para o registro da conquista ao
              lado dos colegas de tatame.
            </p>

            <p>
              A participação na Copa Sertão se soma a outras
              competições disputadas pelo projeto em 2026, como
              o Campeonato Paraibano e o Open Itapetim, e
              reforça o esporte como ferramenta de educação e
              cidadania em Desterro.
            </p>
          </div>

          <section
            className="mt-14"
            aria-labelledby="medalhistas-titulo"
          >
            <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
              No pódio
            </p>

            <h2
              id="medalhistas-titulo"
              className="font-display text-4xl md:text-5xl text-black tracking-wide mb-6"
            >
              Alguns dos medalhistas
            </h2>

            <dl className="border-y border-zinc-200 divide-y divide-zinc-200">
              {medalhistas.map(({ medalha, atletas }) => (
                <div
                  key={medalha}
                  className="grid grid-cols-1 sm:grid-cols-[13rem_1fr] gap-x-6 gap-y-2 py-5"
                >
                  <dt className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black">
                    <Medal
                      size={16}
                      className="text-accent"
                      aria-hidden="true"
                    />
                    {medalha}
                  </dt>

                  <dd className="text-zinc-600 leading-relaxed">
                    {atletas.join(' · ')}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="text-xs text-zinc-500 leading-relaxed mt-4">
              Lista parcial, com os atletas já identificados
              pelo projeto.
            </p>
          </section>

          <section
            className="mt-14"
            aria-labelledby="fotos-titulo"
          >
            <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
              Registros
            </p>

            <h2
              id="fotos-titulo"
              className="font-display text-4xl md:text-5xl text-black tracking-wide mb-6"
            >
              Momentos do pódio
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
              {fotos.map(({ src, alt, legenda }) => (
                <figure key={src}>
                  <div className="overflow-hidden rounded-xl bg-zinc-900 aspect-[3/4]">
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <figcaption className="text-xs font-bold uppercase tracking-wider text-zinc-600 mt-3">
                    {legenda}
                  </figcaption>
                </figure>
              ))}
            </div>

            <Link
              to="/galeria"
              className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-accent transition-colors mt-8"
            >
              Ver todas as fotos na galeria
              <ArrowRight
                size={16}
                aria-hidden="true"
              />
            </Link>
          </section>

          <aside
            className="mt-14 pt-8 border-t border-zinc-200"
            aria-labelledby="imprensa-titulo"
          >
            <p
              id="imprensa-titulo"
              className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3"
            >
              Na imprensa
            </p>

            <p className="text-sm text-zinc-600 leading-relaxed mb-5">
              A conquista do projeto na Copa Sertão também foi
              noticiada pela imprensa regional.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {referencias.map(({ veiculo, url }) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-accent transition-colors"
                  >
                    {veiculo}

                    <ExternalLink
                      size={16}
                      aria-hidden="true"
                    />

                    <span className="sr-only">
                      (abre em nova aba)
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="mt-14 bg-zinc-100 p-7 md:p-9 rounded-xl">
            <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
              Conheça o projeto
            </p>

            <h2 className="font-display text-4xl text-black tracking-wide mb-3">
              Jiu-jitsu gratuito em Desterro
            </h2>

            <p className="text-zinc-600 text-sm leading-relaxed mb-6">
              O projeto mantém treinos gratuitos para crianças
              e adultos no município.
            </p>

            <Link
              to="/contato"
              className="btn-primary"
            >
              Como participar
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
