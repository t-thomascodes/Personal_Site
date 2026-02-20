import Card from '@/components/ui/card'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 relative">
      <Card className="p-14 max-w-[540px] w-full max-md:p-10" rise>
        <h1 className="font-serif text-[2.6rem] font-normal italic tracking-tight mb-2 max-md:text-[2rem]">
          tony thomas
        </h1>
        <div className="text-[0.72rem] text-[var(--faint)] tracking-[0.15em] mb-7">
          cs & business · northeastern · honors
        </div>
        <div className="w-10 h-px bg-[var(--faint)] mx-auto mb-7" />
        <p className="text-[var(--dim)] text-[0.82rem] leading-[1.9] max-w-[380px] mx-auto">
          seven countries. three continents. one obsession: building things that move people.
        </p>
        <div className="flex justify-center gap-8 mt-8 text-[0.72rem] tracking-[0.1em]">
          <a href="https://github.com/t-thomascodes" target="_blank" className="text-[var(--dim)] hover:text-[var(--text)] hover:opacity-100">github</a>
          <a href="https://linkedin.com/in/tony-thomas-dev" target="_blank" className="text-[var(--dim)] hover:text-[var(--text)] hover:opacity-100">linkedin</a>
          <a href="mailto:tonythomas.dev@gmail.com" className="text-[var(--dim)] hover:text-[var(--text)] hover:opacity-100">email</a>
          <a href="#" className="text-[var(--dim)] hover:text-[var(--text)] hover:opacity-100">resume</a>
        </div>
      </Card>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[0.65rem] tracking-[0.2em] text-[var(--faint)] animate-[drift_2s_ease-in-out_infinite]">
        ↓ scroll
      </div>
    </section>
  )
}
