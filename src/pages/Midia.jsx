import { useState } from 'react'
import PageHero from '../components/PageHero'
import midia from '../data/midia.json'
import { FileText, Award, Image as ImageIcon } from 'lucide-react'

const getTipoIcon = (tipo) => {
  const icons = {
    jornal: 'fas fa-newspaper',
    instagram: 'fab fa-instagram',
    radio: 'fas fa-microphone',
    oficial: 'fas fa-building',
    placa: 'fas fa-trophy',
    certificado: 'fas fa-award',
    premio: 'fas fa-medal',
    reconhecimento: 'fas fa-star',
    participacao: 'fas fa-handshake',
  }
  return icons[tipo] || 'fas fa-news'
}

const getTipoColor = (tipo) => {
  const colors = {
    jornal: 'text-blue-600 bg-blue-50',
    instagram: 'text-pink-600 bg-pink-50',
    radio: 'text-purple-600 bg-purple-50',
    oficial: 'text-red-600 bg-red-50',
    placa: 'text-amber-600 bg-amber-50',
    certificado: 'text-green-600 bg-green-50',
    premio: 'text-yellow-600 bg-yellow-50',
    reconhecimento: 'text-indigo-600 bg-indigo-50',
    participacao: 'text-teal-600 bg-teal-50',
  }
  return colors[tipo] || 'text-zinc-600 bg-zinc-50'
}

const getTipoLabel = (tipo) => {
  const labels = {
    jornal: 'Jornal',
    instagram: 'Instagram',
    radio: 'Rádio',
    oficial: 'Oficial',
    placa: 'Placa',
    certificado: 'Certificado',
    premio: 'Prêmio',
    reconhecimento: 'Reconhecimento',
    participacao: 'Participação',
  }
  return labels[tipo] || 'Mídia'
}

