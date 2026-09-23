
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Bus,
  HeartHandshake,
  MessageCircle,
  Package,
  ShieldCheck,
  Shirt,
  Trophy,
  Wrench,
} from 'lucide-react'

import PageHero from '../components/PageHero'
import SEO from '../components/SEO'

const destinations = [
  {
    icon: Wrench,
    title: 'Estrutura e manutenção',
    text: 'Melhorias no espaço de treinamento e manutenção da estrutura utilizada diariamente pelos alunos.',
  },
  {
    icon: Shirt,
    title: 'Kimonos e materiais',
    text: 'Compra de kimonos e materiais esportivos, especialmente para crianças e alunos que precisam de apoio.',
  },
  {
    icon: Package,
    title: 'Apoio a famílias',
    text: 'Aquisição de cestas básicas e outras ações de apoio a famílias em situação de vulnerabilidade.',
  },
  {
    icon: Trophy,
    title: 'Inscrições em campeonatos',
    text: 'Pagamento de inscrições para que atletas do projeto possam participar de competições.',
  },
  {
    icon: Bus,
    title: 'Transporte dos atletas',
    text: 'Ajuda com deslocamentos para campeonatos, eventos e demais atividades realizadas fora de Desterro.',
  },
  {
    icon: HeartHandshake,
    title: 'Continuidade do projeto',
    text: 'Outras necessidades diretamente relacionadas à manutenção e ao desenvolvimento das atividades do projeto.',
  },
]

const donationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Apoie o Projeto Jiu-Jitsu Desterro',
  description:
    'Saiba como apoiar o Projeto Jiu-Jitsu Desterro por meio de doações destinadas às atividades, estrutura e assistência aos alunos.',
  url: 'https://jiujitsudesterro.vercel.app/doacoes',
  about: {
    '@type': 'Organization',
    name: 'Associação Jiu-Jitsu - Disciplina e Educação para a Vida',
    taxID: '62.946.261/0001-56',
  },
}

