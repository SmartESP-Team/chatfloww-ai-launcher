import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'FR' | 'EN' | 'ES' | 'DE';

interface Translations {
  [key: string]: {
    [K in Language]: string;
  };
}

const translations: Translations = {
  // Hero Section
  'hero.title': {
    FR: '💬 Double ta vitesse de chatting, fais exploser tes ventes ! 💰⚡',
    EN: '💬 Double your chatting speed, explode your sales ! 💰⚡',
    ES: '💬 Duplica tu velocidad de chat, explota tus ventas ! 💰⚡',
    DE: '💬 Verdopple deine Chat-Geschwindigkeit, explodiere deine Verkäufe ! 💰⚡'
  },
  'hero.subtitle': {
    FR: '🚀 ChatFloww est l\'outil ultime des chatters qui veulent répondre 2x plus vite, gérer plus de conversations, et booster leurs ventes.',
    EN: '🚀 ChatFloww is the ultimate tool for chatters who want to respond 2x faster, manage more conversations, and boost their sales.',
    ES: '🚀 ChatFloww es la herramienta definitiva para chatters que quieren responder 2x más rápido, gestionar más conversaciones y aumentar sus ventas.',
    DE: '🚀 ChatFloww ist das ultimative Tool für Chatter, die 2x schneller antworten, mehr Gespräche verwalten und ihre Verkäufe steigern möchten.'
  },
  'hero.cta1': {
    FR: 'Commence maintenant',
    EN: 'Start now',
    ES: 'Comenzar ahora',
    DE: 'Jetzt beginnen'
  },
  'hero.cta2': {
    FR: '▶ Voir Démo',
    EN: '▶ Watch Demo',
    ES: '▶ Ver Demo',
    DE: '▶ Demo ansehen'
  },
  'hero.stat1': {
    FR: 'Plus rapide',
    EN: 'Faster',
    ES: 'Más rápido',
    DE: 'Schneller'
  },
  'hero.stat2': {
    FR: 'Dégain en 1 sec, boom, résultats ! ⚡',
    EN: 'Quick draw in 1 sec, boom, results ! ⚡',
    ES: '¡Desenfunda en 1 seg, boom, resultados ! ⚡',
    DE: 'Ziehen in 1 Sek, boom, Ergebnisse ! ⚡'
  },
  'hero.stat3': {
    FR: 'Pour un stockage casi illimité',
    EN: 'For almost unlimited storage',
    ES: 'Para almacenamiento casi ilimitado',
    DE: 'Für fast unbegrenzten Speicher'
  },
  
  // Contact Section
  'contact.title': {
    FR: 'Rejoignez les chatter d\'élite ! Contactez-nous maintenant ! 💥',
    EN: 'Join the elite chatters! Contact us now! 💥',
    ES: '¡Únete a los chatters de élite! ¡Contáctanos ahora! 💥',
    DE: 'Schließen Sie sich den Elite-Chattern an! Kontaktieren Sie uns jetzt! 💥'
  },
  'contact.subtitle': {
    FR: 'Prêt à passer au niveau supérieur sur ChatFloww ? WhatsApp nous et débloquez votre premier accès gratuit pour intégrer les chatter d\'élite ! 🔥⚡',
    EN: 'Ready to level up on ChatFloww? WhatsApp us and unlock your first free access to join the elite chatters! 🔥⚡',
    ES: '¿Listo para subir de nivel en ChatFloww? ¡WhatsApp nos y desbloquea tu primer acceso gratuito para unirte a los chatters de élite! 🔥⚡',
    DE: 'Bereit, bei ChatFloww aufzusteigen? WhatsApp uns und schalte deinen ersten kostenlosen Zugang frei, um den Elite-Chattern beizutreten! 🔥⚡'
  },
  'contact.whatsapp': {
    FR: 'Demandez votre essai gratuit avec accès illimité pendant 24H',
    EN: 'Request your free trial with unlimited access for 24H',
    ES: 'Solicita tu prueba gratuita con acceso ilimitado por 24H',
    DE: 'Fordern Sie Ihre kostenlose Testversion mit unbegrenztem Zugang für 24H an'
  },
  'contact.cta.title': {
    FR: 'Passez à ChatFloww et transformez vos efforts en beaux gains ! 💸🔥',
    EN: 'Switch to ChatFloww and transform your efforts into beautiful gains! 💸🔥',
    ES: '¡Cambia a ChatFloww y transforma tus esfuerzos en hermosas ganancias! 💸🔥',
    DE: 'Wechseln Sie zu ChatFloww und verwandeln Sie Ihre Bemühungen in schöne Gewinne! 💸🔥'
  },
  'contact.download': {
    FR: 'Télécharger ChatFloww',
    EN: 'Download ChatFloww',
    ES: 'Descargar ChatFloww',
    DE: 'ChatFloww herunterladen'
  },
  'contact.download.note': {
    FR: 'Après le téléchargement, cliquez sur le bouton WhatsApp pour valider votre accès et rejoindre les chatter d\'élite 🚀',
    EN: 'After downloading, click the WhatsApp button to validate your access and join the elite chatters 🚀',
    ES: 'Después de la descarga, haz clic en el botón de WhatsApp para validar tu acceso y unirte a los chatters de élite 🚀',
    DE: 'Nach dem Download klicken Sie auf die WhatsApp-Schaltfläche, um Ihren Zugang zu validieren und den Elite-Chattern beizutreten 🚀'
  },

  // Testimonials
  'testimonial1.text': {
    FR: 'Avec ChatFloww, j\'ai vendu 3 médias en un rien de temps ! Mon texte est bien organisé et je gagne en clarté. 💸',
    EN: 'With ChatFloww, I sold 3 media in no time! My text is well organized and I gain clarity. 💸',
    ES: '¡Con ChatFloww, vendí 3 medios en muy poco tiempo! Mi texto está bien organizado y gano claridad. 💸',
    DE: 'Mit ChatFloww habe ich 3 Medien in kürzester Zeit verkauft! Mein Text ist gut organisiert und ich gewinne an Klarheit. 💸'
  },
  'testimonial1.author': {
    FR: 'Sarah L., créatrice de contenu',
    EN: 'Sarah L., content creator',
    ES: 'Sarah L., creadora de contenido',
    DE: 'Sarah L., Content-Erstellerin'
  },
  'testimonial2.text': {
    FR: 'Depuis que j\'utilise ChatFloww, j\'ai doublé ma vitesse de réponse. Je garde mes subs engagés sans stresser. ⚡',
    EN: 'Since using ChatFloww, I\'ve doubled my response speed. I keep my subs engaged without stress. ⚡',
    ES: 'Desde que uso ChatFloww, he duplicado mi velocidad de respuesta. Mantengo a mis subs comprometidos sin estrés. ⚡',
    DE: 'Seit ich ChatFloww verwende, habe ich meine Antwortgeschwindigkeit verdoppelt. Ich halte meine Abonnenten engagiert ohne Stress. ⚡'
  },
  'testimonial2.author': {
    FR: 'Kevin M., chatter indépendant',
    EN: 'Kevin M., independent chatter',
    ES: 'Kevin M., chatter independiente',
    DE: 'Kevin M., unabhängiger Chatter'
  },
  'testimonial3.text': {
    FR: 'Grâce à ChatFloww, je gère mes phrases en un clic et j\'évite que mon manager me mette la pression. 🚀',
    EN: 'Thanks to ChatFloww, I manage my phrases with one click and avoid my manager putting pressure on me. 🚀',
    ES: 'Gracias a ChatFloww, gestiono mis frases con un clic y evito que mi manager me presione. 🚀',
    DE: 'Dank ChatFloww verwalte ich meine Sätze mit einem Klick und vermeide, dass mein Manager Druck auf mich ausübt. 🚀'
  },
  'testimonial3.author': {
    FR: 'Julie R., modèle créatrice',
    EN: 'Julie R., model creator',
    ES: 'Julie R., modelo creadora',
    DE: 'Julie R., Model-Erstellerin'
  }
};

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('FR');

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[currentLanguage] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};