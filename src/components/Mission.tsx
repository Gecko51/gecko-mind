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
  return <section className="py-20 bg-gradient-to-b from-background to-black/20 bg-black">
      <div className="container mx-auto px-6">
        

        <div ref={contentRef} className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center group">
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <img src={sendMoneyIcon} alt="Send money icon" className="w-15 h-15" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Génèrer du chiffre</h3>
            <p style={{
            color: '#ababab'
          }}>Workflows qui contribuent directement à vos revenus</p>
          </div>

          <div className="text-center group">
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <img src={clockIcon} alt="Clock icon" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Libérer du temps</h3>
            <p style={{
            color: '#ababab'
          }}>Plus de temps pour la stratégie et l'innovation</p>
          </div>

          <div className="text-center group">
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <img src={checkSecurityIcon} alt="Check security icon" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Respecter les règles</h3>
            <p style={{
            color: '#ababab'
          }}>Conformité RGPD et DPA garantie</p>
          </div>
        </div>
      </div>
    </section>;
};