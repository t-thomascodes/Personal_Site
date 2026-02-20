import SectionLabel from '@/components/ui/section-label'
import ProjectCard from './project-card'

const projects = [
  {
    name: 'memento',
    meta: 'tartanhacks 2026 · 6th / 1,050+ hackers · digital kiln prize',
    blurb: 'voice-first knowledge graph. record a thought, and the system transcribes via whisper, extracts entities with llm-powered clustering, embeds with pgvector, and renders an interactive d3.js force-directed graph of your own thinking. includes a rag-powered streaming chat interface to interrogate your notes and surface contradictions.',
    tags: ['next.js', 'typescript', 'supabase', 'pgvector', 'whisper', 'd3.js', 'gcp'],
    featured: true,
    stats: [
      { value: '6th', label: 'out of 1,050+' },
      { value: '36h', label: 'built in a weekend' },
      { value: '5+', label: 'ai pipeline stages' },
      { value: '⬡', label: 'digital kiln prize' },
    ],
  },
  {
    name: 'video → remotion pipeline',
    meta: 'python · gemini flash · remotion · typescript',
    blurb: 'automated pipeline converting videos into remotion composition scaffolds. processes frames through gemini flash multimodal api and generates structured json templates with scene breakdowns, timing data, and asset specs. enables non-technical users to reverse-engineer video into editable react projects.',
    tags: ['python', 'gemini', 'remotion', 'typescript'],
  },
  {
    name: 'telegram bot ecosystem',
    meta: 'personal system · python · postgresql',
    blurb: 'three bots forming a personal operations system — task tracking with postgresql persistence, morning habit accountability, and a conversational ai that reflects on patterns across all stored data.',
    tags: ['python', 'postgresql', 'telegram api'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-10 max-w-[1100px] mx-auto max-md:px-6">
      <div className="mb-12">
        <SectionLabel>projects</SectionLabel>
        <h2 className="font-serif text-3xl font-normal italic tracking-tight">
          things i've built
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {projects.map(project => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  )
}
