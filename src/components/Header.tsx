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
          <Button variant="outline" size="default" className="px-4 py-2.5 bg-transparent border-2 border-transparent bg-gradient-to-r from-primary/20 to-secondary/20 bg-clip-padding hover:from-primary hover:to-secondary hover:text-primary-foreground transition-all duration-300 relative before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-primary before:to-secondary before:rounded-full before:-z-10">
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