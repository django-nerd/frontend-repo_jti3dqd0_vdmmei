import { motion } from 'framer-motion'

const items = [
  { title: 'Vortex OS', tag: 'SaaS Platform', color: 'from-amber-400 to-amber-600' },
  { title: 'Nova Bank', tag: 'Fintech', color: 'from-sky-400 to-blue-600' },
  { title: 'Glacier Labs', tag: 'Climate Tech', color: 'from-emerald-400 to-teal-600' },
]

export default function Work() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected work</h2>
            <p className="mt-2 text-slate-300">A snapshot of projects that blend clarity, craft and performance.</p>
          </div>
          <a href="#" className="text-slate-300 hover:text-white">Explore all</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <div className={`absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br ${p.color} blur-3xl opacity-40`} />
              <span className="text-xs text-slate-400">{p.tag}</span>
              <h3 className="mt-2 text-white text-lg font-medium">{p.title}</h3>
              <div className="mt-10 h-24 rounded-xl bg-slate-800/80 ring-1 ring-white/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
