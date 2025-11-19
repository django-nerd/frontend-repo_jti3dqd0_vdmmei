import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Services from './components/Services'
import Work from './components/Work'
import Approach from './components/Approach'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(253,186,116,0.08),transparent_60%)] pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Work />
        <Approach />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-8 mt-10">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Hexad Studio</p>
          <div className="text-sm text-slate-400">Berlin — Remote</div>
        </div>
      </footer>
    </div>
  )
}

export default App
