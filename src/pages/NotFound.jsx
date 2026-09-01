import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Página não encontrada | Jiu-Jitsu Desterro"
        description="A página que você procura não foi encontrada."
        path="/404"
      />

      <section className="min-h-[80vh] bg-black text-white px-6 pt-32 pb-20 flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-500 font-bold uppercase tracking-[4px] text-xs mb-4">
            Erro 404
          </p>

          <h1 className="font-display text-6xl md:text-8xl tracking-wide mb-6">
            Página não encontrada
          </h1>

          <p className="text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">
            O endereço informado não existe ou pode ter sido
            alterado. Você pode retornar ao início ou consultar
            os horários dos nossos treinos.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="btn-primary"
            >
              Voltar ao início
            </Link>

            <Link
              to="/agenda"
              className="px-8 py-3 rounded-full border border-zinc-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Ver treinos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
