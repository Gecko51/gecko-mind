import geckoLogo from "@/assets/gecko-logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm transition-colors" style={{
          color: '#ababab',
          cursor: 'default'
        }} onMouseEnter={e => (e.target as HTMLElement).style.color = '#fbb830'} onMouseLeave={e => (e.target as HTMLElement).style.color = '#ababab'}>© 2025 Gecko Design. Tous droits réservés.</p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/mentions-legales" className="transition-colors" style={{
            color: '#ababab'
          }} onMouseEnter={e => (e.target as HTMLElement).style.color = '#fbb830'} onMouseLeave={e => (e.target as HTMLElement).style.color = '#ababab'}>Mentions légales</Link>
            <a href="#" className="transition-colors" style={{
            color: '#ababab'
          }} onMouseEnter={e => (e.target as HTMLElement).style.color = '#fbb830'} onMouseLeave={e => (e.target as HTMLElement).style.color = '#ababab'}>Politique de confidentialité</a>
            </div>
        </div>
      </div>
    </footer>;
};