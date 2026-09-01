import { useEffect, useState } from 'react'
import {
  Link,
  NavLink,
  useLocation,
} from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'O Projeto' },
  { to: '/agenda', label: 'Treinos' },
  { to: '/professor', label: 'Professor' },
  { to: '/resultados', label: 'Resultados' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll,
      )
    }
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener(
      'keydown',
      handleKeyDown,
    )

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-black shadow-xl shadow-black/30'
          : 'bg-black/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label="Projeto Jiu-Jitsu Desterro — Página inicial"
        >
          <img
            src="/img/bjjlogo.png"
            alt=""
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
          />

          <div className="hidden sm:block">
            <p className="font-display text-white text-xl tracking-widest leading-none">
              JIU-JITSU
            </p>

            <p className="text-[10px] text-red-500 font-bold uppercase tracking-[3px] leading-none mt-1">
              Desterro · Paraíba
            </p>
          </div>
        </Link>

        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Navegação principal"
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                [
                  'px-3 py-2',
                  'text-xs font-bold uppercase tracking-wider',
                  'rounded',
                  'transition-colors duration-200',
                  isActive
                    ? 'text-white bg-accent'
                    : 'text-zinc-300 hover:text-white hover:bg-white/10',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contato"
          className="hidden md:inline-flex btn-primary text-xs py-2 px-5"
        >
          Quero participar
        </Link>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="md:hidden text-white p-2 rounded-md transition-colors hover:bg-white/10"
          aria-label={
            open
              ? 'Fechar menu de navegação'
              : 'Abrir menu de navegação'
          }
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <X
              size={26}
              aria-hidden="true"
            />
          ) : (
            <Menu
              size={26}
              aria-hidden="true"
            />
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-black border-t border-zinc-800"
        >
          <nav
            className="flex flex-col py-4 px-6 gap-1"
            aria-label="Navegação mobile"
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    'py-3 px-4',
                    'text-sm font-bold uppercase tracking-wider',
                    'rounded-md transition-colors',
                    isActive
                      ? 'text-white bg-accent'
                      : 'text-zinc-300 hover:text-white hover:bg-white/10',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            ))}

            <Link
              to="/contato"
              className="mt-4 btn-primary text-center text-xs py-3"
            >
              Quero participar
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}