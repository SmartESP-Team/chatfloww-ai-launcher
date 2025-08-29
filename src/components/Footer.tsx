const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">ChatFloww</h3>
            <p className="text-background/80">
              L'outil ultime pour doubler ta vitesse de chat et multiplier tes revenus.
            </p>
          </div>
          
          {/* Support */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:support@chatfloww.com" 
                  className="text-background/80 hover:text-background transition-colors"
                >
                  support@chatfloww.com
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-background/80">
          <p>&copy; 2025 ChatFloww – Tous droits réservés. Toute copie ou reproduction entraînera des poursuites.</p>
          <p className="mt-2 text-sm">
            Boostez vos conversations, multipliez vos revenus.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;