import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function BrandStatement() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.0])
  const imgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 0.7, 0.7, 0.4])

  return (
    <section ref={ref} className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Full-bleed background image */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imgScale, opacity: imgOpacity }}
      >
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&q=80&auto=format&fit=crop"
          alt="Brand Statement"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-obsidian/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] tracking-[0.5em] text-gold uppercase mb-10"
        >
          — Manifesto —
        </motion.p>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-[clamp(2.5rem,7vw,7rem)] leading-[0.9] text-ivory uppercase tracking-[-0.02em]"
          >
            Vestir é um
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black italic text-[clamp(2.5rem,7vw,7rem)] leading-[0.9] text-gold uppercase tracking-[-0.02em]"
          >
            ato político.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 md:mt-10 font-mono text-[11px] md:text-[12px] tracking-[0.25em] text-mist/60 uppercase max-w-lg mx-auto leading-loose"
        >
          Rempto Conceito nasceu da recusa ao ordinário. Cada peça é um manifesto silencioso, uma declaração de existência autêntica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 h-px w-24 bg-gold/40 mx-auto"
        />
      </div>
    </section>
  )
}
