import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import geckoIcon from "@/assets/gecko-icon.png";
import heroImage from "@/assets/hero-particles.jpg";
import supabaseLogo from "@/assets/supabase.png";
import n8nLogo from "@/assets/n8n-logo.png";
import airtableLogo from "@/assets/airtable-logo.png";
import { useState } from "react";
export const Hero = () => {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0
  });
  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -10;
    const rotateY = (x - centerX) / centerX * 10;
    setRotation({
      x: rotateX,
      y: rotateY
    });
  };
  const handleMouseLeave = () => {
    setRotation({
      x: 0,
      y: 0
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0" style={{
      backgroundImage: 'url("/lovable-uploads/fad69246-3a54-4bcf-8fda-2484eeb538c3.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center"
    }} />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8 shadow-lg">
            <img src={geckoIcon} alt="Gecko" className="w-4 h-4" />
            <span className="text-sm font-bold text-white">Gecko Mind</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-snug cursor-pointer transition-transform duration-200 ease-out" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d"
        }}>
            Votre meilleure recrue
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              {" "}
              n'est pas humaine
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-foreground/80">Automatisez votre prospection, vos tunnels de vente et votre création de contenu avec la puissance de l'intelligence artificielle.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" onClick={() => {
            document.getElementById("ai-agents")?.scrollIntoView({
              behavior: "smooth"
            });
          }}>
              Découvrir le système
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{
      animationDelay: "1s"
    }} />
    </section>;
};