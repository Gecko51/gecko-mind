import geckoLogo from "@/assets/gecko-logo.png";
export const Footer = () => {
  return <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-6 pt-4 pb-8">
        

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm transition-colors" style={{
          color: '#ababab',
          cursor: 'default'
        }} onMouseEnter={e => (e.target as HTMLElement).style.color = '#fbb830'} onMouseLeave={e => (e.target as HTMLElement).style.color = '#ababab'}>© 2025 Gecko Design. Tous droits réservés.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="transition-colors" style={{
            color: '#ababab'
          }} onMouseEnter={e => (e.target as HTMLElement).style.color = '#fbb830'} onMouseLeave={e => (e.target as HTMLElement).style.color = '#ababab'}>Mentions légales</a>
            <a href="#" className="transition-colors" style={{
            color: '#ababab'
          }} onMouseEnter={e => (e.target as HTMLElement).style.color = '#fbb830'} onMouseLeave={e => (e.target as HTMLElement).style.color = '#ababab'}>Politique de confidentialité</a>
            </div>
        </div>
      </div>
    </footer>;
};