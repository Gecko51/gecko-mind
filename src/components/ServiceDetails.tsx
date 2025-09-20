import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Target, Users, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const benefits = [{
  icon: Target,
  title: "Réduction des opérations manuelles",
  description: "Gestion des devis et factures, relances, onboarding de clients ou collaborateurs, reporting"
}, {
  icon: Zap,
  title: "Accélération des cycles",
  description: "Prospection intelligente, synchronisation de données entre vos outils, animation des réseaux sociaux"
}, {
  icon: Users,
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
          
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">Vos équipes perdent jusqu'à 40% de leur temps sur des tâches sans valeur ajoutée. <br>Je transforme ces heures perdues en opportunités de croissance avec des solutions d'automatisation qui s'adaptent parfaitement à votre métier.</p>
        </div>

        <div ref={cardsRef} className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return <Card key={index} className={`p-8 bg-gradient-card border-border/50 backdrop-blur-sm group hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-2 ${cardsVisible ? 'animate-fade-in' : ''}`} style={{
            animationDelay: `${index * 200}ms`
          }}>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:animate-glow">
                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>;
        })}
        </div>

        
      </div>
    </section>;
};