export default function Midia() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (img) => {
    setLightbox(img)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox(null)
    document.body.style.overflow = ''
  }

  return (
    <div>
      <PageHero
        accent="Repercussão e Reconhecimento"
        title="Mídia & Conquistas"
        subtitle="Veja como o projeto é reconhecido na mídia e quais prêmios já conquistamos."
      />

      {/* ── MEDIA MENTIONS ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent font-bold uppercase tracking-[4px] text-xs text-center mb-3">Na Imprensa</p>
          <h2 className="text-5xl font-display tracking-wide text-center text-black mb-4">Menções em Mídia</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {midia.midia.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden border border-zinc-200 hover:border-accent hover:shadow-lg transition-all duration-300 card-hover"
              >
                {/* Image */}
                <div
                  className="relative h-40 bg-zinc-100 cursor-pointer overflow-hidden group"
                  onClick={() => openLightbox(item.imagem)}
                >
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale-[15%] group-hover:grayscale-0"
                    onError={(e) => {
                      e.target.parentElement.style.background = '#f5f5f5'
                      e.target.style.display = 'none'
                    }}
                  />
                  {/* Hover zoom hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ImageIcon size={32} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Badge + Date */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${getTipoColor(item.tipo)}`}>
                      <i className={`${getTipoIcon(item.tipo)} mr-1`}></i>
                      {getTipoLabel(item.tipo)}
                    </span>
                    <p className="text-xs text-zinc-400 font-semibold">{item.data}</p>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-sm mb-2 text-black line-clamp-2 hover:text-accent transition-colors">
                    {item.titulo}
                  </h3>

                  {/* Source */}
                  <p className="text-xs text-accent font-bold uppercase tracking-widest mb-3">{item.fonte}</p>

                  {/* Description */}
                  <p className="text-zinc-600 text-sm leading-relaxed line-clamp-2 mb-4">
                    {item.descricao}
                  </p>

                  {/* Link */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest hover:text-black transition-colors"
                    >
                      <FileText size={14} />
                      Acessar
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="bg-light py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent font-bold uppercase tracking-[4px] text-xs text-center mb-3">Reconhecimentos</p>
          <h2 className="text-5xl font-display tracking-wide text-center text-black mb-4">Prêmios & Conquistas</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />

          {/* Featured achievements */}
          <div className="mb-16">
            <h3 className="font-bold text-sm uppercase tracking-widest text-black mb-6 flex items-center gap-2">
              <Award size={18} className="text-accent" />
              Destaques
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {midia.conquistas
                .filter((c) => c.destaque)
                .map((item) => (
                  <div
                    key={item.id}
                    className="relative overflow-hidden rounded-2xl h-72 cursor-pointer group"
                    onClick={() => openLightbox(item.imagem)}
                  >
                    <img
                      src={item.imagem}
                      alt={item.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.parentElement.style.background = '#1a1a1a'
                        e.target.style.display = 'none'
                      }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 group-hover:from-black/95 transition-all duration-300">
                      <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
                        {item.ano}
                      </span>
                      <h3 className="font-display text-2xl text-white mb-2 group-hover:text-accent transition-colors">
                        {item.titulo}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2">{item.descricao}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* All achievements */}
          <h3 className="font-bold text-sm uppercase tracking-widest text-black mb-6 flex items-center gap-2">
            <i className="fas fa-trophy text-accent"></i>
            Todas as Conquistas
          </h3>
          <div className="space-y-3">
            {midia.conquistas
              .filter((c) => !c.destaque)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-5 border border-zinc-200 hover:border-accent hover:shadow-md transition-all flex items-start gap-4 cursor-pointer group"
                  onClick={() => openLightbox(item.imagem)}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <i className={`${getTipoIcon(item.tipo)} text-accent text-lg`}></i>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full uppercase tracking-wider">
                        {item.ano}
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${getTipoColor(item.tipo)}`}>
                        {getTipoLabel(item.tipo)}
                      </span>
                    </div>
                    <h4 className="font-bold text-black text-sm mb-1 group-hover:text-accent transition-colors">
                      {item.titulo}
                    </h4>
                    <p className="text-zinc-500 text-sm line-clamp-1">{item.descricao}</p>
                  </div>

                  {/* Thumbnail */}
                  <div className="w-16 h-16 bg-zinc-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.imagem}
                      alt={item.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      onError={(e) => {
                        e.target.parentElement.style.background = '#f5f5f5'
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6">
            {[
              {
                num: midia.conquistas.length,
                label: 'Prêmios & Placas',
                icon: 'fas fa-trophy',
              },
              {
                num: midia.midia.length,
                label: 'Menções em Mídia',
                icon: 'fas fa-newspaper',
              },
              {
                num: midia.conquistas.reduce((acc, c) => acc + (c.destaque ? 1 : 0), 0),
                label: 'Destaque Especial',
                icon: 'fas fa-star',
              },
            ].map(({ num, label, icon }) => (
              <div key={label} className="bg-black rounded-xl p-8 text-center text-white">
                <i className={`${icon} text-accent text-3xl mb-3 block`}></i>
                <p className="font-display text-4xl mb-2">{num}</p>
                <p className="text-xs uppercase tracking-widest font-bold text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl tracking-wide mb-4">Quer Conhecer Nosso Trabalho?</h2>
          <p className="text-red-200 text-sm mb-8">
            Siga nossas redes sociais e acompanhe todas as novidades, competições e atividades do projeto.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.instagram.com/projetojiujitsu_desterro/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-accent font-bold px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-red-100 transition-colors"
            >
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
            <a
              href="https://wa.me/558386909986"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-accent font-bold px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-red-100 transition-colors"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors text-3xl"
            onClick={closeLightbox}
          >
            <i className="fas fa-xmark"></i>
          </button>
          <div className="max-w-4xl max-h-[85vh]">
            <img
              src={lightbox}
              alt="Imagem"
              className="max-w-full max-h-[80vh] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}
