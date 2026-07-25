import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Solutions from "@/components/Solutions";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import AnimationController from "@/components/AnimationController";
import ExperienceEnhancer from "@/components/ExperienceEnhancer";
import FAQ from "@/components/FAQ";

export default function Home() {
  return <>
  <AnimationController />
  <ExperienceEnhancer />
  <Navbar />
  <main>
    <Hero />
    <Clients />
    <Solutions />
    <WhyChooseUs />
    <Stats />
    <Process />
    <Testimonials />
    <FAQ />
    <LeadForm />
    </main>
    <Footer />
    </>;
}
