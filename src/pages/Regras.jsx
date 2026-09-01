import { Link } from 'react-router-dom'
import {
  ChevronDown,
  ShieldCheck,
} from 'lucide-react'

import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import regras from '../data/regras.json'

export default function Regras() {
  return (
    <>
      <SEO
        title="Regras do Tatame | Projeto Jiu-Jitsu Desterro"
        description="Conheça as regras de convivência, segurança, higiene e conduta adotadas nos treinos do Projeto Jiu-Jitsu Desterro."
        path="/regras"
      />

      <div className="bg-light min-h-screen">
        <PageHero
          accent="Código de conduta"
          title="Regras do Tatame"
          subtitle={`${regras.length} orientações que organizam a convivência, a segurança e a rotina dos treinos.`}
        />

        {/* INTRODUÇÃO */}
        <section className="bg-white py-16 md:py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-start border-y border-zinc-200 py-8">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                <ShieldCheck
                  size={21}
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                  Antes de treinar
                </p>

                <h2 className="font-display text-3xl md:text-4xl text-black tracking-wide mb-3">
                  Segurança e respeito fazem parte do treino
                </h2>

                <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-3xl">
                  As regras do projeto ajudam a manter um
                  ambiente seguro, organizado e respeitoso para
                  crianças e adultos. Elas orientam desde a
                  higiene e a pontualidade até a conduta durante
                  os treinos e a representação da equipe fora do
                  tatame.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REGRAS */}
        <section className="bg-zinc-100 pb-20 md:pb-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
              <div>
                <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                  Orientações
                </p>

                <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide">
                  Código do tatame
                </h2>
              </div>

              <p className="text-xs text-zinc-500 max-w-xs md:text-right leading-relaxed">
                Abra cada item para consultar sua descrição
                completa.
              </p>
            </div>

            <div className="border-t border-zinc-300">
              {regras.map((regra) => (
                <details
                  key={regra.numero}
                  className="group border-b border-zinc-300"
                >
                  <summary className="list-none cursor-pointer py-6 flex items-center gap-4 md:gap-6">
                    <span className="font-display text-3xl md:text-4xl leading-none text-zinc-300 group-open:text-accent transition-colors flex-shrink-0 w-10 md:w-12">
                      {String(regra.numero).padStart(
                        2,
                        '0',
                      )}
                    </span>

                    <span className="font-bold text-sm md:text-base text-black flex-1">
                      {regra.titulo}
                    </span>

                    <ChevronDown
                      size={19}
                      className="text-zinc-400 group-open:text-accent group-open:rotate-180 transition-transform flex-shrink-0"
                      aria-hidden="true"
                    />
                  </summary>

                  <div className="pb-6 pl-14 md:pl-[72px] pr-8">
                    <p className="text-zinc-600 text-sm leading-relaxed max-w-3xl">
                      {regra.descricao}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* OBSERVAÇÃO */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:items-center">
            <div>
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                Primeira aula
              </p>

              <h2 className="font-display text-4xl md:text-5xl text-black tracking-wide">
                Não precisa decorar tudo antes de começar
              </h2>

              <p className="text-zinc-600 text-sm leading-relaxed mt-3 max-w-2xl">
                As orientações são apresentadas e reforçadas no
                dia a dia dos treinos. Em caso de dúvida,
                converse com o professor antes ou durante a
                atividade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3">
              <Link
                to="/agenda"
                className="btn-primary text-center whitespace-nowrap"
              >
                Ver horários
              </Link>

              <Link
                to="/contato"
                className="px-7 py-3 text-center rounded-full border border-zinc-300 text-black text-xs font-bold uppercase tracking-widest hover:border-black transition-colors whitespace-nowrap"
              >
                Falar conosco
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}