import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section ref={ref} className="relative bg-charcoal py-24 md:py-36 overflow-hidden border-t border-ash/30">
      {/* Background text decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <p className="font-display font-black text-[20vw] text-smoke/30 uppercase tracking-[-0.05em] select-none whitespace-nowrap">
          Exclusivo
        </p>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] tracking-[0.5em] text-gold uppercase mb-8"
          >
            — Acesso VIP —
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95] text-ivory uppercase tracking-[-0.02em]"
          >
            Seja o
            <span className="italic text-gold"> primeiro</span>
            <br />a saber.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 font-mono text-[11px] tracking-[0.2em] text-silver/50 uppercase leading-loose max-w-sm mx-auto"
          >
            Novos drops, lançamentos exclusivos e acesso antecipado aos nossos editoriais.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            onSubmit={handleSubmit}
            className="mt-10 md:mt-14"
          >
            {!submitted ? (
              <div className="flex flex-col sm:flex-row gap-0 border border-ash/60 focus-within:border-gold/40 transition-colors duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="flex-1 bg-transparent px-5 py-4 font-mono text-[11px] tracking-[0.2em] text-ivory placeholder-silver/30 outline-none border-none focus:ring-0"
                />
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-3 bg-ivory text-obsidian px-6 py-4 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-gold transition-colors duration-300 min-w-[140px] whitespace-nowrap"
                >
                  Inscrever
                  <ArrowRight size={13} strokeWidth={2} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 border border-gold/40 px-6 py-4 bg-gold/5"
              >
                <Check size={16} strokeWidth={2} className="text-gold" />
                <span className="font-mono text-[11px] tracking-[0.3em] text-gold uppercase">
                  Você está na lista VIP
                </span>
              </motion.div>
            )}
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-5 font-mono text-[9px] tracking-[0.2em] text-silver/30 uppercase"
          >
            Sem spam. Apenas conteúdo que vale a pena.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
