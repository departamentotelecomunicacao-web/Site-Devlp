import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Eye } from 'lucide-react'

const categories = ['Todos', 'Hoodies', 'Camisetas', 'Calças', 'Jaquetas']

const products = [
  {
    id: 1,
    name: 'Hoodie Oversized Coal',
    category: 'Hoodies',
    price: 'R$ 650',
    originalPrice: null,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=700&q=85&auto=format&fit=crop',
    color: '#1a1a1a',
    sizes: ['P', 'M', 'G', 'GG'],
  },
  {
    id: 2,
    name: 'Tee Graphic Blanc',
    category: 'Camisetas',
    price: 'R$ 280',
    originalPrice: null,
    tag: 'Hot',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&q=85&auto=format&fit=crop',
    color: '#f0ede8',
    sizes: ['P', 'M', 'G'],
  },
  {
    id: 3,
    name: 'Cargo Pant Slate',
    category: 'Calças',
    price: 'R$ 520',
    originalPrice: 'R$ 620',
    tag: 'Sale',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=700&q=85&auto=format&fit=crop',
    color: '#2a2a2a',
    sizes: ['36', '38', '40', '42'],
  },
  {
    id: 4,
    name: 'Bomber Velvet Noir',
    category: 'Jaquetas',
    price: 'R$ 980',
    originalPrice: null,
    tag: 'Limited',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&q=85&auto=format&fit=crop',
    color: '#0f0f0f',
    sizes: ['P', 'M', 'G'],
  },
  {
    id: 5,
    name: 'Hoodie Essential Ash',
    category: 'Hoodies',
    price: 'R$ 580',
    originalPrice: null,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=85&auto=format&fit=crop',
    color: '#8a8a8a',
    sizes: ['P', 'M', 'G', 'GG'],
  },
  {
    id: 6,
    name: 'Tee Minimal Void',
    category: 'Camisetas',
    price: 'R$ 240',
    originalPrice: null,
    tag: null,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=700&q=85&auto=format&fit=crop',
    color: '#0a0a0a',
    sizes: ['P', 'M', 'G', 'GG'],
  },
]

const tagColors = {
  New: 'bg-gold text-obsidian',
  Hot: 'bg-ivory text-obsidian',
  Sale: 'bg-red-900/80 text-ivory',
  Limited: 'bg-smoke border border-gold/40 text-gold',
}

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [liked, setLiked] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative cursor-pointer"
    >
      {/* Image wrapper */}
      <div className="relative overflow-hidden aspect-[3/4] bg-smoke">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
          loading="lazy"
        />

        {/* Tag */}
        {product.tag && (
          <div className={`absolute top-3 left-3 px-2.5 py-1 font-mono text-[9px] tracking-[0.3em] uppercase ${tagColors[product.tag]}`}>
            {product.tag}
          </div>
        )}

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-3 group-hover:translate-x-0">
          <button
            onClick={() => setLiked(!liked)}
            className={`w-8 h-8 flex items-center justify-center border backdrop-blur-sm transition-colors duration-200 ${
              liked
                ? 'bg-gold/20 border-gold/50 text-gold'
                : 'bg-obsidian/60 border-ash/50 text-ivory hover:border-gold/40'
            }`}
            aria-label="Favoritar"
          >
            <Heart size={13} strokeWidth={liked ? 2.5 : 1.5} fill={liked ? 'currentColor' : 'none'} />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center border border-ash/50 bg-obsidian/60 text-ivory hover:border-gold/40 backdrop-blur-sm transition-colors duration-200"
            aria-label="Visualizar"
          >
            <Eye size={13} strokeWidth={1.5} />
          </button>
        </div>

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <button className="w-full py-3 bg-ivory text-obsidian font-mono text-[9px] tracking-[0.35em] uppercase hover:bg-gold transition-colors duration-200">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1.5">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-bold text-base text-ivory group-hover:text-gold transition-colors duration-300 leading-tight">
            {product.name}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-ivory/90">{product.price}</span>
          {product.originalPrice && (
            <span className="font-mono text-[11px] text-silver/40 line-through">{product.originalPrice}</span>
          )}
        </div>
        {/* Size dots */}
        <div className="flex items-center gap-1.5 pt-1">
          {product.sizes.map((size) => (
            <span key={size} className="font-mono text-[9px] tracking-wider text-silver/40 border border-ash/50 px-1.5 py-0.5 hover:border-gold/40 hover:text-gold cursor-pointer transition-colors duration-200">
              {size}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  const filtered = activeCategory === 'Todos'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section className="bg-obsidian py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={titleRef} className="mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] tracking-[0.4em] text-gold uppercase mb-4 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gold inline-block" />
            04 — Produtos em Destaque
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] text-ivory uppercase tracking-[-0.02em]"
          >
            Must<br />
            <span className="text-silver/40">Haves.</span>
          </motion.h2>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10 md:mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-[9px] tracking-[0.3em] uppercase px-4 py-2 border transition-all duration-300 ${
                activeCategory === cat
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-ash/50 text-silver/60 hover:border-silver/30 hover:text-silver'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Load more */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <button className="group inline-flex items-center gap-4 font-mono text-[10px] tracking-[0.35em] text-silver/60 uppercase border border-ash/50 px-8 py-4 hover:border-gold/40 hover:text-gold transition-all duration-300">
            Carregar Mais
            <span className="h-px w-5 bg-silver/40 group-hover:w-8 group-hover:bg-gold transition-all duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
