import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Hero } from "@/components/hero/Hero";
import { Agency } from "@/components/sections/Agency";
import { Footprint } from "@/components/sections/Footprint";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { TransitionBand } from "@/components/sections/TransitionBand";
import { Devis } from "@/components/sections/Devis";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Header />
      <main className="flex-1">
        <Hero />
        <Agency />
        <Footprint />
        <ExpertiseSection />
        <Process />
        <Portfolio />
        <Testimonials />
        <TransitionBand />
        <Devis />
      </main>
      <Footer />
    </>
  );
}
