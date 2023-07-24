import Image from 'next/image'
import Hero from "@/components/hero";
import WorkExperience from "@/components/WorkExperiences";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
<>
      <Hero />
        <WorkExperience />
        <Skills/>
    <Project/>
  <ContactMe/>
</>
  )
}
