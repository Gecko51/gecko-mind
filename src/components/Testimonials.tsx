import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import testimonialsBg from "@/assets/testimonials-sparkle-bg.jpg";
import davidProfile from "@/assets/profile-david.jpg";
import elricProfile from "@/assets/profile-elric.jpg";
import williamProfile from "@/assets/profile-william.jpg";
import georgesProfile from "@/assets/profile-georges.png";
import christianProfile from "@/assets/profile-christian.jpg";
import joachimProfile from "@/assets/profile-joachim.jpg";
import francoisProfile from "@/assets/profile-francois.jpg";
const testimonials = [{
  name: "David PHOTIADE",
  company: "Ingénieur d'affaires | Account Executive | B2B | SAAS",
  avatar: davidProfile,
  rating: 5,
  text: "Guillaume excelle dans l'analyse de taches chronophages, pour les convertir en solutions automatisées. Ainsi, grace a son expertise, il dégage de vraies marges concrètes avec l'intelligence artificielle au service de votre efficacité opérationnelle."
}, {
  name: "Georges Lenarth",
  company: "Manager expérimenté | Projets stratégiques & transformations",
  avatar: georgesProfile,
  rating: 5,
  text: "Au-delà des gains de productivité chiffrés, Guillaume nous a donné les clés et les compétences pour affronter les défis de demain. Sa vision sur l'évolution du travail et de la productivité est éclairante. Il nous a rendus plus forts, plus agiles et résolument tournés vers le futur."
}, {
  name: "Christian Oudot",
  company: "Executive Leader - Telecom, IT & Cybersecurity",
  avatar: christianProfile,
  rating: 5,
  text: "Je recommande Guillaume pour sa polyvalence et son immense curiosité. Son expertise en prompt engineering et solutions IA est chirurgicale. Si vous cherchez à décupler la puissance de l'IA dans votre entreprise, Guillaume est sans aucun doute l'expert qu'il vous faut."
}, {
  name: "Joachim Levy",
  company: "Expert de la Différence, de l'inclusion, de la résilience",
  avatar: joachimProfile,
  rating: 5,
  text: "J'ai fait appel à Guillaume en mars dernier pour m'aider à automatiser mes contenus Linkedin. Il m'a surpris par son expertise sur les dernières nouveautés en termes d'IA, la façon de créer des contenus et des images de qualité et d'optimiser les tâches. J'apprécie aussi beaucoup la bienveillance dont il fait preuve, l'exigence qu'il a envers lui-même à perfectionner son travail au service du client et son sens de la pédagogie. Enfin un consultant compétent et fiable !"
}, {
  name: "Elric Noirtin",
  company: "Formateur chez ELRIC NOIRTIN FORMATION",
  avatar: elricProfile,
  rating: 5,
  text: "J'ai particulièrement apprécié l'expertise de Guillaume en prompt engineering. Sa capacité à maitriser les paramètres des modèles de langage, à construire des chaînes de prompts complexes pour automatiser les workflows est de premier ordre. Il a fait progresser ma connaissance et mon utilisation des LLMs au-delà de ce que je pensais possible, avec un impact direct sur ma productivité."
}, {
  name: "William Faurisson",
  company: "Infogérance & Maintenance informatique",
  avatar: williamProfile,
  rating: 5,
  text: "Guillaume ne se contente pas d'appliquer des solutions existantes. C'est un véritable innovateur qui nous a ouvert les yeux sur les possibilités offertes par l'IA générative. Je recommande son expertise."
}, {
  name: "François BOUVIER",
  company: "Protocole Anti-Chaos™ | Middle Managers",
  avatar: francoisProfile,
  rating: 5,
  text: "Guillaume est un véritable architecte de la productivité. Il a su analyser nos fondations, identifier les points de friction et bâtir des systèmes de travail entièrement nouveaux, propulsés par l'IA."
}];
export const Testimonials = () => {
  const {
    ref: titleRef,
    isVisible: titleVisible
  } = useScrollAnimation();

  // Split testimonials into two groups
  const firstRowTestimonials = testimonials.slice(0, 4);
  const secondRowTestimonials = testimonials.slice(4);

  // Duplicate for infinite scroll effect
  const duplicatedFirstRow = [...firstRowTestimonials, ...firstRowTestimonials];
  const duplicatedSecondRow = [...secondRowTestimonials, ...secondRowTestimonials];
  return <section className="py-20 overflow-hidden relative bg-black">
      <div className="absolute inset-0 opacity-50" style={{
      backgroundImage: "url(\"/lovable-uploads/a949cb0a-58ad-48b9-bbfa-0c4af014398c.jpg\")",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      <div ref={titleRef} className={`container mx-auto px-6 mb-12 relative z-10 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">
            Ils ont arrêté de subir leur business.{" "}
          </span>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Ils le pilotent !
          </span>
        </h2>
        <p className="text-lg text-center text-foreground max-w-2xl mx-auto leading-relaxed">Ils ne travaillent pas plus dur que leurs concurrents. Ils sont juste mieux équipés. Découvrez comment ils ont hacké leur croissance.</p>
      </div>

      <div className="relative z-10 overflow-hidden">
        {/* Gradient overlays for smooth edge fade - desktop only */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        {/* Gradient overlays for vertical scroll - mobile only */}
        <div className="md:hidden absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
        <div className="md:hidden absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

        {/* Mobile: Vertical scroll - both rows combined */}
        <div className="md:hidden testimonials-scroll-vertical flex flex-col gap-4 px-6 max-h-[800px] pb-20">
          {[...testimonials, ...testimonials].map((testimonial, index) => <Card key={index} className="testimonial-card w-full p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {testimonial.text}
              </p>
            </Card>)}
        </div>

        {/* Desktop: Horizontal scroll */}
        <div className="hidden md:block space-y-2">
          {/* First row - scrolling left */}
          <div className="testimonials-scroll flex gap-6 py-4">
            {duplicatedFirstRow.map((testimonial, index) => <Card key={index} className="testimonial-card flex-shrink-0 w-[400px] p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>
              </Card>)}
          </div>

          {/* Second row - scrolling right */}
          <div className="testimonials-scroll-reverse flex gap-6 py-4">
            {duplicatedSecondRow.map((testimonial, index) => <Card key={index} className="testimonial-card flex-shrink-0 w-[400px] p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>
              </Card>)}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .testimonials-scroll-vertical {
          animation: scroll-vertical 30s linear infinite;
        }

        .testimonials-scroll {
          animation: scroll 20s linear infinite;
        }

        .testimonials-scroll-reverse {
          animation: scroll-reverse 20s linear infinite;
        }

        @media (min-width: 768px) {
          .testimonials-scroll {
            animation: scroll 40s linear infinite;
          }

          .testimonials-scroll-reverse {
            animation: scroll-reverse 40s linear infinite;
          }
        }
      `}</style>
    </section>;
};