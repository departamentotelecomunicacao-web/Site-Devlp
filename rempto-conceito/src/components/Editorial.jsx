import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const quotes = [
  { text: 'Não é moda.', em: 'É manifesto.' },
  { text: 'Cada peça,', em: 'uma declaração.' },
  { text: 'Silêncio elegante.', em: 'Barulho visual.' },
]

export default function Editorial() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const img1Y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const img2Y = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])
  const textX = useTransform(scrollYProgress, [0, 1], ['-3%', '3%'])

  return (
    <section id="editorial" ref={sectionRef} className="bg-charcoal py-24 md:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">

        {/* Section label */}
        <motion.p
          ref={titleRef}
          initial={{ opacity: 0, x: -20 }}
          animate={titleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] tracking-[0.4em] text-gold uppercase mb-16 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-gold inline-block" />
          03 — Editorial
        </motion.p>

        {/* Main editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* Left image column */}
          <div className="lg:col-span-4 relative">
            <motion.div style={{ y: img1Y }} className="relative">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=85&auto=format&fit=crop"
                  alt="Editorial 01"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-obsidian/30 mix-blend-multiply" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-5 -right-5 bg-gold px-4 py-3"
              >
                <p className="font-mono text-[9px] tracking-[0.3em] text-obsidian uppercase font-bold">
                  SS / 25
                </p>
              </motion.div>
            </motion.div>

            {/* Floating number */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="absolute -top-8 -left-2 font-display font-black text-[8rem] text-smoke/60 leading-none select-none pointer-events-none"
            >
              01
            </motion.p>
          </div>

          {/* Center text */}
          <motion.div
            style={{ x: textX }}
            className="lg:col-span-5 flex flex-col justify-center py-8 lg:py-0 lg:px-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-display font-black text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.95] text-ivory uppercase tracking-[-0.02em]">
                Arte que
                <br />
                <span className="italic font-medium text-gold">veste.</span>
                <br />
                Roupa que
                <br />
                <span className="italic font-medium text-silver/50">fala.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 md:mt-12 space-y-1"
            >
              {quotes.map((q, i) => (
                <p key={i} className="font-mono text-[11px] md:text-[12px] tracking-[0.25em] text-silver/50 uppercase leading-relaxed">
                  {q.text} <span className="text-gold/70">{q.em}</span>
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 md:mt-14"
            >
              <a
                href="#"
                className="group inline-flex items-center gap-4 font-mono text-[11px] tracking-[0.3em] text-ivory uppercase border-b border-ivory/20 pb-2 hover:border-gold hover:text-gold transition-all duration-300"
              >
                Ver Lookbook Completo
                <span className="h-px w-5 bg-ivory/40 group-hover:w-10 group-hover:bg-gold transition-all duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right image column */}
          <div className="lg:col-span-3 relative hidden lg:block">
            <motion.div style={{ y: img2Y }}>
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85&auto=format&fit=crop"
                  alt="Editorial 02"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-obsidian/50" />
              </div>

              {/* Side text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-mono text-[9px] tracking-[0.3em] text-mist/60 uppercase">
                  Coleção Inverno
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom editorial strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-px bg-ash/30"
        >
          {[
            { num: '87', label: 'Peças Exclusivas', sub: 'na coleção SS25' },
            { num: '03', label: 'Drops Anuais', sub: 'edições limitadas' },
            { num: '∞', label: 'Conceito', sub: 'arte sem fronteiras' },
          ].map((stat) => (
            <div key={stat.num} className="bg-charcoal p-8 md:p-10 group hover:bg-smoke transition-colors duration-300">
              <p className="font-display font-black text-5xl md:text-6xl text-ivory group-hover:text-gold transition-colors duration-300 leading-none">
                {stat.num}
              </p>
              <p className="mt-3 font-mono text-[10px] tracking-[0.3em] text-silver/60 uppercase">
                {stat.label}
              </p>
              <p className="mt-1 font-mono text-[9px] tracking-[0.2em] text-silver/30 uppercase">
                {stat.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
