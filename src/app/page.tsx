import Image from 'next/image'
import Hero from "@/components/Home/hero";
import WorkExperience from "@/components/Home/WorkExperiences";
import Skills from "@/components/Home/Skills";
import Project from "@/components/Home/Project";
import ContactMe from "@/components/Home/ContactMe";

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
