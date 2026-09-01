import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  ShieldCheck,
  Users,
} from 'lucide-react'

import SEO from '../components/SEO'
import agenda from '../data/agenda.json'
import { contact } from '../data/contacts'

const stats = [
  {
    value: 'Desde 2013',
    label: 'Atuação em Desterro',
  },
  {
    value: '100%',
    label: 'Gratuito',
  },
  {
    value: '7+',
    label: 'Idade mínima',
  },
  {
    value: '4 dias',
    label: 'De treino por semana',
  },
]

const principles = [
  {
    title: 'Disciplina',
    text: 'Pontualidade, constância e responsabilidade fazem parte da formação dentro e fora do tatame.',
  },
  {
    title: 'Respeito',
    text: 'O treino é construído com respeito entre alunos, professor, famílias, visitantes e adversários.',
  },
  {
    title: 'Comunidade',
    text: 'O projeto mantém o jiu-jitsu acessível e aproxima crianças, jovens e adultos da prática esportiva.',
  },
]

const audiences = [
  {
    title: 'Crianças',
    text: 'Turma infantil para crianças a partir de 7 anos.',
  },
  {
    title: 'Adultos',
    text: 'Treinos regulares para adultos, inclusive iniciantes.',
  },
  {
    title: 'Iniciantes',
    text: 'Não é necessário ter experiência anterior ou kimono na primeira aula.',
  },
]

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Associação Jiu-Jitsu - Disciplina e Educação para a Vida',
  alternateName: 'Projeto Jiu-Jitsu Desterro',
  url: 'https://jiujitsudesterro.vercel.app/',
  logo: 'https://jiujitsudesterro.vercel.app/img/bjjlogo.png',
  description:
    'Projeto social de jiu-jitsu em Desterro, Paraíba, com atividades gratuitas para crianças e adultos.',
  email: contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contact.address.street,
    addressLocality: contact.address.city,
    addressRegion: contact.address.state,
    addressCountry: 'BR',
  },
  sameAs: [contact.instagram.url],
}

function getTodayTrainings() {
  const days = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ]

  const today = days[new Date().getDay()]

  return agenda.find((day) => day.dia === today) || null
}

