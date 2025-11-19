import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const faqData = [{
  question: "Combien de temps pour observer les premiers résultats ?",
  answer: "De mon expérience, le temps nécessaire pour que vous puissiez constater les premiers retours dépendra principalement de la maturité de votre entreprise et de votre offre.\n\nOn distingue généralement deux scénarios :\n\nVotre entreprise a déjà un \"Product-Market Fit\" (offre validée) :\nSi votre offre répond à une demande claire, nous observons des résultats très rapides. Concrètement, vos prospects répondent et planifient des rendez-vous dans les premières semaines.\n\nVous démarrez ou votre offre n'est pas encore validée : \nSi vous êtes en phase de lancement, la croissance est logiquement plus progressive, le temps que le marché comprenne et valide votre proposition de valeur, entre 1 à 3 mois."
}, {
  question: "Quels sont les avantages concrets pour mon entreprise ?",
  answer: "Les bénéfices sont multiples :\n\nGain de temps : Libérez des heures de travail chaque semaine.\n\nRéduction des coûts : Moins de temps passé sur des tâches manuelles signifie moins de ressources allouées.\n\nFiabilité accrue : Les automatisations ne font pas d'erreurs de saisie ou d'oubli.\n\nMeilleure réactivité : Les processus s'exécutent instantanément, 24h/24 et 7j/7.\n\nConcentration sur la croissance : Votre équipe se focalise sur ce qui compte vraiment : vos clients et votre stratégie."
}, {
  question: "Pourquoi choisir Gecko Mind plutôt qu'une autre solution ?",
  answer: "Gecko Mind offre une approche artisanale et 100% sur-mesure. Contrairement aux grandes agences, vous échangez directement avec moi, le concepteur de votre solution. Ma spécialisation dans des outils No Code puissants comme n8n me permet de livrer des solutions robustes, évolutives et parfaitement adaptées à votre écosystème, sans vous enfermer dans des logiciels propriétaires coûteux."
}, {
  question: "Que se passe-t-il si mes besoins évoluent ou si un outil change ?",
  answer: "C'est une excellente question ! L'avantage des outils que j'utilise est leur flexibilité. Votre workflow est conçu pour être évolutif. Si vos processus changent ou si une mise à jour est nécessaire, il est tout à fait possible de modifier et d'adapter l'automatisation. La maintenance est simple et nous pouvons prévoir ensemble les ajustements futurs."
}];
export const FAQ = () => {
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
  return <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions Fréquentes
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-foreground">
            Automatisation & ROI, tout pour prendre la bonne décision
          </p>
          <div className="mt-6">
            <Button asChild className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow-primary">
              
            </Button>
          </div>
        </div>

        <div ref={contentRef} className={`max-w-4xl mx-auto transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed pb-6" style={{
              color: '#a0a0a0'
            }}>
                  <div className="whitespace-pre-line text-lg">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-foreground/60 text-sm">
            Made with 💛 by Gecko
          </p>
        </div>
      </div>
    </section>;
};