import { Navbar } from './Navbar'
import { Footer } from '../sections/Footer'

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
    </div>
  )
}
