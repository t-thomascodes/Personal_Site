import Card from '@/components/ui/card'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-10 flex justify-center max-md:py-20 max-md:px-6">
      <Card className="p-14 max-w-[540px] w-full text-center max-md:p-10" rise>
        <h2 className="font-serif text-3xl font-normal italic mb-4 tracking-tight">
          let's talk
        </h2>
        <p className="text-[var(--dim)] text-[0.82rem] leading-[1.9]">
          building something interesting? have a deal worth closing? want to argue about whether founders need to code? i'm in.
        </p>
        <div className="flex justify-center gap-10 mt-8 text-[0.72rem] tracking-[0.1em]">
          <a href="mailto:tonythomas.dev@gmail.com" className="text-[var(--dim)] hover:text-[var(--text)] hover:opacity-100">email</a>
          <a href="https://linkedin.com/in/tony-thomas-dev" target="_blank" className="text-[var(--dim)] hover:text-[var(--text)] hover:opacity-100">linkedin</a>
          <a href="https://github.com/t-thomascodes" target="_blank" className="text-[var(--dim)] hover:text-[var(--text)] hover:opacity-100">github</a>
        </div>
      </Card>
    </section>
  )
}
