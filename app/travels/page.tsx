import Card from '@/components/ui/card'
import SectionLabel from '@/components/ui/section-label'

export default function TravelsPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-10 max-w-[1100px] mx-auto max-md:px-6">
      <div className="mb-12 rise">
        <SectionLabel>travels</SectionLabel>
        <h1 className="font-serif text-4xl font-normal italic tracking-tight">
          seven countries & counting
        </h1>
      </div>

      {/* TODO: Interactive map component */}
      {/* Consider: react-simple-maps, mapbox-gl, or d3-geo */}
      {/* Sanity schema: travel-entry with location, photos, story, dates */}

      <Card className="p-10 rise">
        <p className="text-[var(--dim)] text-[0.82rem] leading-[1.9]">
          an interactive map of everywhere i've lived and traveled. coming soon.
        </p>
      </Card>
    </section>
  )
}
