import { motion } from 'framer-motion'
import { Camera, Send, Play } from 'lucide-react'

const footerLinks = {
  Loja: ['Nova Coleção', 'Hoodies', 'Camisetas', 'Calças', 'Jaquetas', 'Acessórios'],
  Marca: ['Sobre Nós', 'Editorial', 'Lookbook', 'Sustentabilidade'],
  Suporte: ['FAQ', 'Tamanhos', 'Entregas', 'Devoluções', 'Contato'],
}

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-ash/30">
      {/* Main footer content */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <p className="font-display font-black text-3xl text-ivory tracking-[0.05em] uppercase leading-none">
                Rempto
              </p>
              <p className="font-mono text-[10px] tracking-[0.5em] text-gold uppercase mt-1">
                Conceito
              </p>
            </div>
            <p className="font-mono text-[10px] tracking-[0.15em] text-silver/40 uppercase leading-loose max-w-xs">
              Streetwear premium para aqueles que recusam o ordinário. Arte vestida.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-8">
              {[
                { Icon: Camera, label: 'Instagram' },
                { Icon: Send, label: 'Twitter' },
                { Icon: Play, label: 'Youtube' },
              ].map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 border border-ash/60 flex items-center justify-center text-silver/50 hover:border-gold/50 hover:text-gold transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={14} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h4 className="font-mono text-[9px] tracking-[0.4em] text-gold uppercase mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-mono text-[10px] tracking-[0.2em] text-silver/40 uppercase hover:text-ivory transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact block */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-[9px] tracking-[0.4em] text-gold uppercase mb-5">
              Contato
            </h4>
            <div className="space-y-3">
              <p className="font-mono text-[10px] tracking-[0.15em] text-silver/40 uppercase">
                contato@rempto.com
              </p>
              <p className="font-mono text-[10px] tracking-[0.15em] text-silver/40 uppercase">
                São Paulo, BR
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 md:mt-20 pt-6 border-t border-ash/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.3em] text-silver/25 uppercase">
            © 2025 Rempto Conceito — Todos os direitos reservados
          </p>
          <div className="flex items-center gap-6">
            {['Privacidade', 'Termos', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-mono text-[9px] tracking-[0.25em] text-silver/25 uppercase hover:text-silver/50 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
