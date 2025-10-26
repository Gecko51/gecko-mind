import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sophie Martin",
    company: "E-commerce Mode",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    rating: 5,
    text: "L'automatisation a transformé notre gestion des commandes. Nous avons gagné 15 heures par semaine que nous réinvestissons dans la relation client."
  },
  {
    name: "Thomas Dubois",
    company: "Cabinet Comptable",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
    rating: 5,
    text: "Parfait, le résultat est comme je le recommande vivement ! La synchronisation automatique entre nos outils a éliminé toutes les erreurs de saisie."
  },
  {
    name: "Marie Laurent",
    company: "Agence Marketing",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
    rating: 5,
    text: "Il a su faire preuve d'écoute et de professionnalisme tout au long de la prestation. Le reporting automatique nous fait gagner un temps précieux."
  },
  {
    name: "Pierre Rousseau",
    company: "Start-up Tech",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre",
    rating: 5,
    text: "J'ai eu l'occasion de collaborer avec une vidéo en motion design et je suis ravi du résultat. L'onboarding automatisé a réduit notre temps d'intégration de 70%."
  },
  {
    name: "Julie Bernard",
    company: "Restaurant Gastronomique",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julie",
    rating: 5,
    text: "Le rendu est moderne, fluide et parfaitement à mes besoins. La gestion automatique des réservations a transformé notre organisation."
  },
  {
    name: "Alexandre Petit",
    company: "Consultante RH",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandre",
    rating: 5,
    text: "Je suis absolument ravi de la vidéo. Dès le début, ils ont été à l'écoute de mes besoins et ont su parfaitement traduire mes idées."
  },
  {
    name: "Camille Moreau",
    company: "Studio Créatif",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Camille",
    rating: 5,
    text: "Toujours impeccable, la vidéo est superbe. Même pas besoin de retouche. L'automatisation de notre workflow créatif nous a libéré du temps pour l'innovation."
  },
  {
    name: "Lucas Garcia",
    company: "Entreprise de Services",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
    rating: 5,
    text: "Le résultat final est incroyable ! J'ai été livré super vite. Les process automatisés nous ont permis de doubler notre capacité sans recruter."
  }
];

export const Testimonials = () => {
  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ils nous font confiance
          </span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Découvrez les témoignages de nos clients qui ont transformé leur activité grâce à l'automatisation
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling container */}
        <div className="testimonials-scroll flex gap-6 py-4">
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="testimonial-card flex-shrink-0 w-[400px] p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {testimonial.text}
              </p>
            </Card>
          ))}
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

        .testimonials-scroll {
          animation: scroll 40s linear infinite;
        }

        .testimonials-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
