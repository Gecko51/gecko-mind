import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Target, Users, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import arrowIcon from "@/assets/arrow-icon.png";
import miningIcon from "@/assets/mining-icon.png";
import tickIcon from "@/assets/tick-icon.png";
const benefits = [{
  icon: Target,
  iconImage: tickIcon,
  title: "Réduction des opérations manuelles",
  description: "Gestion des devis et factures, relances, onboarding de clients ou collaborateurs, reporting"
}, {
  icon: Zap,
  iconImage: miningIcon,
  title: "Accéleration des cycles",
  description: "Prospection intelligente, synchronisation de données entre vos outils, animation des réseaux sociaux"
}, {
  icon: Users,
  iconImage: arrowIcon,
  title: "Gain de temps précieux",
  description: "Des heures chaque semaine à réinvestir dans la stratégie, l'innovation et la satisfaction client"
}];
export const ServiceDetails = () => {
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
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useScrollAnimation();
  return <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Automatisez l'invisible,
            </span>{" "}
            amplifiez l'essentiel.
          </h2>
          
          <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed">Vos équipes perdent jusqu'à 40% de leur temps sur des tâches sans valeur ajoutée. <br />Je transforme ces heures perdues en opportunités de croissance avec des solutions d'automatisation qui s'adaptent parfaitement à votre métier.</p>
        </div>

        <div ref={cardsRef} className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return <Card key={index} className="p-8 bg-gradient-card border-border/50 backdrop-blur-sm">
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  <img src={benefit.iconImage} alt="Arrow icon" className="w-14 h-14" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>;
        })}
        </div>

        
      </div>
    </section>;
};