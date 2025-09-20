import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Target, Users, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Target,
    title: "Réduction des opérations manuelles",
    description: "Gestion des devis et factures, relances, onboarding de clients ou collaborateurs, reporting",
  },
  {
    icon: Zap,
    title: "Accélération des cycles",
    description: "Prospection intelligente, synchronisation de données entre vos outils, animation des réseaux sociaux",
  },
  {
    icon: Users,
    title: "Gain de temps précieux",
    description: "Des heures chaque semaine à réinvestir dans la stratégie, l'innovation et la satisfaction client",
  },
];

export const ServiceDetails = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Mon Service</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              L'automatisation
            </span>{" "}
            qui libère votre potentiel
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Je conçois et déploie des systèmes d'automatisation sur-mesure qui prennent en charge vos processus 
            les plus chronophages. Mon objectif est de transformer les tâches répétitives en un avantage stratégique.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
            cardsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className={`p-8 bg-gradient-card border-border/50 backdrop-blur-sm group hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-2 ${
                  cardsVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:animate-glow">
                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            );
          })}
        </div>

        <div 
          ref={ctaRef}
          className={`text-center transition-all duration-700 ${
            ctaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Card className="inline-block p-8 bg-gradient-card border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <BarChart3 className="w-8 h-8 text-primary" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-foreground">Écosystème digital 24/7</h3>
                <p className="text-muted-foreground">Ensemble, nous construisons un écosystème digital qui travaille pour vous, de manière fiable et sécurisée.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};