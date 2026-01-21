import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Users, TrendingUp, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import linkIcon from "@/assets/link-icon.png";
import goalIcon from "@/assets/goal-icon.png";
import starIcon from "@/assets/star-icon.png";
const agents = [{
  name: "Gecko Core",
  icon: TrendingUp,
  image: goalIcon,
  description: "La stratégie qui génère des leads qualifiés sans dépenser en publicités",
  color: "text-purple-400",
  tasks: ["Onboarding leads/client automatisé", "CRM sur-mesure", "Synchronisation de l'agenda", "Recherche ciblée de leads", "Outreach automatisé", "Setting & lead nurturing", "Gestion complète du calendrier éditorial", "Création de contenu automatisé", "Accompagnement stratégique pour mener vers l'offre"]
}];
export const AIAgents = () => {
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
  return <section id="ai-agents" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">Le système</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              L'offre packagée
            </span>
          </h2>

          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Multipliez vos leads qualifiés et réduisez les charges de travail répétitives de 60%
          </p>
        </div>

        <div ref={cardsRef} className={`flex justify-center transition-all duration-1000 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {agents.map((agent, index) => {
          const IconComponent = agent.icon;
          return <Card key={index} className={`relative p-8 bg-gradient-card border-border/50 backdrop-blur-sm group hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-2 max-w-md ${cardsVisible ? "animate-fade-in" : ""}`} style={{
            animationDelay: `${index * 200}ms`
          }}>
                <div className="flex flex-col items-center text-center">
                  {agent.image ? <img src={agent.image} alt={agent.name} className="w-12 h-12 mb-6 object-cover" /> : <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 ${agent.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>}

                  <h3 className="text-2xl font-bold mb-4 text-white">{agent.name}</h3>

                  <p className="text-lg bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-relaxed mb-6">{agent.description}</p>

                  {agent.tasks.length > 0 && <div className="space-y-2 mt-4 w-full">
                      {agent.tasks.map((task, taskIndex) => <div key={taskIndex} className="flex items-center gap-2 text-left">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-white/80">{task}</span>
                        </div>)}
                    </div>}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>;
        })}
        </div>

        <div className="text-center mt-12">
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 pt-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ce que j'installe pour vous :</h3>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Installation et configuration complète de N8N sur un VPS   </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>CRM sur-mesure avec interface dynamique</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
              </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Interface de gestion et de suivi</span>
              </li>
            </ul>
          </div>

          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">En bonus :</h3>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Un espace Notion contenant tous les processus détaillés et les prompts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Un canal Slack privé pour des conseils illimités pendant 1 mois</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>3 calls stratégiques de 45 minutes pour la mise en place du système et la prise en main</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>1 mois de maintenance du système</span>
              </li>
            </ul>
          </div>

          <p className="text-2xl font-bold text-white pt-8">
            Tarif du système complet : <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">2795 €</span> <span className="text-white/60">(au lieu de 5640 €)</span>
          </p>
          <p className="text-white/70 mt-2">paiement en 1x, 2x, 3x avec Klarna</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Button variant="hero" size="lg" onClick={() => window.open('https://buy.stripe.com/dRm9ASfBa9iX7r4887bbG00', '_blank')}>
              J'accède au système
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open('https://cal.com/guillaume-gay/30min', '_blank')}>
              Je veux une formule sur-mesure
            </Button>
          </div>
        </div>
      </div>
    </section>;
};