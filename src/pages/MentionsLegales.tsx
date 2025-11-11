import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
const MentionsLegales = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Mentions Légales</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Responsable du site</h2>
          <p className="mb-2"><strong>Nom de l'entreprise :</strong> Gecko Design</p>
          <p className="mb-2"><strong>Forme juridique :</strong> Entreprise individuelle</p>
          <p className="mb-2"><strong>Adresse du siège social :</strong> 8 place Catherine Vautrin, 51400 Mourmelon-le-Grand</p>
          <p className="mb-2"><strong>Numéro SIRET :</strong> 92893696200010</p>
          <p className="mb-2"><strong>RCS :</strong> Châlons-en-Champagne 928936962</p>
          <p className="mb-2"><strong>Directeur de la publication :</strong>Directeur de la publication : Gay Guillaume</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Hébergement</h2>
          <p className="mb-2">Le site est hébergé par :</p>
          <p className="mb-2"><strong>Prestataire :</strong> Lovable</p>
          <p className="mb-2"><strong>Service :</strong> Plateforme de création et d'hébergement de sites web</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Conditions d'utilisation du site</h2>
          <p className="mb-4">L'accès au site gecko-mind.lovable.app est gratuit. L'utilisateur s'engage à utiliser le site de manière conforme à la loi et aux présentes mentions légales.</p>
          <p className="mb-2">L'utilisateur s'engage notamment à ne pas :</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Diffuser du contenu illégal, injurieux, diffamatoire ou contraire aux bonnes mœurs</li>
            <li>Reproduire, modifier ou distribuer le contenu du site sans autorisation</li>
            <li>Utiliser le site à des fins de spam, harcèlement ou fraude</li>
            <li>Pirater ou tenter de contourner les systèmes de sécurité du site</li>
          </ul>
          <p>Gecko Design se réserve le droit de refuser l'accès au site à tout utilisateur qui violerait ces conditions.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Propriété intellectuelle</h2>
          <p className="mb-4">L'ensemble du contenu présent sur le site (textes, images, vidéos, logos, graphismes) est protégé par les droits d'auteur et les droits de propriété intellectuelle. Toute reproduction, adaptation ou exploitation sans autorisation préalable est strictement interdite.</p>
          <p>Les demandes de reproduction ou d'utilisation du contenu doivent être adressées à Gecko Design.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Responsabilité</h2>
          <p className="mb-2">Gecko Design décline toute responsabilité concernant :</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Les interruptions de service ou les bugs techniques</li>
            <li>L'indisponibilité temporaire ou permanente du site</li>
            <li>Les pertes de données</li>
            <li>Les dommages directs ou indirects résultant de l'accès ou de l'utilisation du site</li>
          </ul>
          <p>Le site est fourni « en l'état » sans garantie explicite ou implicite.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Liens externes</h2>
          <p>Le site peut contenir des liens vers des sites tiers. Gecko Design décline toute responsabilité quant au contenu de ces sites externes sur lesquels elle n'a aucun contrôle.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Données personnelles et cookies</h2>
          <p className="mb-2">Pour toute information concernant :</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Le traitement de vos données personnelles</li>
            <li>La gestion des cookies</li>
            <li>Vos droits en matière de protection des données</li>
          </ul>
          <p className="mb-4">Consultez notre <strong>politique de confidentialité</strong> (à adapter selon votre politique réelle).</p>
          <p>Vous pouvez contacter Gecko Design pour exercer vos droits (accès, rectification, suppression) en vertu du RGPD.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Coordonnées pour nous contacter</h2>
          <p className="mb-2"><strong>E-mail :</strong> [À compléter avec votre adresse email]</p>
          <p className="mb-2"><strong>Adresse postale :</strong> 8 place Catherine Vautrin, 51400 Mourmelon-le-Grand</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Dispositions finales</h2>
          <p className="mb-4">Ces mentions légales sont régies par la loi française. Tout litige sera soumis à la juridiction compétente.</p>
          <p>Gecko Design se réserve le droit de modifier ces mentions légales à tout moment. Les modifications seront valables dès leur mise en ligne.</p>
        </section>

        <hr className="my-8 border-border" />
        
        <p className="text-sm text-muted-foreground"><strong>Dernière mise à jour :</strong> [À compléter avec la date actuelle]</p>
      </main>
      <Footer />
    </div>;
};
export default MentionsLegales;