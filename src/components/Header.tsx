import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import geckoLogo from "@/assets/gecko-mind-logo-typo.png";
export const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-transparent">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <img src={geckoLogo} alt="Gecko Mind Logo" className="h-5" />
        
        <div className="hidden md:flex items-center gap-8">
          
          
          
          <Button 
            variant="gradient-border" 
            size="default" 
            onClick={() => window.open('https://cal.com/guillaume-gay/30min', '_blank')}
          >
            Réserver un appel
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </nav>
    </header>;
};