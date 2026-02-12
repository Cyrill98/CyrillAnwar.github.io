import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import ScrollReveal from "./components/helper/scroll-reveal";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <ScrollReveal variant="fadeUp" duration={0.7}>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" duration={0.6} delay={0.1}>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal variant="fadeLeft" duration={0.6}>
        <Experience />
      </ScrollReveal>
      <ScrollReveal variant="scaleUp" duration={0.6}>
        <Skills />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" duration={0.6}>
        <Projects />
      </ScrollReveal>
      <ScrollReveal variant="fadeRight" duration={0.6}>
        <Education />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" duration={0.6}>
        <Blog blogs={blogs} />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" duration={0.6}>
        <ContactSection />
      </ScrollReveal>
    </>
  )
};