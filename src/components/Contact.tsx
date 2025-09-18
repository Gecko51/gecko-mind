import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Calendar,
  ArrowRight,
  Sparkles
} from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Prêt à{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                transformer
              </span>{" "}
              votre productivité ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discutons de vos besoins d'automatisation et découvrons ensemble comment 
              libérer le potentiel de votre équipe avec des solutions IA sur-mesure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Main CTA Card */}
            <Card className="p-8 bg-gradient-card border-border/50 backdrop-blur-sm relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Planifier un appel</h3>
                    <p className="text-primary font-medium">Découverte gratuite - 30 min</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Échangeons sur vos processus actuels et identifions les opportunités 
                  d'automatisation les plus impactantes pour votre business.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Audit de vos processus métier</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Identification des gains de productivité</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Roadmap d'automatisation personnalisée</span>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full group">
                  <Calendar className="w-5 h-5" />
                  Réserver un créneau
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>

            {/* Contact Options */}
            <div className="space-y-4">
              <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-glow-primary/20 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email direct</h4>
                    <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
                  </div>
                  <Button variant="outline-glow" size="sm" className="ml-auto">
                    Envoyer
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-glow-primary/20 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <p className="text-sm text-muted-foreground">Message direct</p>
                  </div>
                  <Button variant="outline-glow" size="sm" className="ml-auto">
                    Contacter
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-glow-primary/20 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Appel direct</h4>
                    <p className="text-sm text-muted-foreground">Discussion immédiate</p>
                  </div>
                  <Button variant="outline-glow" size="sm" className="ml-auto">
                    Appeler
                  </Button>
                </div>
              </Card>

              {/* Trust badge */}
              <Card className="p-4 bg-gradient-card border-border/50 backdrop-blur-sm text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-foreground">Approche souveraine</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Auto-hébergement et conformité RGPD garantis
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};