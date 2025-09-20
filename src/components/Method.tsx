import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import targetIcon from "@/assets/target-icon.png";
import cubeIcon from "@/assets/cube-icon.png";
import chevronIcon from "@/assets/chevron-icon.png";
import exchangeIcon from "@/assets/exchange-icon.png";

const steps = [
  {
    icon: targetIcon,
    title: "Audit de vos process & data",
    description: "pour identifier les points de douleur",
    step: "01"
  },
  {
    icon: cubeIcon,
    title: "Prototype fonctionnel sous 10 jours",
    description: "pour que vous constatiez les bénéfices rapidement",
    step: "02"
  },
  {
    icon: chevronIcon,
    title: "Déploiement progressif + micro-formations",
    description: "pour une adoption en douceur",
    step: "03"
  },
  {
    icon: exchangeIcon,
    title: "Amélioration continue",
    description: "basée sur vos KPI et retours, pour une optimisation constante",
    step: "04"
  }
];

export const Method = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.2 });

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
            <span className="text-sm font-medium">Ma méthode</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Une approche
            </span>{" "}
            méthodique et éprouvée
          </h2>
          
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Un processus en 4 étapes pour garantir le succès de votre transformation digitale, 
            de l'audit initial à l'optimisation continue.
          </p>
        </div>

        <div 
          ref={stepsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
            stepsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {steps.map((step, index) => {
            return (
              <Card 
                key={index} 
                className={`relative p-6 bg-gradient-card border-border/50 backdrop-blur-sm group hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-2 ${
                  stepsVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">{step.step}</span>
                </div>

                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <img src={step.icon} alt={step.title} className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-foreground leading-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};