export default function PageHero({
  title,
  subtitle,
  accent,
}) {
  return (
    <section
      className="relative bg-black border-b border-zinc-800 pt-32 pb-16 md:pt-36 md:pb-20 px-6"
      aria-labelledby="page-title"
    >
      <div className="max-w-7xl mx-auto">
        {accent && (
          <div className="flex items-center gap-3 mb-4">
            <span
              className="block w-8 h-px bg-red-500"
              aria-hidden="true"
            />

            <p className="text-red-400 font-bold uppercase tracking-[4px] text-xs">
              {accent}
            </p>
          </div>
        )}

        <h1
          id="page-title"
          className="font-display text-white text-5xl sm:text-6xl md:text-7xl tracking-wide leading-none"
        >
          {title}
        </h1>

        {subtitle && (
          <p className="text-zinc-400 mt-5 text-sm md:text-base leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}