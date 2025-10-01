import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { ServiceDetails } from "@/components/ServiceDetails";
import { Method } from "@/components/Method";
import { Results } from "@/components/Results";
import { Services } from "@/components/Services";
import { AIAgents } from "@/components/AIAgents";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Mission />
        <ServiceDetails />
        <Results />
        <Method />
        <Services />
        <AIAgents />
        <About />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