export default function Doacoes() {
  return (
    <>
      <SEO
        title="Apoie o Projeto | Doações para o Jiu-Jitsu Desterro"
        description="Ajude o Projeto Jiu-Jitsu Desterro. As doações contribuem com kimonos, estrutura, transporte, competições e ações de apoio às famílias."
        path="/doacoes"
        schema={donationSchema}
      />

      <div className="bg-light min-h-screen">
        <PageHero
          accent="Faça parte"
          title="Apoie o Projeto"
          subtitle="Sua contribuição ajuda a manter o jiu-jitsu gratuito e amplia as possibilidades oferecidas aos alunos e às famílias atendidas pelo projeto."
        />

        {/* INTRODUÇÃO */}
        <section className="bg-white py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
            <div>
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                Contribuição voluntária
              </p>

              <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide leading-none mb-6">
                Cada contribuição
                <br />
                fortalece o projeto
              </h2>

              <div className="w-12 h-1 bg-accent mb-7" />

              <div className="space-y-5 text-zinc-600 leading-relaxed">
                <p>
                  O Projeto Jiu-Jitsu — Disciplina e Educação
                  para a Vida oferece atividades gratuitas para
                  crianças, jovens e adultos em Desterro.
                </p>

                <p>
                  As doações ajudam a manter essa estrutura e
                  permitem ampliar o apoio oferecido aos alunos:
                  desde a compra de kimonos até a participação em
                  competições e o transporte dos atletas.
                </p>

                <p>
                  Também podem contribuir com ações sociais
                  desenvolvidas junto às famílias atendidas pelo
                  projeto.
                </p>
              </div>

              <div className="mt-9 flex items-start gap-4 p-5 bg-zinc-100 rounded-xl">
                <ShieldCheck
                  size={23}
                  className="text-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />

                <div>
                  <p className="font-bold text-black text-sm">
                    Associação formalmente constituída
                  </p>

                  <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                    Associação Jiu-Jitsu — Disciplina e Educação
                    para a Vida · CNPJ 62.946.261/0001-56.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-zinc-950 text-white p-8 md:p-10">
              <HeartHandshake
                size={36}
                className="text-red-400 mb-7"
                aria-hidden="true"
              />

              <h3 className="font-display text-4xl md:text-5xl tracking-wide leading-none mb-5">
                Apoie o esporte e a comunidade
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Sua doação contribui para a continuidade
                das atividades esportivas e das iniciativas
                sociais realizadas pelo projeto.
              </p>

              <a
                href="#pix"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-red-400 transition-colors"
              >
                Fazer uma doação
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* PIX */}
        <section
          id="pix"
          className="bg-zinc-100 py-16 md:py-24 px-6 scroll-mt-24"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-accent text-xs font-bold uppercase tracking-[4px] mb-4">
                  Contribuição via Pix
                </p>

                <h2 className="font-display text-5xl md:text-6xl text-black leading-none tracking-wide mb-6">
                  Faça sua doação
                </h2>

                <p className="text-zinc-600 leading-relaxed mb-7">
                  Você pode contribuir com qualquer valor.
                  Abra o aplicativo do seu banco, selecione
                  a opção Pix e escaneie o QR Code.
                </p>

                <div className="border-l-4 border-accent pl-5 mb-8">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-2">
                    Recebedor
                  </p>

                  <p className="text-black font-bold leading-relaxed">
                    Associação Jiu-Jitsu — Disciplina e
                    Educação para a Vida
                  </p>
                </div>

                <div className="flex items-start gap-3 text-sm text-zinc-600">
                  <ShieldCheck
                    size={21}
                    className="text-accent flex-shrink-0"
                    aria-hidden="true"
                  />

                  <p>
                    Antes de confirmar a transferência, verifique
                    se o nome do recebedor corresponde ao nome
                    da associação.
                  </p>
                </div>
              </div>

              {/* QR CODE */}
              <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-7 sm:p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-5">
                  <HeartHandshake
                    size={23}
                    className="text-accent"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-display text-3xl text-black tracking-wide mb-2">
                  Doe pelo Pix
                </h3>

                <p className="text-zinc-500 text-sm mb-6">
                  Escaneie o código com o aplicativo do seu banco.
                </p>

                <img
                  src="/img/qr_pix_associacao.png"
                  alt="QR Code Pix para doações à Associação Jiu-Jitsu — Disciplina e Educação para a Vida"
                  width="400"
                  height="400"
                  className="w-full max-w-[300px] h-auto mx-auto"
                />

                <p className="text-xs text-zinc-500 mt-6">
                  Contribuição voluntária, sem valor mínimo.
                </p>

                <a
                  href="/img/qr_pix_associacao.png"
                  download="pix-jiujitsu-desterro.png"
                  className="inline-flex items-center justify-center mt-6 px-7 py-3 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                >
                  Salvar QR Code
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DESTINO DAS DOAÇÕES */}
        <section className="bg-zinc-100 py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                Onde sua contribuição ajuda
              </p>

              <h2 className="font-display text-5xl md:text-6xl text-black tracking-wide">
                Destino das doações
              </h2>

              <p className="text-zinc-600 mt-4 leading-relaxed">
                Os recursos recebidos serão destinados às
                necessidades relacionadas à continuidade e ao
                desenvolvimento das atividades sociais e
                esportivas do projeto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-300">
              {destinations.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="p-7 md:p-8 bg-white border-r border-b border-zinc-300"
                >
                  <Icon
                    size={25}
                    className="text-accent mb-6"
                    aria-hidden="true"
                  />

                  <h3 className="font-display text-3xl text-black tracking-wide mb-3">
                    {title}
                  </h3>

                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSPARÊNCIA */}
        <section className="bg-black text-white py-20 md:py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:items-center">
            <div>
              <p className="text-red-400 font-bold uppercase tracking-[4px] text-xs mb-3">
                Transparência
              </p>

              <h2 className="font-display text-5xl md:text-6xl tracking-wide leading-none mb-5">
                Apoio com responsabilidade
              </h2>

              <p className="text-zinc-400 leading-relaxed max-w-3xl">
                Informações cadastrais da associação estão
                disponíveis publicamente no próprio site.
                Instituições, empresas e apoiadores também podem
                entrar em contato diretamente com a coordenação
                para obter mais informações.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:min-w-[250px]">
              <Link
                to="/transparencia"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Ver transparência
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-zinc-700 text-sm font-bold uppercase tracking-widest hover:border-white transition-colors"
              >
                <MessageCircle size={17} aria-hidden="true" />
                Falar conosco
              </Link>
            </div>
          </div>
        </section>

        {/* OUTRAS FORMAS DE APOIAR */}
        <section className="bg-white py-16 md:py-20 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">
                Outras formas de apoiar
              </p>

              <h2 className="font-display text-4xl md:text-5xl text-black tracking-wide">
                Empresas e parceiros também são bem-vindos
              </h2>

              <p className="text-zinc-600 text-sm mt-3 max-w-2xl leading-relaxed">
                Doações de materiais, kimonos, alimentos,
                transporte e outras formas de parceria podem ser
                combinadas diretamente com a coordenação do
                projeto.
              </p>
            </div>

            <Link
              to="/contato"
              className="inline-flex items-center gap-2 font-bold text-sm text-black hover:text-accent transition-colors whitespace-nowrap"
            >
              Propor uma parceria
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}