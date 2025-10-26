import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import profileImage from "@/assets/profile-guillaume.png";
import geckoLogo from "@/assets/gecko-logo.png";
export const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-transparent">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={geckoLogo} alt="Gecko Design Logo" className="w-6 h-6" />
          <span className="text-xl font-bold text-white">
            Gecko Design
          </span>
        </div>
        
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