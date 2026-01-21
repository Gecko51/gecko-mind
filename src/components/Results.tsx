import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Clock, Users, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import topArrowIcon from "@/assets/top-arrow-icon.png";
import favouriteIcon from "@/assets/favourite-icon.png";
import boltIcon from "@/assets/bolt-icon.png";
const metrics = [{
  icon: TrendingUp,
  iconImage: boltIcon,
  title: "Efficacité opérationnelle",
  description: "Augmentation significative de l'efficacité opérationnelle",
  metric: "+70%",
  detail: "Moins de tâches manuelles sur votre pipeline"
}, {
  icon: DollarSign,
  iconImage: topArrowIcon,
  title: "Réduction des coûts",
  description: "Réduction des coûts et optimisation des ressources",
  metric: "ROI",
  detail: "Diminution des coûts opérationnels liés à la main d'œuvre"
}, {
  icon: Clock,
  iconImage: favouriteIcon,
  title: "Réactivité client",
  description: "3 fois plus de réactivité sur les interactions client grâce à l'authenticité de la personnalisation",
  metric: "3x",
  detail: "Augmentation de la fidélité client et de la satisfaction"
}];
export const Results = () => {
  const {
    ref: titleRef,
    isVisible: titleVisible
  } = useScrollAnimation();
  const {
    ref: metricsRef,
    isVisible: metricsVisible
  } = useScrollAnimation({
    threshold: 0.2
  });
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useScrollAnimation();
  return <section className="pt-20 pb-10 bg-black">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Bénéfices mesurables</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Des résultats
            </span>{" "}
            concrets et mesurables
          </h2>
          
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            L'automatisation n'est pas qu'une promesse, c'est une réalité mesurable qui transforme 
            votre entreprise avec des impacts quantifiables dès les premières semaines.
          </p>
        </div>

        <div ref={metricsRef} className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return <Card key={index} className={`relative p-8 bg-gradient-card border-border/50 backdrop-blur-sm group hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-2 ${metricsVisible ? 'animate-fade-in' : ''}`} style={{
            animationDelay: `${index * 200}ms`
          }}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img src={metric.iconImage} alt={metric.title} className="w-12 h-12 object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-primary mb-1">{metric.metric}</div>
                    <h3 className="text-lg font-semibold text-foreground">{metric.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {metric.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-primary">
                  <ArrowRight className="w-4 h-4" />
                  <span>{metric.detail}</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>;
        })}
        </div>

        <div ref={ctaRef} className={`text-center transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
        </div>
      </div>
    </section>;
};