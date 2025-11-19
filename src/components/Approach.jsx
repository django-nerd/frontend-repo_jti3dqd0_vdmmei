import { BadgeCheck, Cuboid, LayoutGrid, TimerReset } from 'lucide-react'

const phases = [
  { icon: LayoutGrid, title: 'Discover', desc: 'Goals, constraints, and success metrics upfront.' },
  { icon: Cuboid, title: 'Design', desc: 'From flows to Figma to polished prototypes.' },
  { icon: TimerReset, title: 'Build', desc: 'Type-safe, accessible and blazing fast.' },
  { icon: BadgeCheck, title: 'Launch', desc: 'QA, instrumentation and iteration baked in.' }
]

export default function Approach() {
  return (
    <section id="approach" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">How we work</h2>
          <p className="mt-2 text-slate-300">Clear phases, collaborative cadence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {phases.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
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
