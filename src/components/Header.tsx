import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import profileImage from "@/assets/profile-guillaume.png";
import geckoLogo from "@/assets/gecko-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-black/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <img 
              src={geckoLogo} 
              alt="Gecko Design Logo" 
              className="w-6 h-6"
            />
            <span className="text-white font-bold text-lg">
              Gecko Design
            </span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
            Services
          </a>
          <a href="#about" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
            À propos
          </a>
          <a href="#contact" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
            Contact
          </a>
          <Button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
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