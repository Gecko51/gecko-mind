import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Target, Users, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import arrowIcon from "@/assets/arrow-icon.png";
import clockIcon from "@/assets/clock-icon.png";
import tickIcon from "@/assets/tick-icon.png";
const benefits = [{
  icon: Target,
  iconImage: tickIcon,
  title: "Réduction des opérations manuelles",
  description: "Gestion des devis et factures, relances, onboarding de clients ou collaborateurs, reporting"
}, {
  icon: Zap,
  iconImage: arrowIcon,
  title: "Accéleration des cycles",
  description: "Prospection intelligente, synchronisation de données entre vos outils, animation des réseaux sociaux"
}, {
  icon: Users,
  iconImage: clockIcon,
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
  return <section className="pt-20 pb-10 bg-gradient-to-br from-[#ff9b7e] via-[#ffb89e] to-[#ffe8d6]">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Automatisez l'invisible,
            </span>{" "}
            amplifiez l'essentiel.
          </h2>
          
          <p className="text-lg max-w-4xl mx-auto leading-relaxed text-gray-800">Vos équipes perdent jusqu'à 40% de leur temps sur des tâches sans valeur ajoutée. <br />Transformons ces heures perdues en opportunités de croissance avec des solutions d'automatisation qui s'adaptent parfaitement à votre métier.</p>
        </div>

        <div ref={cardsRef} className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return <Card key={index} className="relative p-8 bg-gradient-card border-border/50 backdrop-blur-sm group hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  <img src={benefit.iconImage} alt="Arrow icon" className="w-12 h-12 object-contain" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="leading-relaxed text-gray-700">{benefit.description}</p>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>;
        })}
        </div>

        
      </div>
    </section>;
};