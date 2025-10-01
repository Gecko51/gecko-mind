import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, MessageCircle, Target, ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile-guillaume.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
export const About = () => {
  const {
    ref: contentRef,
    isVisible: contentVisible
  } = useScrollAnimation();
  const {
    ref: cardRef,
    isVisible: cardVisible
  } = useScrollAnimation({
    threshold: 0.3
  });
  return <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef} className={`space-y-8 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Guillaume
                </span>
                <br />
                Architecte des automatisations
              </h2>
              <p className="text-lg leading-relaxed" style={{
              color: '#ababab'
            }}>
                Fondateur de Gecko Design, je me positionne comme architecte et stratège 
                des automatisations déployées, avec une expertise reconnue sur les Agents IA 
                et les solutions d'intelligence artificielle sur-mesure.
                <br /><br />
                Mon rôle ? Transformer vos process métiers en moteurs de croissance automatisés. <br></br>
                <br></br>Passionné par l'innovation utile, je conçois des solutions concrètes qui libèrent du temps, 
                optimisent le suivi commercial, et transforment votre quotidien opérationnel.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                
                <div>
                  
                  
                </div>
              </div>

              
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline-glow" size="lg" className="group" onClick={() => window.open('https://www.linkedin.com/in/gay-guillaume/', '_blank')}>
                <Linkedin className="w-5 h-5" />
                Suivre sur LinkedIn
              </Button>
            </div>
          </div>

          {/* Stats Card */}
          <div ref={cardRef} className={`space-y-6 transition-all duration-700 ${cardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <Card className="p-8 bg-gradient-card border-border/50 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <img src={profileImage} alt="Guillaume Gay - Fondateur Gecko Design" className="w-full h-full object-cover" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Guillaume</h3>
                  <p className="text-primary font-medium">Fondateur & Architecte IA</p>
                </div>

                
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>;
};