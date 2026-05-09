export default function Marquee() {
  const items = [
    'Nova Coleção SS25',
    '✦',
    'Streetwear Premium',
    '✦',
    'Rempto Conceito',
    '✦',
    'Moda Urbana',
    '✦',
    'Exclusividade',
    '✦',
    'Arte & Conceito',
    '✦',
  ]

  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div className="w-full overflow-hidden border-y border-ash/40 py-3.5 bg-charcoal/50 backdrop-blur-sm">
      <div className="animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`inline-block mx-5 font-mono text-[10px] tracking-[0.35em] uppercase ${
              item === '✦' ? 'text-gold' : 'text-silver/60'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
