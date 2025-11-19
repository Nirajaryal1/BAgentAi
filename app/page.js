import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="absolute top-0 w-full z-50 p-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <a href="#" className="flex items-center">
              <span className="text-white text-2xl font-extrabold">BAgent</span>
              <span className="text-gold text-2xl font-extrabold ml-1">AI</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6 text-white font-medium ml-auto">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold transition-all text-white">Client Login</a>
          </div>
        </div>
      </nav>

      <Hero />

      <Features />

      <Pricing />

      <FAQ />

      <Footer />
    </main>
  )
}
