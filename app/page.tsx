import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import WorkExperience from '@/components/home/work-experience'
import Projects from '@/components/home/projects'
import SkillsStrip from '@/components/home/skills-strip'
import Contact from '@/components/home/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <SkillsStrip />
      <Contact />
    </>
  )
}
