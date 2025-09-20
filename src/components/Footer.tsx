import geckoLogo from "@/assets/gecko-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={geckoLogo} 
                alt="Gecko Design Logo" 
                className="w-8 h-8"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gecko Design
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Solutions IA sur-mesure pour automatiser vos processus métier 
              avec N8N. Approche souveraine et conforme RGPD.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Automatisation workflows</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Agents IA</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Intégrations N8N</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Conformité RGPD</a></li>
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">À propos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">Guillaume Gay</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Notre approche</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cas d'usage</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Gecko Design. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-primary transition-colors">RGPD</a></div>
        </div>
      </div>
    </footer>
  );
};