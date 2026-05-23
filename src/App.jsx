import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import './styles/globals.css'

function ScrollRestoration() {
  useEffect(() => {
    // Smooth-scroll polyfill anchor clicks for browsers that need it
    const handleAnchor = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute('href').slice(1)
      const el = document.getElementById(id)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Update URL without jump
        history.pushState(null, '', `#${id}`)
      }
    }
    document.addEventListener('click', handleAnchor)
    return () => document.removeEventListener('click', handleAnchor)
  }, [])

  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <ScrollRestoration />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  )
}
