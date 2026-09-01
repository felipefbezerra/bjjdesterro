import { useMemo, useState } from 'react'
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Shirt,
} from 'lucide-react'

import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import agenda from '../data/agenda.json'
import {
  contact,
  createWhatsAppUrl,
} from '../data/contacts'

const filters = [
  {
    key: 'todos',
    label: 'Todos',
  },
  {
    key: 'infantil',
    label: 'Infantil',
  },
  {
    key: 'adulto',
    label: 'Adulto',
  },
]

const whatsappMessage =
  'Olá! Conheci o Projeto Jiu-Jitsu Desterro pelo site e gostaria de confirmar o melhor horário para conhecer um treino.'

function isTrainingInCategory(training, filter) {
  if (filter === 'todos') {
    return true
  }

  const category = training.categoria.toLowerCase()

  if (filter === 'infantil') {
    return category.includes('infantil')
  }

  if (filter === 'adulto') {
    return category.includes('adulto')
  }

  return true
}

function getTodayName() {
  const days = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ]

  return days[new Date().getDay()]
}

export default function Agenda() {
  const [activeFilter, setActiveFilter] =
    useState('todos')

  const today = getTodayName()

  const filteredAgenda = useMemo(
    () =>
      agenda
        .map((day) => ({
          ...day,
          treinos: day.treinos.filter((training) =>
            isTrainingInCategory(
              training,
              activeFilter,
            ),
          ),
        }))
        .filter((day) => day.treinos.length > 0),
    [activeFilter],
  )

  return (
    <>
      <SEO
        title="Horários de Jiu-Jitsu em Desterro (PB) | Infantil e Adulto"
        description="Consulte os horários dos treinos gratuitos de jiu-jitsu em Desterro, Paraíba. Turmas infantis a partir de 7 anos e treinos para adultos."
        path="/agenda"
      />

      <div className="bg-light min-h-screen">
        <PageHero
          accent="Treinos gratuitos"
          title="Horários"
          subtitle="Consulte os dias e horários das turmas infantil e adulta do Projeto Jiu-Jitsu Desterro."
        />

        {/* HORÁRIOS */}
        <section className="bg-white py-20 md:py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-7 mb-12">
              <div className="max-w-2xl">
                <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                  Cronograma semanal
                </p>

                <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide">
                  Treinos da semana
                </h2>

                <p className="text-zinc-600 mt-4 leading-relaxed">
                  Escolha uma categoria para visualizar
                  apenas os horários correspondentes.
                </p>
              </div>

              <div
                className="inline-flex self-start md:self-auto bg-zinc-100 rounded-full p-1"
                role="group"
                aria-label="Filtrar horários por categoria"
              >
                {filters.map(({ key, label }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() =>
                      setActiveFilter(key)
                    }
                    aria-pressed={
                      activeFilter === key
                    }
                    className={`px-4 sm:px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-colors ${
                      activeFilter === key
                        ? 'bg-black text-white'
                        : 'text-zinc-500 hover:text-black'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* LISTA DE HORÁRIOS */}
            <div className="border-t border-zinc-300">
              {filteredAgenda.map(
                ({ dia, treinos }) => {
                  const isToday = dia === today

                  return (
                    <article
                      key={dia}
                      className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-5 md:gap-10 py-7 border-b border-zinc-300"
                    >
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="font-display text-3xl md:text-4xl text-black tracking-wide">
                            {dia}
                          </h3>

                          {isToday && (
                            <span className="bg-accent text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                              Hoje
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-zinc-400 mt-1">
                          {treinos.length}{' '}
                          {treinos.length === 1
                            ? 'treino'
                            : 'treinos'}
                        </p>
                      </div>

                      <div className="divide-y divide-zinc-200">
                        {treinos.map(
                          (training) => (
                            <div
                              key={`${dia}-${training.horario}-${training.categoria}`}
                              className="first:pt-0 py-5 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                            >
                              <div className="flex items-start gap-4">
                                <Clock
                                  size={20}
                                  className="text-accent flex-shrink-0 mt-1"
                                  aria-hidden="true"
                                />

                                <div>
                                  <p className="font-display text-3xl text-black tracking-wide leading-none">
                                    {
                                      training.horario
                                    }
                                  </p>

                                  <p className="text-sm text-zinc-500 mt-2">
                                    {
                                      training.categoria
                                    }
                                  </p>
                                </div>
                              </div>

                              <span
                                className={
                                  training.tipo ===
                                  'Kimono'
                                    ? 'tag-kimono'
                                    : 'tag-nogi'
                                }
                              >
                                {training.tipo}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </article>
                  )
                },
              )}
            </div>

            <p className="text-xs text-zinc-500 mt-5 leading-relaxed">
              Os horários podem sofrer alterações em
              feriados, dias de competição ou situações
              excepcionais. Em caso de dúvida, confirme
              pelo WhatsApp antes de se deslocar.
            </p>
          </div>
        </section>

        {/* PRIMEIRA VISITA */}
        <section className="bg-zinc-100 py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <figure>
              <div className="rounded-2xl overflow-hidden bg-zinc-900">
                <img
                  src="/img/membros/equipebjj.jpeg"
                  alt="Treino do Projeto Jiu-Jitsu Desterro"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              <figcaption className="text-xs text-zinc-500 mt-4">
                Treino do Projeto Jiu-Jitsu Desterro.
              </figcaption>
            </figure>

            <div>
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                Primeira visita
              </p>

              <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide leading-none mb-6">
                Vai conhecer
                <br />
                o projeto?
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-8">
                Você não precisa ter experiência anterior.
                Entre em contato, confirme o melhor
                horário e venha conhecer o ambiente antes
                de iniciar os treinos.
              </p>

              <ul className="space-y-5 mb-9">
                <li className="flex items-start gap-4">
                  <CheckCircle2
                    size={20}
                    className="text-accent flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="font-bold text-black text-sm">
                      Aulas gratuitas
                    </p>

                    <p className="text-zinc-500 text-sm mt-1">
                      Não há cobrança de mensalidade para
                      participar do projeto.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Shirt
                    size={20}
                    className="text-accent flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="font-bold text-black text-sm">
                      Primeira aula
                    </p>

                    <p className="text-zinc-500 text-sm mt-1">
                      Para conhecer o treino, use roupas
                      confortáveis. O kimono não é
                      obrigatório no primeiro contato.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <MapPin
                    size={20}
                    className="text-accent flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="font-bold text-black text-sm">
                      Desterro · Paraíba
                    </p>

                    <p className="text-zinc-500 text-sm mt-1">
                      {contact.address.full}
                    </p>
                  </div>
                </li>
              </ul>

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
                Confirmar horário
              </a>
            </div>
          </div>
        </section>

        {/* RESUMO */}
        <section className="bg-black text-white py-14 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <CalendarDays
                size={22}
                className="text-red-400 flex-shrink-0"
                aria-hidden="true"
              />

              <div>
                <p className="font-display text-2xl tracking-wide">
                  4 dias por semana
                </p>

                <p className="text-zinc-500 text-xs mt-1">
                  Segunda, quarta, sexta e sábado
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock
                size={22}
                className="text-red-400 flex-shrink-0"
                aria-hidden="true"
              />

              <div>
                <p className="font-display text-2xl tracking-wide">
                  Infantil e adulto
                </p>

                <p className="text-zinc-500 text-xs mt-1">
                  Horários separados durante a semana
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin
                size={22}
                className="text-red-400 flex-shrink-0"
                aria-hidden="true"
              />

              <div>
                <p className="font-display text-2xl tracking-wide">
                  Desterro · PB
                </p>

                <p className="text-zinc-500 text-xs mt-1">
                  Treinos presenciais
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}