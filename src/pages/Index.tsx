import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { ServiceDetails } from "@/components/ServiceDetails";
import { Method } from "@/components/Method";
import { Results } from "@/components/Results";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Mission />
        <ServiceDetails />
        <Method />
        <Results />
        <Services />
        <Contact />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
