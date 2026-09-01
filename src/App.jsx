import { useEffect } from 'react'
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

import { Analytics } from '@vercel/analytics/react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Agenda from './pages/Agenda'
import Galeria from './pages/Galeria'
import Regras from './pages/Regras'
import Contato from './pages/Contato'
import Professor from './pages/Professor'
import Resultados from './pages/Resultados'
import Transparencia from './pages/Transparencia'
import NoticiaMocao from './pages/NoticiaMocao'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/sobre"
            element={<Sobre />}
          />

          <Route
            path="/agenda"
            element={<Agenda />}
          />

          <Route
            path="/professor"
            element={<Professor />}
          />

          <Route
            path="/resultados"
            element={<Resultados />}
          />

          <Route
            path="/noticias/mocao-de-apoio-camara-desterro-2026"
            element={<NoticiaMocao />}
          />

          <Route
            path="/galeria"
            element={<Galeria />}
          />

          <Route
            path="/regras"
            element={<Regras />}
          />

          <Route
            path="/transparencia"
            element={<Transparencia />}
          />

          <Route
            path="/contato"
            element={<Contato />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>

      <Footer />

      <Analytics />
    </div>
  )
}