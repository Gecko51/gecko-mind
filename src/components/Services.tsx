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
      
    </section>;
};