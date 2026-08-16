import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GitHubActivity from "@/components/GitHubActivity";
import ScrollReveal from "@/components/ScrollReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Natnael Deribe — Backend Developer & IT Systems Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Natnael Deribe — backend developer, IT systems specialist and creative designer based in Addis Ababa.",
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
      <Skills />
      <GitHubActivity />
      <Works />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
