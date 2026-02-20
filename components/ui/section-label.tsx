interface SectionLabelProps {
  children: React.ReactNode
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="text-[0.65rem] tracking-[0.25em] text-[var(--faint)] mb-8 flex items-center gap-4 before:content-[''] before:w-5 before:h-px before:bg-[var(--faint)]">
      {children}
    </div>
  )
}
