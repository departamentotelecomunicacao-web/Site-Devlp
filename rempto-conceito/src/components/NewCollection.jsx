import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const items = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=85&auto=format&fit=crop',
    label: 'Oversized Tee',
    tag: 'New Drop',
    price: 'R$ 280',
    size: 'large',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=900&q=85&auto=format&fit=crop',
    label: 'Cargo Jacket',
    tag: 'Limited',
    price: 'R$ 890',
    size: 'small',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&q=85&auto=format&fit=crop',
    label: 'Cargo Pants',
    tag: 'Essentials',
    price: 'R$ 520',
    size: 'small',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=85&auto=format&fit=crop',
    label: 'Premium Hoodie',
    tag: 'Bestseller',
    price: 'R$ 650',
    size: 'large',
  },
]

function CollectionCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const isLarge = item.size === 'large'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden cursor-pointer ${
        isLarge ? 'row-span-2' : 'row-span-1'
      }`}
    >
      {/* Image */}
      <div className="relative w-full h-full min-h-[320px] overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.label}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ minHeight: isLarge ? '640px' : '300px' }}
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/20 transition-colors duration-500" />

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className="font-mono text-[9px] tracking-[0.35em] text-obsidian uppercase bg-gold px-2.5 py-1">
            {item.tag}
          </span>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <motion.div
            initial={{ y: 10, opacity: 0.8 }}
            whileHover={{ y: 0, opacity: 1 }}
            className="flex items-end justify-between"
          >
            <div>
              <p className="font-display text-xl md:text-2xl font-bold text-ivory leading-tight">
                {item.label}
              </p>
              <p className="font-mono text-[10px] tracking-[0.3em] text-gold mt-1 uppercase">
                {item.price}
              </p>
            </div>
            <motion.div
              className="w-9 h-9 border border-ivory/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-gold/60 group-hover:bg-gold/10"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowRight size={14} strokeWidth={1.5} className="text-ivory" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function NewCollection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section id="colecao" className="bg-obsidian py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div ref={titleRef} className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={titleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-mono text-[10px] tracking-[0.4em] text-gold uppercase mb-4 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-gold inline-block" />
              02 — Nova Coleção
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] text-ivory uppercase tracking-[-0.02em]"
            >
              Drop<br />
              <span className="text-silver/40">SS25</span>
            </motion.h2>
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-silver/60 uppercase hover:text-gold transition-colors duration-300 self-start md:self-auto"
          >
            Ver Tudo
            <span className="h-px w-6 bg-silver/40 group-hover:w-10 group-hover:bg-gold transition-all duration-300" />
          </motion.a>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4">
          {/* Large card — left */}
          <div className="lg:col-span-5">
            <CollectionCard item={items[0]} index={0} />
          </div>

          {/* Two small cards — middle */}
          <div className="lg:col-span-4 flex flex-col gap-3 md:gap-4">
            <CollectionCard item={items[1]} index={1} />
            <CollectionCard item={items[2]} index={2} />
          </div>

          {/* Large card — right */}
          <div className="lg:col-span-3">
            <CollectionCard item={items[3]} index={3} />
          </div>
        </div>
      </div>
    </section>
  )
}
