import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xa5cMvp2ipgnnda2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-white"
          >
            A digital studio built on hexagonal precision
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl"
          >
            We craft brand, product and web experiences for ambitious teams. Strategy-led. Design-obsessed. Engineering-backed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white text-slate-900 font-medium shadow hover:shadow-lg transition-shadow">Start a project</a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-slate-900/70 ring-1 ring-white/10 text-white font-medium">See our work</a>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,186,116,0.15),transparent_60%)]" />
      </div>
    </section>
  )
}
