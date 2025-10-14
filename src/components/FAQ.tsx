import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
const faqData = [{
  question: "Qu'est-ce qu'un workflow sur-mesure et à quoi ça sert ?",
  answer: "Un workflow sur-mesure est une chaîne d'actions automatisée que nous créons spécifiquement pour votre entreprise. L'objectif est de prendre en charge les tâches répétitives et chronophages (comme la saisie de données, l'envoi d'e-mails, la génération de rapports, etc.) pour que vous et votre équipe puissiez vous concentrer sur des missions à plus forte valeur ajoutée. C'est un gain de temps, d'efficacité et une réduction drastique des erreurs humaines."
}, {
  question: "Quels types de processus pouvez-vous automatiser ?",
  answer: "Pratiquement tous les processus numériques répétitifs ! Voici quelques exemples courants :\n\nMarketing & Ventes : Synchronisation des leads entre votre CRM et vos listes d'e-mailing, envoi de relances automatiques.\n\nRessources Humaines : Intégration des nouveaux employés (onboarding), gestion des candidatures.\n\nAdministratif : Création automatique de factures, archivage de documents.\n\nOpérations : Suivi de projets, notifications automatiques entre différentes applications.\n\nNous analysons votre besoin pour vous proposer la solution la plus pertinente."
}, {
  question: "Qu'est-ce que le \"No Code\" / \"Low Code\" ? Dois-je savoir coder ?",
  answer: "Absolument pas ! C'est tout l'avantage. Le No Code / Low Code est une approche qui permet de créer des applications et des automatisations via des interfaces graphiques intuitives, sans avoir besoin d'écrire des lignes de code complexes. Je m'occupe de toute la partie technique pour vous. Vous n'avez besoin d'aucune compétence en programmation."
}, {
  question: "Quels sont les principaux outils que vous utilisez ?",
  answer: "Mon outil principal est n8n, une plateforme d'automatisation extrêmement puissante et flexible. Pour structurer et gérer les données, j'utilise fréquemment Airtable. Enfin, pour intégrer une intelligence artificielle de pointe dans vos workflows, je m'appuie sur des solutions comme OpenRouter, Claude ou Cursor."
}, {
  question: "Combien de temps faut-il pour mettre en place un workflow ?",
  answer: "La durée dépend de la complexité du projet. Une automatisation simple peut être mise en place en quelques jours seulement. Pour des systèmes plus complexes impliquant plusieurs applications et une logique avancée, le projet peut s'étaler sur une à deux semaines. Nous définissons toujours un calendrier précis après notre premier échange."
}, {
  question: "Quels sont les avantages concrets pour mon entreprise ?",
  answer: "Les bénéfices sont multiples :\n\nGain de temps : Libérez des heures de travail chaque semaine.\n\nRéduction des coûts : Moins de temps passé sur des tâches manuelles signifie moins de ressources allouées.\n\nFiabilité accrue : Les automatisations ne font pas d'erreurs de saisie ou d'oubli.\n\nMeilleure réactivité : Les processus s'exécutent instantanément, 24h/24 et 7j/7.\n\nConcentration sur la croissance : Votre équipe se focalise sur ce qui compte vraiment : vos clients et votre stratégie."
}, {
  question: "Comment se déroule un projet avec Gecko Design ?",
  answer: "C'est très simple et transparent :\n\nPhase Découverte (Gratuite) : Nous discutons de vos besoins et identifions les processus à automatiser.\n\nProposition & Devis : Je vous envoie une proposition détaillée avec le périmètre, le coût et le calendrier.\n\nConception & Développement : Je construis le workflow sur-mesure.\n\nValidation & Déploiement : Nous testons ensemble la solution avant de la mettre en production.\n\nSupport & Maintenance : Je reste disponible pour m'assurer que tout fonctionne parfaitement."
}, {
  question: "Quelle est votre politique tarifaire ?",
  answer: "Mes tarifs sont basés sur la complexité et la portée du projet, et non sur un abonnement mensuel. Vous payez une seule fois pour la création et l'implémentation du workflow. Le coût initial comprend généralement la conception, le développement et une période de support. Pour la maintenance à long terme, nous pouvons discuter d'un forfait adapté."
}, {
  question: "Pourquoi choisir Gecko Design plutôt qu'une autre solution ?",
  answer: "Gecko Design offre une approche artisanale et 100% sur-mesure. Contrairement aux grandes agences, vous échangez directement avec moi, le concepteur de votre solution. Ma spécialisation dans des outils No Code puissants comme n8n me permet de livrer des solutions robustes, évolutives et parfaitement adaptées à votre écosystème, sans vous enfermer dans des logiciels propriétaires coûteux."
}, {
  question: "Que se passe-t-il si mes besoins évoluent ou si un outil change ?",
  answer: "C'est une excellente question ! L'avantage des outils que j'utilise est leur flexibilité. Votre workflow est conçu pour être évolutif. Si vos processus changent ou si une mise à jour est nécessaire, il est tout à fait possible de modifier et d'adapter l'automatisation. La maintenance est simple et nous pouvons prévoir ensemble les ajustements futurs."
}];
export const FAQ = () => {
  return <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions Fréquentes
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-foreground">
            Tout ce que vous devez savoir sur nos services d'automatisation et workflows sur-mesure
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow-primary"
            >
              <a href="https://gecko-labs-chatbot.lovable.app/" target="_blank" rel="noopener noreferrer">
                Parler à un agent IA
              </a>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
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
      </div>
    </section>;
};