import { useState } from 'react'
import { Menu, X, Hexagon, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2 group">
              <span className="relative grid place-items-center w-9 h-9">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/30 to-amber-600/30 blur-sm" />
                <Hexagon className="relative size-7 text-amber-400" />
              </span>
              <span className="text-white font-semibold tracking-tight">Hexad</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-slate-300 hover:text-white transition-colors">{l.label}</a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium shadow hover:shadow-md transition-shadow">
                Start a project <ArrowUpRight className="size-4" />
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white" aria-label="Toggle menu">
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="block text-slate-200">{l.label}</a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium">
                Start a project <ArrowUpRight className="size-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
