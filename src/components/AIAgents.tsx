import { Card } from "@/components/ui/card";
import { Bot, Users, TrendingUp, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import clarkImage from "@/assets/portrait_agent_clark.png";
import liliImage from "@/assets/portrait_agent_lili.png";
import venusImage from "@/assets/portrait_agent_venus.png";
const agents = [{
  name: "Gecko Hub",
  icon: Users,
  image: clarkImage,
  description: "De l'onboarding à la relance, transformez votre charge mentale en flux de travail automatisé et économisez 10 heures par semaine",
  color: "text-blue-400",
  tasks: ["Onboarding client automatisé", "Synchronisation du CRM et des relances", "Gestion de la boite mail professionnelle", "Synchronisation de l'agenda", "Relances automatiques"]
}, {
  name: "Lili",
  icon: TrendingUp,
  image: liliImage,
  description: "Un système qui aide à générer des leads qualifiés sans dépenser en publicités",
  color: "text-purple-400",
  tasks: ["Recherche ciblée de leads", "Outreach LinkedIn automatisé", "Séquences de prospection prêtes à l'emploi", "Templates sur-mesure, icebreakers et relances"]
}, {
  name: "Vénus",
  icon: Bot,
  image: venusImage,
  description: "Un système qui vous fera économiser des heures chaque semaine sur la création de contenu",
  color: "text-pink-400",
  tasks: ["Recherche des tendances et hooks viraux", "Gestion complète du calendrier éditorial", "Création de contenu LinkedIn automatisé", "Interface de suivi et de gestion des interactions"]
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
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">Les systèmes</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Rencontrez nos agents
            </span>{" "}
            <span className="text-white">intelligents</span>
          </h2>
          
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">Multipliez vos leads et réduisez les charges de travail répétitives de 60%</p>
        </div>

        <div ref={cardsRef} className={`grid lg:grid-cols-3 gap-8 transition-all duration-1000 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {agents.map((agent, index) => {
          const IconComponent = agent.icon;
          return <Card key={index} className={`relative p-8 bg-gradient-card border-border/50 backdrop-blur-sm group hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-2 ${cardsVisible ? 'animate-fade-in' : ''}`} style={{
            animationDelay: `${index * 200}ms`
          }}>
                <div className="flex flex-col items-center text-center">
                  {agent.image ? <img src={agent.image} alt={agent.name} className="w-24 h-24 rounded-full mb-6 object-cover" /> : <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 ${agent.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>}
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{agent.name}</h3>
                  
                  <p className="text-white leading-relaxed mb-6">
                    {agent.description}
                  </p>

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
      </div>
    </section>;
};