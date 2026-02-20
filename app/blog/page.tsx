import Card from '@/components/ui/card'
import SectionLabel from '@/components/ui/section-label'

// TODO: Replace with Sanity query
// import { client } from '@/lib/sanity/client'
// import { allPostsQuery } from '@/lib/sanity/queries'

export default function BlogPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-10 max-w-[800px] mx-auto max-md:px-6">
      <div className="mb-12 rise">
        <SectionLabel>blog</SectionLabel>
        <h1 className="font-serif text-4xl font-normal italic tracking-tight">
          thoughts & writing
        </h1>
      </div>

      {/* Placeholder - replace with Sanity posts */}
      <Card className="p-10 rise">
        <p className="text-[var(--dim)] text-[0.82rem] leading-[1.9]">
          coming soon. connect your sanity cms to start publishing.
        </p>
      </Card>
    </section>
  )
}
