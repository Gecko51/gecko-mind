import { Shield, Clock, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Mission = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-20 bg-gradient-to-b from-background to-black/20">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transformer vos processus
            </span>{" "}
            <span className="text-foreground">chronophages</span>
          </h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed" style={{ color: '#919aa6' }}>
            J'aide les entreprises à transformer leurs processus chronophages en workflows autonomes qui 
            <span className="font-medium"> génèrent du chiffre</span>, 
            <span className="font-medium"> libèrent du temps</span> et 
            <span className="font-medium"> respectent les réglementations</span> (RGPD, DPA).
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            contentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
              <TrendingUp className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Génèrent du chiffre</h3>
            <p className="text-muted-foreground">Workflows qui contribuent directement à vos revenus</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
              <Clock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Libèrent du temps</h3>
            <p className="text-muted-foreground">Plus de temps pour la stratégie et l'innovation</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Respectent les règles</h3>
            <p className="text-muted-foreground">Conformité RGPD et DPA garantie</p>
          </div>
        </div>
      </div>
    </section>
  );
};