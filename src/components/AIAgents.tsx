import { Card } from "@/components/ui/card";
import { Bot, Users, TrendingUp, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import clarkImage from "@/assets/portrait_agent_clark.png";
import liliImage from "@/assets/portrait_agent_lili.png";

const agents = [
  {
    name: "Clark",
    icon: Users,
    image: clarkImage,
    description: "Agent IA chargé de la relation client",
    color: "text-blue-400",
    tasks: [
      "Gestion des emails",
      "Onboarding et mail de bienvenue",
      "Synchronisation du CRM et de l'agenda",
      "Gestion des rappels et relances",
      "Chatbot conversationnel 24/7"
    ]
  },
  {
    name: "Lili",
    icon: TrendingUp,
    image: liliImage,
    description: "Agent IA expert en prospection et en psychologie de vente",
    color: "text-purple-400",
    tasks: [
      "Recherche ciblée de prospects",
      "Analyse psychographique",
      "Script de vente personnalisé",
      "Anticipation des objections"
    ]
  },
  {
    name: "Vénus",
    icon: Bot,
    description: "Agent IA dédié à la création de contenu et à l'analyse des tendances",
    color: "text-pink-400",
    tasks: [
      "Recherche des tendances et hooks viraux",
      "Gestion complète du calendrier éditorial",
      "Création de contenu LinkedIn automatisé",
      "Génération de visuels de haute qualité"
    ]
  }
];

export const AIAgents = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="ai-agents" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">Nos agents IA</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Rencontrez nos agents
            </span>{" "}
            <span className="text-white">intelligents</span>
          </h2>
          
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Une équipe d'agents IA spécialisés pour transformer votre entreprise
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {agents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <Card
                key={index}
                className={`relative p-8 bg-gradient-card border-border/50 backdrop-blur-sm group hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-2 ${
                  cardsVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  {agent.image ? (
                    <div className="w-24 h-24 rounded-full mb-6 overflow-hidden">
                      <img src={agent.image} alt={agent.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 ${agent.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{agent.name}</h3>
                  
                  <p className="text-white leading-relaxed mb-6">
                    {agent.description}
                  </p>

                  {agent.tasks.length > 0 && (
                    <div className="space-y-2 mt-4 w-full">
                      {agent.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center gap-2 text-left">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-white/80">{task}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
