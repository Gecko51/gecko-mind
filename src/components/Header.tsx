import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import profileImage from "@/assets/profile-guillaume.png";
import geckoLogo from "@/assets/gecko-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-transparent">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src={geckoLogo} 
            alt="Gecko Design Logo" 
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-white">
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
          <Button variant="outline" size="default" className="px-4 py-2.5 bg-transparent border-2 border-primary text-primary hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300">
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