import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import clockIcon from "@/assets/clock-icon.png";
import sendMoneyIcon from "@/assets/send-money-icon.png";
import checkSecurityIcon from "@/assets/check-security-icon.png";
export const Mission = () => {
  const {
    ref: titleRef,
    isVisible: titleVisible
  } = useScrollAnimation();
  const {
    ref: contentRef,
    isVisible: contentVisible
  } = useScrollAnimation({
    threshold: 0.2
  });
  return <section className="py-20 bg-gradient-to-b from-background to-black/20">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Libérez le potentiel caché
            </span>{" "}
            <span className="text-foreground">de votre entreprise</span>
          </h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed text-white">
            Transformez vos tâches répétitives en avantage concurrentiel. J'automatise vos processus pour multiplier votre productivité tout en garantissant une conformité totale RGPD et DPA.
          </p>
        </div>

        <div ref={contentRef} className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center group">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img src={sendMoneyIcon} alt="Send money icon" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Génèrer du chiffre</h3>
            <p className="text-muted-foreground">Workflows qui contribuent directement à vos revenus</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img src={clockIcon} alt="Clock icon" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Libérer du temps</h3>
            <p className="text-muted-foreground">Plus de temps pour la stratégie et l'innovation</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img src={checkSecurityIcon} alt="Check security icon" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Respecter les règles</h3>
            <p className="text-muted-foreground">Conformité RGPD et DPA garantie</p>
          </div>
        </div>
      </div>
    </section>;
};