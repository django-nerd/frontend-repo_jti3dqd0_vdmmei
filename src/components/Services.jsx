import { Code2, Figma, Palette, Rocket, Sparkles, Workflow } from 'lucide-react'

const services = [
  {
    icon: Figma,
    title: 'Brand & Identity',
    desc: 'Timeless identity systems that scale from logo to design language.'
  },
  {
    icon: Palette,
    title: 'Product Design',
    desc: 'Research-driven UX and micro-interactions that delight.'
  },
  {
    icon: Code2,
    title: 'Web Engineering',
    desc: 'Lightning-fast sites and apps built with modern stacks.'
  },
  {
    icon: Workflow,
    title: 'Design Systems',
    desc: 'Token-first systems that keep teams moving in sync.'
  },
  {
    icon: Rocket,
    title: 'Launch & Growth',
    desc: 'From QA to analytics and CRO, we ship and iterate.'
  },
  {
    icon: Sparkles,
    title: 'AI Experiences',
    desc: 'Conversational products powered by robust backends.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">What we do</h2>
          <p className="mt-2 text-slate-300">A senior, hands-on team across brand, product and engineering.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900/80 transition-colors">
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-400/15 text-amber-300">
                <Icon className="size-5" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
