import StudioOverview from "./components/StudioOverview";
import ProjectSummary from "./components/ProjectSummary";
import Hero from "./components/Hero";
import Deliverables from "./components/Deliverables";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import ArchitectComparison from "./components/ArchitectComparison";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectSummary />
      <Portfolio />
      <ArchitectComparison />
      <Deliverables />
      <Testimonials />
      <Services />
      <StudioOverview />
      <Process />
      <Contact />
      <FAQ />
    </>
  );
}
