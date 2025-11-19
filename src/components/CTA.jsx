export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Let’s build what’s next</h2>
        <p className="mt-3 text-slate-300">Brief us in a few lines and we’ll get back within 24 hours.</p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input type="text" placeholder="Your name" className="col-span-1 sm:col-span-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
          <input type="email" placeholder="Email" className="col-span-1 sm:col-span-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
          <input type="text" placeholder="Company / Project" className="col-span-1 sm:col-span-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
          <textarea rows="4" placeholder="What are you looking to build?" className="sm:col-span-3 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
          <button type="submit" className="sm:col-span-3 inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white text-slate-900 font-medium shadow hover:shadow-lg transition-shadow">Send request</button>
        </form>
      </div>
    </section>
  )
}
