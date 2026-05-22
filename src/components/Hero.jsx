import { motion } from 'framer-motion'
import ParticleNetwork from './ParticleNetwork'

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] overflow-hidden bg-navy px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-teal/30 blur-3xl animate-pulse" />
        <div className="absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-teal/20 blur-3xl" />
        <div className="hero-wave absolute inset-0 opacity-30" />
      </div>

      {/* Mobile — particle background behind text */}
      <div className="pointer-events-none absolute inset-x-4 top-16 bottom-8 z-0 overflow-hidden opacity-70 lg:hidden">
        <ParticleNetwork />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-8">
          {/* Left — text (55%) */}
          <div className="relative z-20">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-r from-navy via-navy/92 to-navy/50 lg:hidden" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal">
                Data Science Undergraduate · SLIIT
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Inupama Caldera
              </h1>

              <h2 className="mt-4 text-xl font-semibold text-teal sm:text-2xl">
                Aspiring Data Scientist & Full-Stack Developer
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Turning data into insights and ideas into scalable applications — passionate
                about analytics, data engineering, and building meaningful digital experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  onClick={scrollToProjects}
                  className="inline-flex items-center rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-teal/90 hover:shadow-teal/25"
                >
                  View My Work
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center rounded-lg border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-teal hover:bg-white/10"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — particle canvas (45%), desktop */}
          <div className="relative hidden h-[min(78vh,680px)] w-full overflow-hidden lg:block">
            <ParticleNetwork />
          </div>
        </div>
      </div>
    </section>
  )
}
