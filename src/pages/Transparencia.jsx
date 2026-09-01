import { Link } from 'react-router-dom'
import {
  Building2,
  FileCheck,
  Mail,
  MapPin,
  ShieldCheck,
} from 'lucide-react'

import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import { contact } from '../data/contacts'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Associação Jiu-Jitsu - Disciplina e Educação para a Vida',
  alternateName: 'Projeto Jiu-Jitsu Desterro',
  url: 'https://jiujitsudesterro.vercel.app/',
  logo: 'https://jiujitsudesterro.vercel.app/img/bjjlogo.png',
  foundingDate: '2025-08-08',
  taxID: '62.946.261/0001-56',
  email: contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Aprígio Leite, S/N',
    addressLocality: 'Desterro',
    addressRegion: 'PB',
    postalCode: '58695-000',
    addressCountry: 'BR',
  },
  sameAs: [contact.instagram.url],
}

const dados = [
  {
    label: 'Razão social',
    value:
      'Associação Jiu-Jitsu — Disciplina e Educação para a Vida',
  },
  {
    label: 'CNPJ',
    value: '62.946.261/0001-56',
  },
  {
    label: 'Situação cadastral',
    value: 'Ativa',
  },
  {
    label: 'Natureza jurídica',
    value: 'Associação privada',
  },
  {
    label: 'Data de abertura',
    value: '8 de agosto de 2025',
  },
  {
    label: 'Atividade principal',
    value: 'Ensino de esportes — CNAE 85.91-1-00',
  },
  {
    label: 'Presidente',
    value: 'Ramon Cleber do Carmo Lima',
  },
  {
    label: 'Sede',
    value:
      'Rua Aprígio Leite, S/N, Centro — Desterro, PB — CEP 58695-000',
  },
]

export default function Transparencia() {
  return (
    <>
      <SEO
        title="Transparência | Associação Jiu-Jitsu Desterro"
        description="Consulte informações institucionais e cadastrais da Associação Jiu-Jitsu — Disciplina e Educação para a Vida, sediada em Desterro, Paraíba."
        path="/transparencia"
        schema={organizationSchema}
      />

      <div className="bg-light min-h-screen">
        <PageHero
          accent="Instituição"
          title="Transparência"
          subtitle="Informações institucionais e cadastrais da associação responsável pelo Projeto Jiu-Jitsu Desterro."
        />

        <section className="bg-white py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-14 lg:gap-20">
            <div>
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-7">
                <Building2
                  size={21}
                  aria-hidden="true"
                />
              </div>

              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                Dados institucionais
              </p>

              <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide leading-none mb-6">
                Associação
                <br />
                regularmente constituída
              </h2>

              <p className="text-zinc-600 leading-relaxed">
                A associação foi formalizada em 2025 para dar
                estrutura jurídica e institucional ao trabalho
                desenvolvido pelo projeto em Desterro.
              </p>
            </div>

            <dl className="border-t border-zinc-200">
              {dados.map(({ label, value }) => (
                <div
                  key={label}
                  className="grid sm:grid-cols-[190px_1fr] gap-2 sm:gap-8 py-5 border-b border-zinc-200"
                >
                  <dt className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    {label}
                  </dt>

                  <dd className="text-sm font-semibold text-black leading-relaxed">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* PRINCÍPIOS DE TRANSPARÊNCIA */}
        <section className="bg-zinc-100 py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                Compromisso institucional
              </p>

              <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide">
                Informação acessível
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-y border-zinc-300">
              <article className="py-8 md:pr-8 border-b md:border-b-0 md:border-r border-zinc-300">
                <FileCheck
                  size={23}
                  className="text-accent mb-5"
                  aria-hidden="true"
                />

                <h3 className="font-display text-3xl text-black tracking-wide mb-3">
                  Identificação
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed">
                  Razão social, CNPJ, sede e responsáveis
                  apresentados publicamente.
                </p>
              </article>

              <article className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-zinc-300">
                <ShieldCheck
                  size={23}
                  className="text-accent mb-5"
                  aria-hidden="true"
                />

                <h3 className="font-display text-3xl text-black tracking-wide mb-3">
                  Regularidade
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed">
                  A associação possui situação cadastral ativa
                  e atuação vinculada ao ensino e às atividades
                  esportivas.
                </p>
              </article>

              <article className="py-8 md:pl-8">
                <Mail
                  size={23}
                  className="text-accent mb-5"
                  aria-hidden="true"
                />

                <h3 className="font-display text-3xl text-black tracking-wide mb-3">
                  Contato
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed">
                  Instituições e interessados podem solicitar
                  informações adicionais diretamente à
                  associação.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SOLICITAÇÃO */}
        <section className="bg-black text-white py-16 md:py-20 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:items-center">
            <div>
              <p className="text-red-400 font-bold uppercase tracking-[4px] text-xs mb-3">
                Informações institucionais
              </p>

              <h2 className="font-display text-4xl md:text-5xl tracking-wide">
                Precisa falar com a associação?
              </h2>

              <p className="text-zinc-400 text-sm mt-3">
                Entre em contato para solicitações
                institucionais, propostas de parceria ou outras
                informações.
              </p>
            </div>

            <Link
              to="/contato"
              className="btn-primary text-center whitespace-nowrap"
            >
              Entrar em contato
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}