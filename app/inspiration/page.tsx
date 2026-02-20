import Card from '@/components/ui/card'
import SectionLabel from '@/components/ui/section-label'

export default function InspirationPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-10 max-w-[1100px] mx-auto max-md:px-6">
      <div className="mb-12 rise">
        <SectionLabel>inspiration</SectionLabel>
        <h1 className="font-serif text-4xl font-normal italic tracking-tight">
          art & philosophy
        </h1>
      </div>

      {/* TODO: Masonry grid of images, quotes, and references */}
      {/* Sanity schema: inspiration with type (art/quote/book/film), */}
      {/* image, attribution, personal note, tags */}

      <Card className="p-10 rise">
        <p className="text-[var(--dim)] text-[0.82rem] leading-[1.9]">
          a collection of the art, ideas, and thinkers that shape how i see the world. coming soon.
        </p>
      </Card>
    </section>
  )
}
