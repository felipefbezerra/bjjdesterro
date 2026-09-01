import {
  ChevronDown,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'

import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import {
  contact,
  createWhatsAppUrl,
} from '../data/contacts'

const faqs = [
  {
    q: 'O projeto é realmente gratuito?',
    r: 'Sim. O projeto é sem fins lucrativos e as aulas são gratuitas para a comunidade.',
  },
  {
    q: 'Qual a idade mínima para participar?',
    r: 'A turma infantil recebe crianças a partir de 7 anos. Também há treinos para adultos.',
  },
  {
    q: 'Preciso ter experiência prévia?',
    r: 'Não. Iniciantes também podem participar. O ensino é adaptado ao nível de experiência de cada aluno.',
  },
  {
    q: 'O que devo levar na primeira aula?',
    r: 'Para conhecer o treino, use roupas confortáveis adequadas à prática esportiva. O kimono não é obrigatório no primeiro contato.',
  },
  {
    q: 'Posso assistir a um treino antes de começar?',
    r: 'Sim. Você pode visitar o projeto, conhecer o ambiente e conversar com o professor antes de iniciar os treinos.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.r,
    },
  })),
}

const ramonMessage =
  'Olá! Conheci o Projeto Jiu-Jitsu Desterro pelo site e gostaria de saber como participar.'

const jerffesonMessage =
  'Olá! Conheci o Projeto Jiu-Jitsu Desterro pelo site e gostaria de mais informações sobre o projeto.'

export default function Contato() {
  const contactItems = [
    {
      icon: Mail,
      label: 'E-mail',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: contact.ramon.name,
      value: contact.ramon.phone,
      href: `tel:${contact.ramon.phoneInternational}`,
    },
    {
      icon: Phone,
      label: contact.jerffeson.name,
      value: contact.jerffeson.phone,
      href: `tel:${contact.jerffeson.phoneInternational}`,
    },
    {
      icon: MapPin,
      label: 'Endereço',
      value: contact.address.full,
      href: contact.address.mapsUrl,
      external: true,
    },
  ]

  return (
    <>
      <SEO
        title="Contato e Inscrição | Jiu-Jitsu Gratuito em Desterro (PB)"
        description="Entre em contato com o Projeto Jiu-Jitsu Desterro, consulte como participar das aulas gratuitas e veja endereço, telefones e dúvidas frequentes."
        path="/contato"
        schema={faqSchema}
      />

      <PageHero
        accent="Participe"
        title="Contato"
        subtitle="Conheça o projeto, visite um treino e tire suas dúvidas antes de começar."
      />

      {/* COMO PARTICIPAR */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
              Primeira aula
            </p>

            <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide">
              Como participar
            </h2>

            <p className="text-zinc-600 leading-relaxed mt-4">
              Não existe processo complicado de inscrição.
              Entre em contato, consulte o melhor horário e
              venha conhecer o projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-zinc-200">
            {[
              {
                number: '01',
                title: 'Fale conosco',
                text: 'Envie uma mensagem pelo WhatsApp e informe que deseja conhecer o projeto.',
              },
              {
                number: '02',
                title: 'Escolha um treino',
                text: 'Confirme o horário adequado para a turma infantil ou adulta.',
              },
              {
                number: '03',
                title: 'Venha conhecer',
                text: 'Visite o espaço, converse com o professor e conheça a rotina do tatame.',
              },
            ].map((step, index, items) => (
              <article
                key={step.number}
                className={`py-8 md:px-8 ${
                  index !== items.length - 1
                    ? 'border-b md:border-b-0 md:border-r border-zinc-200'
                    : ''
                }`}
              >
                <p className="font-display text-3xl text-accent">
                  {step.number}
                </p>

                <h3 className="font-display text-3xl text-black tracking-wide mt-2 mb-3">
                  {step.title}
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO + FAQ */}
      <section className="bg-light py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* CONTATOS */}
            <div>
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                Canais oficiais
              </p>

              <h2 className="font-display text-5xl text-black tracking-wide mb-6">
                Fale com o projeto
              </h2>

              <div className="w-12 h-1 bg-accent mb-8" />

              <ul className="space-y-5 mb-10">
                {contactItems.map(
                  ({
                    icon: Icon,
                    label,
                    value,
                    href,
                    external,
                  }) => (
                    <li
                      key={`${label}-${value}`}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon
                          size={17}
                          className="text-red-400"
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
                          {label}
                        </p>

                        <a
                          href={href}
                          target={
                            external
                              ? '_blank'
                              : undefined
                          }
                          rel={
                            external
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className="text-black font-semibold text-sm hover:text-accent transition-colors"
                        >
                          {value}
                        </a>
                      </div>
                    </li>
                  ),
                )}
              </ul>

              <div className="space-y-3">
                <a
                  href={createWhatsAppUrl(
                    contact.ramon.whatsapp,
                    ramonMessage,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 py-4 px-5 rounded-xl bg-black text-white hover:bg-zinc-800 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle
                      size={21}
                      className="text-green-400"
                      aria-hidden="true"
                    />

                    <span>
                      <span className="block font-bold text-sm">
                        WhatsApp — {contact.ramon.name}
                      </span>

                      <span className="block text-xs text-zinc-400 mt-0.5">
                        Informações e participação
                      </span>
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-zinc-500"
                  >
                    →
                  </span>
                </a>

                <a
                  href={createWhatsAppUrl(
                    contact.jerffeson.whatsapp,
                    jerffesonMessage,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 py-4 px-5 rounded-xl bg-black text-white hover:bg-zinc-800 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle
                      size={21}
                      className="text-green-400"
                      aria-hidden="true"
                    />

                    <span>
                      <span className="block font-bold text-sm">
                        WhatsApp — {contact.jerffeson.name}
                      </span>

                      <span className="block text-xs text-zinc-400 mt-0.5">
                        Informações sobre o projeto
                      </span>
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-zinc-500"
                  >
                    →
                  </span>
                </a>

                <a
                  href={contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 py-4 px-5 rounded-xl border border-zinc-300 bg-white text-black hover:border-zinc-500 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Instagram
                      size={21}
                      aria-hidden="true"
                    />

                    <span>
                      <span className="block font-bold text-sm">
                        Instagram
                      </span>

                      <span className="block text-xs text-zinc-500 mt-0.5">
                        {contact.instagram.username}
                      </span>
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-zinc-400"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                Antes de começar
              </p>

              <h2 className="font-display text-5xl text-black tracking-wide mb-6">
                Dúvidas frequentes
              </h2>

              <div className="w-12 h-1 bg-accent mb-8" />

              <div className="border-t border-zinc-300">
                {faqs.map(({ q, r }) => (
                  <details
                    key={q}
                    className="group border-b border-zinc-300"
                  >
                    <summary className="py-5 font-bold text-sm text-black cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{q}</span>

                      <ChevronDown
                        size={18}
                        className="text-accent flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>

                    <p className="pb-5 pr-8 text-zinc-600 text-sm leading-relaxed">
                      {r}
                    </p>
                  </details>
                ))}
              </div>

              {/* LOCALIZAÇÃO */}
              <div className="mt-10 bg-zinc-950 text-white p-7 rounded-xl">
                <div className="flex items-start gap-4">
                  <MapPin
                    size={23}
                    className="text-red-400 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="font-bold mb-2">
                      Onde treinamos
                    </p>

                    <address className="not-italic text-zinc-400 text-sm leading-relaxed mb-5">
                      {contact.address.full}
                    </address>

                    <a
                      href={contact.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-white hover:text-red-400 transition-colors"
                    >
                      Abrir no Google Maps
                      <span
                        className="ml-2"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}