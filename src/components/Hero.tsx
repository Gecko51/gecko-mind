import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-particles.jpg";

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
            <Sparkles className="w-4 h-4 text-primary animate-glow" />
            <span className="text-sm font-medium">Solutions IA sur-mesure</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              L'automatisation
            </span>
            <br />
            qui libère votre{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                potentiel
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 to-secondary/5 blur-lg animate-glow" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Gecko Design conçoit et déploie des workflows sur-mesure pour automatiser vos processus 
            répétitifs grâce à N8N. Une approche souveraine et conforme RGPD qui libère 
            <span className="text-primary font-semibold"> 60-70% de votre temps</span> pour les tâches à forte valeur ajoutée.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="group">
              <Zap className="w-5 h-5 group-hover:animate-float" />
              Découvrir nos automatisations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-glow" size="xl">
              Contactez Guillaume
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">Approche disciplinée de l'hyperautomation</p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-[#3ECF8E] rounded-full border-2 border-background flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.362 9.354H12.638C10.267 9.354 8.824 6.915 10.015 4.848L15.378 -3.654C15.826 -4.438 16.956 -4.438 17.404 -3.654L22.767 4.848C23.958 6.915 22.515 9.354 20.144 9.354H21.362Z" fill="white"/>
                    <path d="M2.638 14.646H11.362C13.733 14.646 15.176 17.085 13.985 19.152L8.622 27.654C8.174 28.438 7.044 28.438 6.596 27.654L1.233 19.152C0.042 17.085 1.485 14.646 3.856 14.646H2.638Z" fill="white"/>
                  </svg>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-secondary to-primary rounded-full border-2 border-background" />
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-background" />
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