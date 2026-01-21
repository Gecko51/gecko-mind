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
              Ne devinez plus. Obtenez votre{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                feuille de route IA
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-white">L'automatisation peut sembler complexe. En 30 minutes, nous transformons ce flou en un plan d'action clair, chiffré et personnalisé.</p>
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
                    <h3 className="text-xl font-semibold text-foreground">Session stratégique de 30 min offerte</h3>
                    <p className="text-primary font-medium">Diagnostique complet de votre écosystème</p>
                  </div>
                </div>

                

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    <span style={{
                    color: '#ababab'
                  }}>Audit de vos processus actuels (sans filtre)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    <span style={{
                    color: '#ababab'
                  }}>Identification des tâches à automatiser immédiatement</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    <span style={{
                    color: '#ababab'
                  }}>Estimation chiffrée de vos économies potentielles</span>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full group" onClick={() => window.open('https://cal.com/guillaume-gay/30min', '_blank')}>
                  Bloquer mon créneau stratégique
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