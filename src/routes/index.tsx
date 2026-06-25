import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Works />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
