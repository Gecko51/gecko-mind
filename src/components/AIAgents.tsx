import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Users, TrendingUp, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import linkIcon from "@/assets/link-icon.png";
import goalIcon from "@/assets/goal-icon.png";
import starIcon from "@/assets/star-icon.png";
const agents = [{
  name: "Gecko Hub",
  icon: Users,
  image: linkIcon,
  description: "De l'onboarding à la relance, transformez votre charge mentale en flux de travail automatisé et économisez 10 heures par semaine",
  color: "text-blue-400",
  tasks: ["Onboarding client automatisé", "CRM sur-mesure", "Synchronisation du CRM et des relances", "Gestion de la boite mail professionnelle", "Synchronisation de l'agenda"]
}, {
  name: "Gecko Core",
  icon: TrendingUp,
  image: goalIcon,
  description: "La stratégie qui génère des leads qualifiés sans dépenser en publicités",
  color: "text-purple-400",
  tasks: ["Recherche ciblée de leads", "Outreach automatisé", "Séquences de prospection prêtes à l'emploi", "Lead magnet avec formulaire d'inscription", "Templates sur-mesure, icebreakers et relances"]
}, {
  name: "Gecko Flow",
  icon: Bot,
  image: starIcon,
  description: "Une solution qui vous fera économiser des heures chaque semaine sur la création de contenu",
  color: "text-pink-400",
  tasks: ["Recherche des tendances et hooks viraux", "Gestion complète du calendrier éditorial", "Création de contenu automatisé", "Interface de suivi et de gestion des publications", "Accompagnement stratégique pour mener vers l'offre"]
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

        <div ref={cardsRef} className={`grid lg:grid-cols-3 gap-8 transition-all duration-1000 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {agents.map((agent, index) => {
          const IconComponent = agent.icon;
          return <Card key={index} className={`relative p-8 bg-gradient-card border-border/50 backdrop-blur-sm group hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-2 ${cardsVisible ? "animate-fade-in" : ""}`} style={{
            animationDelay: `${index * 200}ms`
          }}>
                <div className="flex flex-col items-center text-center">
                  {agent.image ? <img src={agent.image} alt={agent.name} className="w-12 h-12 mb-6 object-cover" /> : <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 ${agent.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>}

                  <h3 className="text-2xl font-bold mb-4 text-white">{agent.name}</h3>

                  <p className="text-white leading-relaxed mb-6">{agent.description}</p>

                  {agent.tasks.length > 0 && <div className="space-y-2 mt-4 w-full">
                      {agent.tasks.map((task, taskIndex) => <div key={taskIndex} className="flex items-center gap-2 text-left">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-white/80">{task}</span>
                        </div>)}
                    </div>}

                  {index === 0 && <div className="mt-6 pt-6 border-t border-border/30">
                      <p className="text-white/60 text-lg">
                        Valeur : <span className="font-bold">2950€</span>
                      </p>
                    </div>}

                  {index === 1 && <div className="mt-6 pt-6 border-t border-border/30">
                      <p className="text-white/60 text-lg">
                        Valeur : <span className="font-bold">1495€</span>
                      </p>
                    </div>}

                  {index === 2 && <div className="mt-6 pt-6 border-t border-border/30">
                      <p className="text-white/60 text-lg">
                        Valeur : <span className="font-bold">1195€</span>
                      </p>
                    </div>}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>;
        })}
        </div>

        <div className="text-center mt-12">
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ce que j'installe pour vous :</h3>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Installation et configuration complète de N8N</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>8 workflows N8N pour votre tunnel de vente directement connecté à vos outils</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>1 CRM sur-mesure avec interface dynamique</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>1 interface de gestion et de suivi</span>
              </li>
            </ul>
          </div>

          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">En bonus :</h3>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Un espace personnel Notion contenant tous les processus détaillés et les prompts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Un groupe privé WhatsApp pour des conseils illimités pendant 1 mois</span>
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

          <p className="text-2xl font-bold text-white">
            Tarif du système complet : <span className="text-primary">2795 €</span> <span className="text-white/60">(au lieu de 5640 €)</span>
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