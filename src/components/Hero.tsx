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
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg animate-glow" />
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
              Planifier un appel avec Guillaume
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">Approche disciplinée de l'hyperautomation</p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background" />
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