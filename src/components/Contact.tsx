import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Check, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import clipboardIcon from "@/assets/clipboard-icon.png";
import emailIcon from "@/assets/email-icon.png";
import commentIcon from "@/assets/comment-icon.png";
export const Contact = () => {
  const {
    ref: titleRef,
    isVisible: titleVisible
  } = useScrollAnimation();
  const {
    ref: cardsRef,
    isVisible: cardsVisible
  } = useScrollAnimation({
    threshold: 0.2
  });
  return <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Prêt à{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                transformer
              </span>{" "}
              votre productivité ?
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-white">Discutons de vos besoins d'automatisation et découvrons ensemble comment libérer le potentiel de votre activité avec un système IA.</p>
          </div>

          <div ref={cardsRef} className={`flex justify-center transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Main CTA Card */}
            <Card className="p-8 bg-gradient-card border-border/50 backdrop-blur-sm relative overflow-hidden group max-w-2xl w-full">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img src={clipboardIcon} alt="Planifier" className="w-12 h-12 opacity-80 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Planifier un rendez-vous</h3>
                    <p className="text-primary font-medium">Découverte gratuite - 30 min</p>
                  </div>
                </div>

                <p style={{
                color: '#ababab'
              }} className="mb-6">
                  Échangeons sur vos processus actuels et identifions les opportunités 
                  d'automatisation les plus impactantes pour votre business.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span style={{
                    color: '#ababab'
                  }}>Audit de vos processus métier</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span style={{
                    color: '#ababab'
                  }}>Identification des gains de productivité</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span style={{
                    color: '#ababab'
                  }}>Roadmap d'automatisation personnalisée</span>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full group" onClick={() => window.open('https://cal.com/guillaume-gay/30min', '_blank')}>
                  Demander une démonstration
                </Button>
              </div>

              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          </div>
        </div>
      </div>
    </section>;
};