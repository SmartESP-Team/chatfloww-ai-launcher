import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">ChatFloww</h3>
            <p className="text-background/80">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Support */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:support@chatfloww.com" 
                  className="text-background/80 hover:text-background transition-colors"
                >
                  smartespservices@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  {t('footer.helpCenter')}
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  {t('faq.title')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-background/80">
          <p>{t('footer.copyright')}</p>
          <p className="mt-2 text-sm">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
