import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import ScrollToTop from "@/components/scroll-to-top";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
      <ThemeToggle />
      <ScrollToTop />
    </main>
  )
}
