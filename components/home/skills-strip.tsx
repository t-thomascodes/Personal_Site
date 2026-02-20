import Card from '@/components/ui/card'

const skillGroups = [
  {
    label: 'languages',
    items: ['python', 'typescript', 'javascript', 'sql', 'java', 'c', 'html/css'],
  },
  {
    label: 'frameworks & libraries',
    items: ['langgraph', 'flask', 'node.js', 'next.js', 'react', 'graphql', 'pandas', 'pytorch', 'd3.js'],
  },
  {
    label: 'tools & platforms',
    items: ['git', 'supabase', 'gcp', 'aws', 'power bi', 'postgresql', 'firebase'],
  },
]

export default function SkillsStrip() {
  return (
    <Card className="p-12 max-w-[1100px] mx-auto my-12 grid grid-cols-[120px_1fr] gap-12 max-md:grid-cols-1 max-md:gap-4 max-md:p-10 max-md:mx-6">
      <div className="text-[0.65rem] tracking-[0.25em] text-[var(--faint)] pt-1">skills</div>
      <div className="flex flex-col gap-5">
        {skillGroups.map(group => (
          <div key={group.label}>
            <div className="text-[0.7rem] text-[var(--dim)] mb-2 tracking-wide">{group.label}</div>
            <div className="flex flex-wrap gap-2">
              {group.items.map(item => (
                <span
                  key={item}
                  className="text-[0.68rem] text-[var(--text)] tracking-wide border border-[var(--faint)] px-3 py-1 hover:bg-white/5 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
