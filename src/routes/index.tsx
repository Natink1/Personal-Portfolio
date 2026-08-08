import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GitHubActivity from "@/components/GitHubActivity";
import DesignLab from "@/components/DesignLab";
import ScrollReveal from "@/components/ScrollReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Natnael Deribe — Laravel Backend Developer & IT Systems Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Natnael Deribe — Laravel backend developer, IT systems specialist and creative designer based in Addis Ababa.",
      },
      { property: "og:title", content: "Natnael Deribe — Portfolio" },
      {
        property: "og:description",
        content:
          "Backend systems with Laravel, dependable IT infrastructure, and clean visual identities.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <ScrollReveal />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <GitHubActivity />
      <Works />
      <DesignLab />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
