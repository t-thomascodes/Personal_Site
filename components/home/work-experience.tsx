import SectionLabel from '@/components/ui/section-label'
import RoleCard from './role-card'

const roles = [
  {
    company: 'disrupt × enigma',
    title: 'lead backend developer',
    meta: 'aug 2025 — present · boston, ma',
    tags: ['langgraph', 'python', 'graphql', 'pandas', 'numpy'],
    description: 'partnered with enigma technologies to automate their dataset discovery pipeline for niche, underrepresented smb data.',
    bullets: [
      {
        text: 'built a langgraph-based discovery agent with 4+ custom tools that searches, evaluates, and validates datasets in parallel — identifying 12 viable sources in under 3 minutes',
        highlights: ['langgraph-based discovery agent', '12 viable sources in under 3 minutes'],
      },
      {
        text: 'developed graphql ingestion pipelines with pandas and numpy, applying graph introspection to match new datasets across 27+ required fields in enigma\'s existing ontology',
        highlights: ['graphql ingestion pipelines', '27+ required fields'],
      },
      {
        text: 'automated 3+ stages of the pipeline at the pre-entity resolution stage, expanding data coverage into previously untouched domains',
      },
    ],
  },
  {
    company: 'regeneron pharmaceuticals',
    title: 'process developer co-op',
    meta: 'jan 2025 — aug 2025 · tarrytown, ny',
    tags: ['flask', 'power bi', 'python', 'sql', 'power automate', 'jinja'],
    description: 'built ai agents and analytics systems that drove measurable efficiency gains across operations at one of the world\'s largest biotech companies.',
    bullets: [
      {
        text: 'architected a flask + jinja ai agent that auto-generates confluence documents from raw notes — streamlining lab reports, speaker notes, and documentation across regeneron\'s most-used platform',
        highlights: ['flask + jinja ai agent'],
      },
      {
        text: 'built a power bi dashboard processing 1m+ records in ~15 seconds using power query folding for sql pushdown, automating etl across multiple enterprise data sources',
        highlights: ['power bi dashboard processing 1m+ records in ~15 seconds'],
      },
      {
        text: 'increased continuous improvement tracker adoption by 75% by implementing a power automate reminder system distributed department-wide via outlook',
        highlights: ['75%'],
      },
    ],
  },
  {
    company: 'beanario software',
    title: 'full-stack engineer intern',
    meta: 'aug 2024 — dec 2024 · remote',
    tags: ['node.js', 'firebase', 'rest apis', 'postman'],
    description: 'full-stack development on zolutto.com, a global proptech saas platform for property listings and investor workflows.',
    bullets: [
      {
        text: 'built restful api endpoints in node.js for the content management system with auth middleware and crud operations for secure administrator workflows',
        highlights: ['restful api endpoints'],
      },
      {
        text: 'developed postman test suites validating api functionality and edge cases across firebase backend, ensuring data integrity for property listings',
        highlights: ['firebase backend'],
      },
      {
        text: 'documented legacy codebase architecture and api specifications to improve developer onboarding',
      },
    ],
  },
]

export default function WorkExperience() {
  return (
    <section id="work" className="py-16">
      <div className="px-10 pb-16 max-w-[1100px] mx-auto rise">
        <SectionLabel>experience</SectionLabel>
        <h2 className="font-serif text-3xl font-normal italic tracking-tight">
          where i've shipped
        </h2>
      </div>
      {roles.map(role => (
        <RoleCard key={role.company} {...role} />
      ))}
    </section>
  )
}
