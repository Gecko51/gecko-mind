import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-particles.jpg";
import supabaseLogo from "@/assets/supabase.png";
import n8nLogo from "@/assets/n8n-logo.png";
import airtableLogo from "@/assets/airtable-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-medium">Solutions IA sur-mesure</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-snug">
            <span className="text-white">
              L'automatisation
            </span>
            <br />
            qui libère votre{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              potentiel
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            Conception et déploiement de workflows sur-mesure pour automatiser vos processus répétitifs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              <Zap className="w-5 h-5 group-hover:animate-float" />
              Découvrir nos automatisations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-glow" size="lg">
              Contactez Guillaume
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex flex-col items-center gap-4">
            
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-black rounded-full border-2 border-background flex items-center justify-center p-1">
                  <img 
                    src={supabaseLogo} 
                    alt="Supabase" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-8 h-8 bg-black rounded-full border-2 border-background flex items-center justify-center p-1">
                  <img 
                    src={n8nLogo} 
                    alt="n8n" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-8 h-8 bg-black rounded-full border-2 border-background flex items-center justify-center p-1">
                  <img 
                    src={airtableLogo} 
                    alt="Airtable" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span className="text-sm font-medium text-foreground">+400 connecteurs disponibles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};