import Card from '@/components/ui/card'

// TODO: Replace with Sanity query
// import { client } from '@/lib/sanity/client'
// import { postBySlugQuery } from '@/lib/sanity/queries'

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <section className="min-h-screen pt-32 pb-20 px-10 max-w-[800px] mx-auto max-md:px-6">
      <Card className="p-14 max-md:p-10 rise">
        <p className="text-[var(--dim)] text-sm">post: {params.slug}</p>
        {/* Render Sanity portable text content here */}
      </Card>
    </section>
  )
}
