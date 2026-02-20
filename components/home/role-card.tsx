import Card from '@/components/ui/card'

interface RoleCardProps {
  company: string
  title: string
  meta: string
  tags: string[]
  description: string
  bullets: Array<{
    text: string
    highlights?: string[]
  }>
}

export default function RoleCard({ company, title, meta, tags, description, bullets }: RoleCardProps) {
  // Render bullet text with highlights bolded
  function renderBullet(text: string, highlights?: string[]) {
    if (!highlights || highlights.length === 0) return text

    let result = text
    highlights.forEach(h => {
      result = result.replace(h, `<strong>${h}</strong>`)
    })
    return <span dangerouslySetInnerHTML={{ __html: result }} />
  }

  return (
    <Card className="p-12 max-w-[1100px] mx-auto mb-6 grid grid-cols-[280px_1fr] gap-16 max-md:grid-cols-1 max-md:gap-4 max-md:p-10 hover:border-white/[0.15] transition-colors" rise>
      {/* Left */}
      <div>
        <div className="font-serif italic text-lg mb-1">{company}</div>
        <div className="text-[0.82rem] text-[var(--dim)] mb-1">{title}</div>
        <div className="text-[0.7rem] text-[var(--faint)] tracking-wide">{meta}</div>
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map(tag => (
            <span key={tag} className="text-[0.65rem] text-[var(--faint)] tracking-widest border border-white/[0.06] px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right */}
      <div>
        <div className="text-[var(--dim)] text-[0.8rem] leading-[1.85]">{description}</div>
        <ul className="list-none mt-5">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="py-2.5 border-t border-white/[0.03] text-[var(--dim)] text-[0.78rem] leading-[1.8] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--faint)] [&_strong]:text-[var(--text)] [&_strong]:font-normal"
            >
              {renderBullet(bullet.text, bullet.highlights)}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
