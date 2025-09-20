import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Linkedin, 
  MessageCircle, 
  Target,
  ArrowRight 
} from "lucide-react";
import profileImage from "@/assets/profile-guillaume.webp";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Guillaume Gay
                </span>
                <br />
                Architecte des automatisations
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fondateur de Gecko Design, Guillaume se positionne comme architecte et stratège 
                des automatisations déployées, avec une expertise reconnue sur les Agents IA 
                et les solutions d'IA sur-mesure.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mt-1">
                  <Target className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Expertise opérationnelle</h3>
                  <p className="text-muted-foreground">
                    Publication régulière de contenus professionnels sur LinkedIn autour de l'IA, 
                    de l'automatisation et des usages concrets d'outils comme N8N.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mt-1">
                  <MessageCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Communication engageante</h3>
                  <p className="text-muted-foreground">
                    Une activité de community management LinkedIn avec une écriture professionnelle, 
                    un atout pour diffuser les valeurs et cas d'usage auprès des décideurs.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline-glow" size="lg" className="group">
                <Linkedin className="w-5 h-5" />
                Suivre sur LinkedIn
              </Button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-card border-border/50 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src={profileImage} 
                    alt="Guillaume Gay - Fondateur Gecko Design" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Guillaume Gay</h3>
                  <p className="text-primary font-medium">Fondateur & Architecte IA</p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      60-70%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Réduction des tâches répétitives
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      400+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Connecteurs N8N
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Additional info card */}
            <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm">
              <h4 className="font-semibold text-foreground mb-3">Approche disciplinée</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Une méthodologie éprouvée d'hyperautomation, alignée avec les meilleures 
                pratiques de l'écosystème N8N et les standards de gouvernance des données.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};