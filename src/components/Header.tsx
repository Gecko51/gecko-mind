import { Button } from "@/components/ui/button";
import { Zap, Menu } from "lucide-react";
import profileImage from "@/assets/profile-guillaume.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Gecko Design
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            À propos
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
          <Button variant="outline" size="default" className="flex items-center gap-2 px-4 py-2.5 bg-transparent border-primary/20 text-foreground hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent transition-all duration-300">
            <img 
              src={profileImage} 
              alt="Guillaume Gay" 
              className="w-8 h-8 rounded-full object-cover"
            />
            Réserver un appel
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </nav>
    </header>
  );
};