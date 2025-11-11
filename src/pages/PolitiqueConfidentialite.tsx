import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground border-t border-border pt-8">Politique de Confidentialité</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
            <p className="mb-4">
              Gecko Design (ci-après « nous » ou « l'entreprise ») accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous traitons vos données lorsque vous visitez notre site gecko-mind.lovable.app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Responsable du traitement</h2>
            <p className="mb-2"><strong>Gecko Design</strong></p>
            <p className="mb-2">8 place Catherine Vautrin</p>
            <p className="mb-2">51400 Mourmelon-le-Grand</p>
            <p className="mb-4">SIRET : 92893696200010</p>
            <p>Vous pouvez nous contacter à : [À compléter avec votre adresse email]</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Données collectées</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">3.1 Données collectées directement auprès de vous</h3>
            <p className="mb-2">Nous collectons uniquement les données que vous nous transmettez volontairement, telles que :</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Votre nom et prénom (si vous nous contactez)</li>
              <li>Votre adresse email (si vous nous contactez ou vous inscrivez à une newsletter)</li>
              <li>Votre numéro de téléphone (si vous nous contactez)</li>
              <li>Tout autre information que vous choisissez de partager via nos formulaires de contact</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">3.2 Données collectées automatiquement</h3>
            <p className="mb-2">Nous ne collectons <strong>pas de données automatiquement</strong> lors de votre visite sur notre site. En particulier :</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Nous n'utilisons <strong>pas de cookies</strong></li>
              <li>Nous n'utilisons <strong>pas de pixel de suivi</strong></li>
              <li>Nous n'utilisons <strong>pas d'outils d'analyse</strong> (Google Analytics, Matomo, etc.)</li>
              <li>Nous ne stockons <strong>pas d'adresses IP</strong></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Finalités du traitement</h2>
            <p className="mb-2">Les données personnelles que vous nous transmettez volontairement sont utilisées pour :</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Vous contacter</strong> en réponse à vos demandes ou questions</li>
              <li><strong>Vous envoyer des informations</strong> relatives à nos services (si vous y avez consenti)</li>
              <li><strong>Gérer votre demande</strong> de renseignements ou de devis</li>
              <li><strong>Respecter nos obligations légales</strong> (si nécessaire)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Fondement légal du traitement</h2>
            <p className="mb-2">Nous traitons vos données personnelles sur les bases légales suivantes :</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Consentement</strong> : Lorsque vous nous transmettez vos données via un formulaire de contact</li>
              <li><strong>Exécution d'un contrat</strong> : Si vous avez souscrit à l'un de nos services</li>
              <li><strong>Obligations légales</strong> : Pour nous conformer aux dispositions légales applicables</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Destinataires des données</h2>
            <p className="mb-2">Vos données personnelles ne sont communiquées à aucun tiers, sauf :</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>À nos prestataires techniques si nécessaire (par exemple, pour gérer les formulaires)</li>
              <li>Aux autorités compétentes si la loi l'exige</li>
              <li>Aux services de Lovable (hébergeur) uniquement pour l'hébergement technique du site</li>
            </ul>
            <p className="font-semibold">Nous ne vendons jamais vos données personnelles à des tiers.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Durée de conservation</h2>
            <p className="mb-2">Les données personnelles que vous nous transmettez sont conservées :</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Pendant la durée de la relation commerciale</strong> si vous êtes client</li>
              <li><strong>Pendant 3 ans</strong> après votre dernière interaction si vous avez simplement demandé des informations (conformément à la loi française)</li>
              <li><strong>Pendant 6 ans</strong> pour les données liées aux obligations légales et comptables</li>
            </ul>
            <p>Après cette période, vos données sont supprimées de nos systèmes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Vos droits</h2>
            <p className="mb-2">Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française Informatique et Libertés, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Droit d'accès</strong> : Vous pouvez demander l'accès aux données personnelles que nous détenons vous concernant</li>
              <li><strong>Droit de rectification</strong> : Vous pouvez corriger ou mettre à jour vos données</li>
              <li><strong>Droit à l'effacement</strong> : Vous pouvez demander la suppression de vos données (« droit à l'oubli »)</li>
              <li><strong>Droit à la limitation du traitement</strong> : Vous pouvez demander une limitation du traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : Vous pouvez demander à recevoir vos données dans un format structuré et courant</li>
              <li><strong>Droit d'opposition</strong> : Vous pouvez vous opposer au traitement de vos données pour certaines finalités</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-foreground">Exercer vos droits</h3>
            <p className="mb-2">Pour exercer l'un de ces droits, veuillez nous envoyer une demande écrite à :</p>
            <p className="mb-2"><strong>E-mail :</strong> [À compléter avec votre adresse email]</p>
            <p className="mb-4"><strong>Adresse postale :</strong> 8 place Catherine Vautrin, 51400 Mourmelon-le-Grand</p>
            <p>Nous traiterons votre demande dans un délai de <strong>30 jours</strong> à compter de sa réception. Si vous le souhaitez, vous pouvez joindre une copie de votre pièce d'identité pour confirmer votre identité.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Cookies et technologies de suivi</h2>
            <p className="mb-4 font-semibold">Gecko Design ne collecte pas de cookies sur son site.</p>
            <p className="mb-4">Notre site fonctionne sans aucun outil de suivi, de cookies ou de pixel. Aucune donnée de navigation n'est collectée automatiquement. Votre navigation reste entièrement anonyme.</p>
            <p>Vous n'avez donc aucune banneau de consentement aux cookies à accepter ni de préférences de suivi à paramétrer.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Sécurité des données</h2>
            <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre l'accès non autorisé, la modification ou la divulgation. Cependant, aucune transmission de données sur Internet n'est entièrement sécurisée.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Transferts internationaux</h2>
            <p>Vos données ne sont pas transférées hors de l'Union Européenne. Elles sont stockées en France ou au sein de l'UE.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Modifications de cette politique</h2>
            <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront valables dès leur mise en ligne. Nous vous invitons à consulter régulièrement cette politique pour être au courant des modifications apportées.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Réclamation auprès de la CNIL</h2>
            <p className="mb-2">Si vous considérez que nos traitements de données personnelles portent atteinte à vos droits, vous pouvez également :</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Nous contacter directement pour résoudre le problème</li>
              <li>Déposer plainte auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL)</li>
            </ul>
            <p className="mb-1"><strong>Contact de la CNIL :</strong></p>
            <p className="mb-1">3 place de Fontenoy</p>
            <p className="mb-1">75007 Paris</p>
            <p>www.cnil.fr</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">14. Coordonnées de contact</h2>
            <p className="mb-2">Pour toute question relative à la protection de vos données personnelles ou pour exercer vos droits :</p>
            <p className="mb-1"><strong>Gecko Design</strong></p>
            <p className="mb-1">8 place Catherine Vautrin</p>
            <p className="mb-1">51400 Mourmelon-le-Grand</p>
            <p className="mb-4">E-mail : [À compléter avec votre adresse email]</p>
          </section>

          <div className="border-t border-border pt-8 mt-12">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Dernière mise à jour :</strong> Le 11 novembre 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
