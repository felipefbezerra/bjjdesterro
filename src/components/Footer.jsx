import { Link } from 'react-router-dom'
import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'

import {
  contact,
  createWhatsAppUrl,
} from '../data/contacts'

const navigation = [
  {
    to: '/sobre',
    label: 'O Projeto',
  },
  {
    to: '/agenda',
    label: 'Treinos',
  },
  {
    to: '/professor',
    label: 'Professor',
  },
  {
    to: '/resultados',
    label: 'Resultados e Notícias',
  },
  {
    to: '/galeria',
    label: 'Galeria',
  },
  {
    to: '/regras',
    label: 'Regras do Tatame',
  },
  {
    to: '/transparencia',
    label: 'Transparência',
  },
  {
    to: '/contato',
    label: 'Contato',
  },
]

const whatsappMessage =
  'Olá! Conheci o Projeto Jiu-Jitsu Desterro pelo site e gostaria de mais informações.'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-zinc-400 px-6">
      <div className="max-w-7xl mx-auto py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr_1fr] gap-12">
          {/* IDENTIDADE */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-4"
              aria-label="Projeto Jiu-Jitsu Desterro — Página inicial"
            >
              <img
                src="/img/bjjlogo.png"
                alt=""
                width="64"
                height="64"
                loading="lazy"
                className="w-16 h-16 object-contain"
              />

              <div>
                <p className="font-display text-white text-3xl tracking-wider leading-none">
                  JIU-JITSU
                </p>

                <p className="text-red-400 font-bold tracking-[2px] uppercase text-[10px] mt-1">
                  Disciplina e Educação para a Vida
                </p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-md mt-6">
              Projeto social de jiu-jitsu com atividades
              gratuitas para crianças e adultos em Desterro,
              Paraíba, desde 2013.
            </p>

            <p className="text-xs text-zinc-600 mt-5">
              Associação sem fins lucrativos
            </p>
          </div>

          {/* NAVEGAÇÃO */}
          <nav aria-label="Navegação do rodapé">
            <h2 className="font-display text-2xl text-white tracking-wider mb-5">
              Navegação
            </h2>

            <ul className="space-y-3 text-sm">
              {navigation.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTATO */}
          <div>
            <h2 className="font-display text-2xl text-white tracking-wider mb-5">
              Contato
            </h2>

            <address className="not-italic">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-start gap-3 hover:text-white transition-colors"
                  >
                    <Mail
                      size={17}
                      className="text-red-400 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />

                    <span className="break-all">
                      {contact.email}
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href={`tel:${contact.ramon.phoneInternational}`}
                    className="flex items-start gap-3 hover:text-white transition-colors"
                  >
                    <Phone
                      size={17}
                      className="text-red-400 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />

                    <span>
                      {contact.ramon.phone}
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href={contact.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-white transition-colors"
                  >
                    <MapPin
                      size={17}
                      className="text-red-400 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />

                    <span>
                      {contact.address.street}
                      <br />
                      {contact.address.city} ·{' '}
                      {contact.address.state}
                    </span>
                  </a>
                </li>
              </ul>
            </address>

            <div className="flex gap-3 mt-6">
              <a
                href={createWhatsAppUrl(
                  contact.ramon.whatsapp,
                  whatsappMessage,
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com o Projeto Jiu-Jitsu Desterro pelo WhatsApp"
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-colors"
              >
                <MessageCircle
                  size={18}
                  aria-hidden="true"
                />
              </a>

              <a
                href={contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram do Projeto Jiu-Jitsu Desterro: ${contact.instagram.username}`}
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-colors"
              >
                <Instagram
                  size={18}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-zinc-600">
          <p>
            © {year} Projeto Jiu-Jitsu — Disciplina e
            Educação para a Vida
          </p>

          <p>
            CNPJ 62.946.261/0001-56
          </p>
        </div>
      </div>
    </footer>
  )
}