export default function Home() {
  const today = getTodayTrainings()

  return (
    <>
      <SEO
        title="Jiu-Jitsu Gratuito em Desterro (PB) | Projeto Social"
        description="Aulas gratuitas de jiu-jitsu em Desterro, Paraíba, para crianças a partir de 7 anos e adultos. Conheça o Projeto Jiu-Jitsu — Disciplina e Educação para a Vida."
        path="/"
        image="/img/treinos/equipegeral.jpeg"
        schema={organizationSchema}
      />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-black text-white">
        <img
          src="/img/treinos/equipegeral.jpeg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <p className="text-red-400 font-bold uppercase tracking-[4px] text-xs mb-5">
              Projeto social · Desterro, Paraíba · Desde 2013
            </p>

            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-wide mb-7">
              Jiu-Jitsu gratuito
              <span className="block text-red-500">
                em Desterro
              </span>
            </h1>

            <p className="text-zinc-200 text-base md:text-lg leading-relaxed max-w-2xl mb-9">
              Aulas gratuitas para crianças a partir de 7 anos
              e adultos. Um projeto social que mantém o
              jiu-jitsu acessível à comunidade de Desterro,
              no Sertão da Paraíba.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Quero conhecer o projeto
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/agenda"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/40 text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                <CalendarDays
                  size={17}
                  aria-hidden="true"
                />
                Ver treinos
              </Link>
            </div>

            <div className="mt-10 pt-7 border-t border-white/20 flex flex-wrap gap-x-8 gap-y-4 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck
                  size={18}
                  className="text-red-400"
                  aria-hidden="true"
                />
                Sem mensalidade
              </span>

              <span className="inline-flex items-center gap-2">
                <Users
                  size={18}
                  className="text-red-400"
                  aria-hidden="true"
                />
                Infantil e adulto
              </span>

              <span className="inline-flex items-center gap-2">
                <MapPin
                  size={18}
                  className="text-red-400"
                  aria-hidden="true"
                />
                Desterro · PB
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DADOS PRINCIPAIS */}
      <section
        className="bg-zinc-950 border-t border-zinc-800"
        aria-label="Informações principais do projeto"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="px-6 py-9 md:py-12 border-b border-r border-zinc-800 last:border-r-0 lg:border-b-0"
            >
              <p className="font-display text-4xl md:text-5xl text-white tracking-wide">
                {item.value}
              </p>

              <p className="text-zinc-500 text-[11px] md:text-xs uppercase tracking-widest font-bold mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* O PROJETO */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
              O Projeto
            </p>

            <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide leading-none mb-6">
              Jiu-jitsu como esporte,
              <br />
              educação e comunidade
            </h2>

            <div className="w-12 h-1 bg-accent mb-7" />

            <p className="text-zinc-600 leading-relaxed mb-5">
              O <strong>Projeto Jiu-Jitsu — Disciplina e
              Educação para a Vida</strong> desenvolve
              atividades em Desterro desde 2013, oferecendo
              treinos gratuitos para a comunidade.
            </p>

            <p className="text-zinc-600 leading-relaxed mb-8">
              Crianças, jovens e adultos encontram no tatame
              um ambiente de aprendizado esportivo, convivência
              e responsabilidade, com acompanhamento do
              professor Ramon Cleber.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/sobre"
                className="btn-primary"
              >
                Conhecer nossa história
              </Link>

              <Link
                to="/professor"
                className="inline-flex items-center px-6 py-3 font-bold text-sm text-black hover:text-accent transition-colors"
              >
                Conhecer o professor
                <ArrowRight
                  size={17}
                  className="ml-2"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <figure className="relative max-w-md mx-auto lg:ml-auto">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/30 rounded-2xl" />

            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl">
              <img
                src="/img/membros/professorramon.jpeg"
                alt="Professor Ramon Cleber, fundador e professor do Projeto Jiu-Jitsu Desterro"
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />

              <figcaption className="absolute inset-x-0 bottom-0 p-6 pt-20 bg-gradient-to-t from-black via-black/70 to-transparent">
                <p className="font-display text-3xl text-white tracking-wider">
                  Ramon Cleber
                </p>

                <p className="text-red-400 text-xs font-bold uppercase tracking-widest mt-1">
                  Professor · Faixa-preta · Fundador
                </p>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="bg-zinc-100 py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
              Quem pode participar
            </p>

            <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide">
              O tatame está aberto
            </h2>

            <p className="text-zinc-600 mt-4 leading-relaxed">
              Não é preciso já praticar jiu-jitsu para conhecer
              o projeto. Quem está começando também é
              bem-vindo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-zinc-300">
            {audiences.map((item, index) => (
              <article
                key={item.title}
                className={`py-8 md:px-8 ${
                  index !== audiences.length - 1
                    ? 'border-b md:border-b-0 md:border-r border-zinc-300'
                    : ''
                }`}
              >
                <span className="text-accent font-display text-3xl">
                  0{index + 1}
                </span>

                <h3 className="font-display text-3xl text-black tracking-wide mt-3 mb-3">
                  {item.title}
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TREINOS DO DIA */}
      <section className="bg-black text-white py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-red-400 font-bold uppercase tracking-[4px] text-xs mb-3">
                Horários
              </p>

              <h2 className="font-display text-5xl md:text-6xl tracking-wide">
                Treinos de hoje
              </h2>
            </div>

            <Link
              to="/agenda"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-red-400 transition-colors"
            >
              Ver todos os horários
              <ArrowRight
                size={17}
                aria-hidden="true"
              />
            </Link>
          </div>

          {today ? (
            <div className="max-w-3xl border-t border-zinc-700">
              <div className="py-4 border-b border-zinc-800">
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                  Hoje · {today.dia}
                </p>
              </div>

              {today.treinos.map((training, index) => (
                <div
                  key={`${training.horario}-${training.categoria}`}
                  className={`py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    index !== today.treinos.length - 1
                      ? 'border-b border-zinc-800'
                      : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Clock
                      size={22}
                      className="text-red-400 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />

                    <div>
                      <p className="font-display text-3xl tracking-wide">
                        {training.horario}
                      </p>

                      <p className="text-zinc-400 text-sm mt-1">
                        {training.categoria}
                      </p>
                    </div>
                  </div>

                  <span
                    className={
                      training.tipo === 'Kimono'
                        ? 'tag-kimono'
                        : 'tag-nogi'
                    }
                  >
                    {training.tipo}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl border-y border-zinc-800 py-8">
              <p className="text-white font-semibold">
                Hoje não há treino regular programado.
              </p>

              <p className="text-zinc-500 text-sm mt-2">
                Consulte a agenda completa para ver o próximo
                horário.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="bg-white py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
              Formação
            </p>

            <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide">
              Princípios do projeto
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="border-t-2 border-black pt-6"
              >
                <p className="text-xs text-zinc-400 font-bold tracking-widest mb-5">
                  0{index + 1}
                </p>

                <h3 className="font-display text-3xl text-black tracking-wide mb-3">
                  {principle.title}
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO + CTA */}
      <section className="bg-zinc-950 text-white py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-red-400 font-bold uppercase tracking-[4px] text-xs mb-3">
              Faça uma visita
            </p>

            <h2 className="font-display text-5xl md:text-7xl tracking-wide leading-none mb-5">
              Conheça o projeto
              <br />
              de perto
            </h2>

            <p className="text-zinc-400 leading-relaxed max-w-2xl">
              Você pode assistir a um treino, conhecer o
              professor e tirar suas dúvidas antes de começar.
              O primeiro contato pode ser feito diretamente
              pelo WhatsApp.
            </p>

            <p className="mt-6 inline-flex items-start gap-3 text-sm text-zinc-300">
              <MapPin
                size={19}
                className="text-red-400 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              {contact.address.full}
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:min-w-[260px]">
            <Link
              to="/contato"
              className="btn-primary text-center"
            >
              Quero participar
            </Link>

            <Link
              to="/agenda"
              className="text-center px-8 py-3 rounded-full border border-zinc-700 text-white font-bold text-sm uppercase tracking-widest hover:border-white transition-colors"
            >
              Consultar horários
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}