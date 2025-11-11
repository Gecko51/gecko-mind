import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Bot } from "lucide-react";
import heroImage from "@/assets/hero-particles.jpg";
import supabaseLogo from "@/assets/supabase.png";
import n8nLogo from "@/assets/n8n-logo.png";
import airtableLogo from "@/assets/airtable-logo.png";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold">Solutions IA</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-snug">Le système IA
qui pilote votre marketing potentiel<span className="text-white">Le système IA</span>
            <br />
            qui libère votre{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              potentiel
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-white">Un système de tunnel de vente IA ancré sur vos résultats commerciaux.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" onClick={() => {
            document.getElementById('ai-agents')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>Découvrir le système</Button>
            
          </div>

        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{
      animationDelay: '1s'
    }} />
    </section>;
};