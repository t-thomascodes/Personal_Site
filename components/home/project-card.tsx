import Card from '@/components/ui/card'

interface ProjectCardProps {
  name: string
  meta: string
  blurb: string
  tags: string[]
  featured?: boolean
  stats?: Array<{ value: string; label: string }>
}

export default function ProjectCard({ name, meta, blurb, tags, featured, stats }: ProjectCardProps) {
  if (featured) {
    return (
      <Card className="col-span-full p-10 grid grid-cols-2 gap-12 max-md:grid-cols-1 hover:border-white/[0.15] transition-colors">
        <div>
          <div className="font-serif italic text-lg mb-1">{name}</div>
          <div className="text-[0.65rem] text-[var(--faint)] tracking-[0.1em] mb-4">{meta}</div>
          <div className="text-[0.78rem] text-[var(--dim)] leading-[1.85]">{blurb}</div>
          <div className="flex flex-wrap gap-2 mt-5">
            {tags.map(t => (
              <span key={t} className="text-[0.6rem] text-[var(--faint)] tracking-wide border border-white/[0.06] px-2 py-1">{t}</span>
            ))}
          </div>
        </div>
        {stats && (
          <div className="grid grid-cols-2 gap-4 content-center">
            {stats.map(s => (
              <div key={s.label} className="border border-white/[0.04] p-5 text-center">
                <div className="font-serif italic text-2xl mb-1">{s.value}</div>
                <div className="text-[0.65rem] text-[var(--faint)] tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </Card>
    )
  }

  return (
    <Card className="p-10 hover:border-white/[0.15] transition-colors max-md:p-6">
      <div className="font-serif italic text-lg mb-1">{name}</div>
      <div className="text-[0.65rem] text-[var(--faint)] tracking-[0.1em] mb-4">{meta}</div>
      <div className="text-[0.78rem] text-[var(--dim)] leading-[1.85]">{blurb}</div>
      <div className="flex flex-wrap gap-2 mt-5">
        {tags.map(t => (
          <span key={t} className="text-[0.6rem] text-[var(--faint)] tracking-wide border border-white/[0.06] px-2 py-1">{t}</span>
        ))}
      </div>
    </Card>
  )
}
