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
  try {
    // Cache for an hour so the page isn't blocked on dev.to for every build/request.
    const res = await fetch(
      `https://dev.to/api/articles?username=${personalData.devUsername}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const data = await res.json();

    return data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  } catch {
    // Blog is non-critical: render the rest of the page if dev.to is unavailable.
    return [];
  }
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