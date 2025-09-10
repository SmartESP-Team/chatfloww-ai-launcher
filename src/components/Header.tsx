import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">CF</span>
          </div>
          <span className="text-xl font-bold text-foreground">ChatFloww</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('nav.features')}
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('nav.howItWorks')}
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('nav.testimonials')}
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('nav.contact')}
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button 
            onClick={scrollToContact}
            variant="default"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {t('hero.cta1')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;