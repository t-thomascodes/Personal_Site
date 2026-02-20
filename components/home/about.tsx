import Card from '@/components/ui/card'
import SectionLabel from '@/components/ui/section-label'

export default function About() {
  return (
    <section id="about" className="py-32 px-10 flex justify-center max-md:py-20 max-md:px-6">
      <Card className="p-14 max-w-[700px] w-full max-md:p-10" rise>
        <SectionLabel>about</SectionLabel>
        <h2 className="font-serif text-2xl font-normal italic mb-6 tracking-tight">
          the salesman who learned to code
        </h2>
        <div className="space-y-4 text-[var(--dim)] text-[0.82rem] leading-[1.9] [&_strong]:text-[var(--text)] [&_strong]:font-normal">
          <p>
            i grew up across <strong>seven countries in central and south america</strong> before
            i ever touched a terminal. that life taught me how to read rooms, adapt instantly,
            and see problems through lenses most engineers never develop.
          </p>
          <p>
            a summer in the bay area introduced me to programming. i realized code was the
            fastest lever for solving problems at scale — not because i wanted to be an engineer,
            but because i wanted to <strong>build and sell things that matter</strong>.
          </p>
          <p>
            now i'm a third-year honors student at northeastern studying cs & business with a
            <strong> 3.8 gpa</strong>. dean's list three years running. i lead dev teams, architect
            ai systems, design data pipelines, and when the moment calls for it — close the deal.
            i've sold cars, cigars, and software. the product changes. the psychology doesn't.
          </p>
        </div>
      </Card>
    </section>
  )
}
