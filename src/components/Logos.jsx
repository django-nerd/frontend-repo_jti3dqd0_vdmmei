import { motion } from 'framer-motion'

const brands = [
  'Figma', 'Notion', 'Vercel', 'Linear', 'Supabase', 'Webflow'
]

export default function Logos() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-8 opacity-80">
          {brands.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-slate-300 text-sm sm:text-base"
            >
              {b}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
