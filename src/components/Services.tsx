import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import supabaseLogo from "@/assets/supabase.png";
import n8nLogo from "@/assets/n8n-logo.png";
import airtableLogo from "@/assets/airtable-logo.png";
import mcpLogo from "@/assets/mcp-logo.png";
import codeIcon from "@/assets/code-icon.png";
import growthIcon from "@/assets/growth-icon.png";
import securityIcon from "@/assets/security-icon.png";
import databaseIcon from "@/assets/database-icon.png";
const services = [{
  iconImage: codeIcon,
  title: "Orchestration complète",
  description: "Processus de bout en bout grâce à N8N avec connecteurs, logique avancée et exécutions conditionnelles pour des workflows robustes.",
  features: ["Automatisation des flux de données", "Notifications intelligentes", "Intégrations inter-outils"]
}, {
  iconImage: growthIcon,
  title: "Accélération marketing",
  description: "Séquences multi-outils (CRM, emailing, messagerie, stockage) intégrées dans un seul pipeline automatisé.",
  features: ["Workflows commerciaux", "Lead nurturing", "Attribution automatique"]
}, {
  iconImage: securityIcon,
  title: "Souveraineté RGPD",
  description: "Favorisée par l'auto-hébergement et la minimisation des transferts vers des tiers, avec traçabilité et contrôle renforcés.",
  features: ["Auto-hébergement sécurisé", "Conformité garantie", "Contrôle total des données"]
}, {
  iconImage: databaseIcon,
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
        

        <div ref={cardsRef} className={`grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 transition-all duration-1000 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {services.map((service, index) => {
          return <Card key={index} className={`relative p-8 bg-gradient-card border-border/50 backdrop-blur-sm group hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-2 ${cardsVisible ? 'animate-fade-in' : ''}`} style={{
            animationDelay: `${index * 200}ms`
          }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img src={service.iconImage} alt={service.title} className="w-12 h-12 opacity-80" />
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