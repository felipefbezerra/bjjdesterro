import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  CalendarDays,
  ExternalLink,
  MapPin,
} from 'lucide-react'

import SEO from '../components/SEO'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline:
    'Projeto Jiu-Jitsu Desterro recebe Moção de Apoio da Câmara Municipal',
  datePublished: '2026-06-13',
  dateModified: '2026-09-01',
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
  mainEntityOfPage:
    'https://jiujitsudesterro.vercel.app/noticias/mocao-de-apoio-camara-desterro-2026',
  description:
    'Projeto social de jiu-jitsu de Desterro recebeu Moção de Apoio da Câmara Municipal em junho de 2026.',
}

export default function NoticiaMocao() {
  return (
    <>
      <SEO
        title="Projeto Jiu-Jitsu Desterro recebe Moção de Apoio da Câmara"
        description="Projeto Jiu-Jitsu — Disciplina e Educação para a Vida recebeu Moção de Apoio da Câmara Municipal de Desterro em junho de 2026."
        path="/noticias/mocao-de-apoio-camara-desterro-2026"
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
              Reconhecimento institucional
            </p>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-wide leading-none max-w-4xl">
              Projeto recebe Moção de Apoio da Câmara Municipal de Desterro
            </h1>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-7 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <CalendarDays
                  size={16}
                  aria-hidden="true"
                />
                13 de junho de 2026
              </span>

              <span className="inline-flex items-center gap-2">
                <MapPin
                  size={16}
                  aria-hidden="true"
                />
                Desterro · Paraíba
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-medium mb-10">
            O Projeto Jiu-Jitsu — Disciplina e Educação para a
            Vida recebeu uma Moção de Apoio da Câmara Municipal
            de Desterro durante sessão realizada em 13 de junho
            de 2026.
          </p>

          <div className="space-y-6 text-zinc-600 leading-relaxed">
            <p>
              Durante a solenidade, o projeto apresentou à
              população e aos representantes do Poder
              Legislativo municipal parte de sua história e do
              trabalho desenvolvido em Desterro.
            </p>

            <p>
              O professor Ramon Cleber do Carmo Lima,
              idealizador do projeto, utilizou a tribuna para
              falar sobre a trajetória iniciada em 2013 e sobre
              a consolidação da iniciativa ao longo dos anos.
            </p>

            <p>
              O reconhecimento ocorreu após a formalização da
              Associação Jiu-Jitsu — Disciplina e Educação para
              a Vida, constituída em 2025 e responsável por dar
              estrutura institucional ao trabalho desenvolvido
              pelo projeto.
            </p>

            <p>
              A Moção de Apoio representa um reconhecimento
              público da continuidade das atividades realizadas
              no município e fortalece o diálogo do projeto com
              instituições, comunidade e potenciais parceiros.
            </p>
          </div>

          <aside className="mt-12 pt-8 border-t border-zinc-200">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
              Referência
            </p>

            <p className="text-sm text-zinc-600 leading-relaxed mb-5">
              O reconhecimento e a sessão da Câmara Municipal
              também foram noticiados pela imprensa regional.
            </p>

            <a
              href="https://www.folhapatoense.com/2026/06/13/projeto-social-de-jiu-jitsu-recebe-mocao-de-apoio-da-camara-municipal-de-desterro-e-apresenta-trabalho-a-populacao/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-accent transition-colors"
            >
              Consultar matéria da Folha Patoense
              <ExternalLink
                size={16}
                aria-hidden="true"
              />
            </a>
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