import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const heroImages = [
  'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=1800&q=90&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1800&q=90&auto=format&fit=crop',
]

const textVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      delay: 0.2 + i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative w-full h-screen min-h-[700px] overflow-hidden bg-obsidian">
      {/* Parallax image */}
      <motion.div
        className="absolute inset-0 w-full h-[115%] -top-[7.5%]"
        style={{ y: imgY }}
      >
        <img
          src={heroImages[0]}
          alt="Rempto Conceito — Hero"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Layered gradients for drama */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/20" />
        <div className="absolute inset-0 bg-obsidian/20" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto"
      >
        {/* Season tag */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mb-6 md:mb-8 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="font-mono text-[10px] md:text-[11px] tracking-[0.4em] text-gold uppercase">
            SS25 — Nova Coleção
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden">
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-display font-black text-[clamp(3rem,10vw,9rem)] leading-[0.9] text-ivory uppercase tracking-[-0.02em]"
          >
            REM
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-display font-black text-[clamp(3rem,10vw,9rem)] leading-[0.9] text-ivory uppercase tracking-[-0.02em] flex items-baseline gap-4 md:gap-8"
          >
            <span>PTO</span>
            <span className="font-display italic font-medium text-[clamp(1.5rem,4vw,4rem)] text-gold/80 tracking-normal normal-case leading-none">
              conceito
            </span>
          </motion.h1>
        </div>

        {/* Subline */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mt-6 md:mt-8 font-mono text-[11px] md:text-[13px] tracking-[0.35em] text-mist/70 uppercase max-w-sm"
        >
          Streetwear redefinido.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mt-8 md:mt-12 flex flex-wrap items-center gap-4 md:gap-6"
        >
          <a
            href="#colecao"
            className="group inline-flex items-center gap-3 bg-ivory text-obsidian px-7 py-3.5 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-gold transition-colors duration-300"
          >
            Ver Coleção
            <span className="w-4 h-px bg-obsidian group-hover:w-7 transition-all duration-300" />
          </a>
          <a
            href="#editorial"
            className="group inline-flex items-center gap-3 border border-ivory/20 text-ivory px-7 py-3.5 font-mono text-[10px] tracking-[0.3em] uppercase hover:border-gold/50 hover:text-gold transition-all duration-300"
          >
            Editorial
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[9px] tracking-[0.4em] text-silver/60 uppercase [writing-mode:vertical-rl]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} strokeWidth={1} className="text-silver/60" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Corner accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="absolute top-24 right-8 md:right-16 z-10 text-right"
      >
        <p className="font-mono text-[9px] tracking-[0.35em] text-silver/40 uppercase">
          Est. 2024
        </p>
      </motion.div>
    </section>
  )
}
