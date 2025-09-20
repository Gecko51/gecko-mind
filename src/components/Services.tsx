import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Workflow, Shield, TrendingUp, Database, ArrowRight, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import supabaseLogo from "@/assets/supabase.png";
import n8nLogo from "@/assets/n8n-logo.png";
import airtableLogo from "@/assets/airtable-logo.png";
import mcpLogo from "@/assets/mcp-logo.png";
const services = [{
  icon: Workflow,
  title: "Orchestration complète",
  description: "Processus de bout en bout grâce à N8N avec connecteurs, logique avancée et exécutions conditionnelles pour des workflows robustes.",
  features: ["Automatisation des flux de données", "Notifications intelligentes", "Intégrations inter-outils"]
}, {
  icon: TrendingUp,
  title: "Accélération marketing",
  description: "Séquences multi-outils (CRM, emailing, messagerie, stockage) intégrées dans un seul pipeline automatisé.",
  features: ["Workflows commerciaux", "Lead nurturing", "Attribution automatique"]
}, {
  icon: Shield,
  title: "Souveraineté RGPD",
  description: "Favorisée par l'auto-hébergement et la minimisation des transferts vers des tiers, avec traçabilité et contrôle renforcés.",
  features: ["Auto-hébergement sécurisé", "Conformité garantie", "Contrôle total des données"]
}, {
  icon: Database,
  title: "Qualité des données",
  description: "Amélioration par la standardisation et le monitoring continus, dans une logique d'hyperautomation.",
  features: ["Standardisation automatique", "Monitoring en temps réel", "Gouvernance des données"]
}];
export const Services = () => {
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
  return <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Une expertise
            </span>{" "}
            au service de votre productivité
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions d'automatisation pensées pour libérer votre équipe des tâches répétitives 
            et la recentrer sur les activités à forte valeur ajoutée.
          </p>
          
          {/* Social proof */}
          <div className="flex flex-col items-center gap-4 mt-12">
            <div className="flex items-center gap-2">
              <div className="flex gap-4">
                <img src={n8nLogo} alt="n8n" className="w-7 h-7 object-contain" />
                <img src={supabaseLogo} alt="Supabase" className="w-7 h-7 object-contain" />
                <img src={airtableLogo} alt="Airtable" className="w-7 h-7 object-contain" />
                <img src={mcpLogo} alt="MCP" className="w-7 h-7 object-contain" />
              </div>
              <span className="text-lg font-medium text-foreground drop-shadow-lg">+400 connecteurs disponibles</span>
            </div>
          </div>
        </div>

        <div ref={cardsRef} className={`grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 transition-all duration-1000 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <Card key={index} className={`relative p-8 bg-gradient-card border-border/50 backdrop-blur-sm group hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-2 ${cardsVisible ? 'animate-fade-in' : ''}`} style={{
            animationDelay: `${index * 200}ms`
          }}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>)}
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>;
        })}
        </div>

        {/* Call to action */}
        
      </div>
    </section>;
};