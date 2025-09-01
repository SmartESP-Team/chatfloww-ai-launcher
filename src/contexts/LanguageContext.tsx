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
 "contact.whatsapp": {
  "FR": "Assistance gratuite 24H/7",
  "EN": "Free assistance 24/7",
  "ES": "Asistencia gratuita 24/7",
  "DE": "Kostenlose Hilfe 24/7"
},

  'contact.cta.title': {
    FR: 'Passez à ChatFloww et transformez vos efforts en beaux gains ! 💸🔥',
    EN: 'Switch to ChatFloww and transform your efforts into beautiful gains! 💸🔥',
    ES: '¡Cambia a ChatFloww y transforma tus esfuerzos en hermosas ganancias! 💸🔥',
    DE: 'Wechseln Sie zu ChatFloww und verwandeln Sie Ihre Bemühungen in schöne Gewinne! 💸🔥'
  },
 "contact.download": {
  "FR": "Obtenir ChatFloww maintenant",
  "EN": "Get ChatFloww Now",
  "ES": "Obtener ChatFloww Ahora",
  "DE": "ChatFloww Jetzt holen"
},

  'contact.download.note': {
    FR: 'Après le téléchargement, cliquez sur le bouton WhatsApp pour valider votre accès et rejoindre les chatter d\'élite 🚀',
    EN: 'After downloading, click the WhatsApp button to validate your access and join the elite chatters 🚀',
    ES: 'Después de la descarga, haz clic en el botón de WhatsApp para validar tu acceso y unirte a los chatters de élite 🚀',
    DE: 'Nach dem Download klicken Sie auf die WhatsApp-Schaltfläche, um Ihren Zugang zu validieren und den Elite-Chattern beizutreten 🚀'
  },

  'contact.product.title': {
    FR: '💎 ChatFloww-v1.0 – Ton Arme Secrète de Chat',
    EN: '💎 ChatFloww-v1.0 – Your Secret Chat Weapon',
    ES: '💎 ChatFloww-v1.0 – Tu Arma Secreta de Chat',
    DE: '💎 ChatFloww-v1.0 – Deine Geheime Chat-Waffe'
  },
  'contact.product.subtitle': {
    FR: '✨ Un seul paiement → 12 mois d\'accès illimité :',
    EN: '✨ One payment → 12 months of unlimited access:',
    ES: '✨ Un solo pago → 12 meses de acceso ilimitado:',
    DE: '✨ Eine Zahlung → 12 Monate unbegrenzter Zugang:'
  },
  'contact.product.feature1': {
    FR: '✅ Créez +5000 tabs gratuitement',
    EN: '✅ Create +5000 tabs for free',
    ES: '✅ Crea +5000 pestañas gratis',
    DE: '✅ Erstelle +5000 Tabs kostenlos'
  },
  'contact.product.feature2': {
    FR: '✅ Accédez à des scripts normalement payants déjà validés :',
    EN: '✅ Access normally paid validated scripts:',
    ES: '✅ Accede a scripts normalmente pagos ya validados:',
    DE: '✅ Zugang zu normalerweise kostenpflichtigen, validierten Skripten:'
  },
  'contact.product.script1': {
    FR: '🔥 PPV à 50% de conversion',
    EN: '🔥 PPV with 50% conversion',
    ES: '🔥 PPV con 50% de conversión',
    DE: '🔥 PPV mit 50% Konversion'
  },
  'contact.product.script2': {
    FR: '🔥 Upsells à 80$',
    EN: '🔥 $80 Upsells',
    ES: '🔥 Upsells de $80',
    DE: '🔥 $80 Upsells'
  },
  'contact.product.script3': {
    FR: '🔥 Réponses aux objections toutes prêtes',
    EN: '🔥 Ready-made objection responses',
    ES: '🔥 Respuestas a objeciones listas',
    DE: '🔥 Fertige Einwand-Antworten'
  },
  'contact.guarantee': {
    FR: '🛡️ Garantie satisfait ou remboursé jusqu\'à 70% sans question ni procédure compliquée',
    EN: '🛡️ Satisfaction guarantee or up to 70% refund without questions or complicated procedures',
    ES: '🛡️ Garantía de satisfacción o reembolso hasta 70% sin preguntas ni procedimientos complicados',
    DE: '🛡️ Zufriedenheitsgarantie oder bis zu 70% Rückerstattung ohne Fragen oder komplizierte Verfahren'
  },

  // Team Message
  'team.title': {
    FR: '💎 Un mot de l\'équipe ChatFloww 💎',
    EN: '💎 A word from the ChatFloww team 💎',
    ES: '💎 Una palabra del equipo ChatFloww 💎',
    DE: '💎 Ein Wort vom ChatFloww-Team 💎'
  },
  'team.message1': {
    FR: 'On sait à quel point gérer des dizaines de conversations peut être épuisant 😮‍💨… C\'est pour ça que ChatFloww a déjà aidé des chatters comme toi à reprendre le contrôle, cartonner leurs ventes et respirer enfin sans stress. 🚀',
    EN: 'We know how exhausting managing dozens of conversations can be 😮‍💨… That\'s why ChatFloww has already helped chatters like you regain control, crush their sales and finally breathe without stress. 🚀',
    ES: 'Sabemos lo agotador que puede ser gestionar docenas de conversaciones 😮‍💨… Por eso ChatFloww ya ha ayudado a chatters como tú a retomar el control, arrasar en ventas y finalmente respirar sin estrés. 🚀',
    DE: 'Wir wissen, wie erschöpfend es sein kann, Dutzende von Gesprächen zu führen 😮‍💨… Deshalb hat ChatFloww bereits Chattern wie dir geholfen, die Kontrolle zurückzugewinnen, ihre Verkäufe zu steigern und endlich stressfrei zu atmen. 🚀'
  },
  'team.message2': {
    FR: 'Ici, pas de pression inutile : tu bosses plus vite, tu gagnes plus, et tu gardes ton énergie pour ce qui compte vraiment. 💬✨',
    EN: 'Here, no unnecessary pressure: you work faster, earn more, and keep your energy for what really matters. 💬✨',
    ES: 'Aquí, sin presión innecesaria: trabajas más rápido, ganas más, y guardas tu energía para lo que realmente importa. 💬✨',
    DE: 'Hier, kein unnötiger Druck: Du arbeitest schneller, verdienst mehr und sparst deine Energie für das, was wirklich zählt. 💬✨'
  },
  'team.message3': {
    FR: 'Et si tu as la moindre question, l\'équipe est toujours là pour toi. ❤️',
    EN: 'And if you have any questions, the team is always there for you. ❤️',
    ES: 'Y si tienes alguna pregunta, el equipo siempre está ahí para ti. ❤️',
    DE: 'Und wenn du Fragen hast, ist das Team immer für dich da. ❤️'
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
  },

  // FAQ Section
  'faq.title': {
    FR: '❓ Questions Fréquentes',
    EN: '❓ Frequently Asked Questions',
    ES: '❓ Preguntas Frecuentes',
    DE: '❓ Häufig gestellte Fragen'
  },
  'faq.subtitle': {
    FR: 'Trouvez rapidement les réponses à vos questions sur ChatFloww',
    EN: 'Quickly find answers to your questions about ChatFloww',
    ES: 'Encuentra rápidamente las respuestas a tus preguntas sobre ChatFloww',
    DE: 'Finden Sie schnell Antworten auf Ihre Fragen zu ChatFloww'
  },
  'faq.question1': {
    FR: 'Est-ce que ChatFloww fonctionne avec mes plateformes actuelles ?',
    EN: 'Does ChatFloww work with my current platforms?',
    ES: '¿ChatFloww funciona con mis plataformas actuales?',
    DE: 'Funktioniert ChatFloww mit meinen aktuellen Plattformen?'
  },
  'faq.answer1': {
    FR: 'Oui ! ChatFloww est compatible avec les logiciels de chatting comme Infloww, Reveal, MYM, Mymic, ainsi que sur Discord et Questions Fréquentes',
    EN: 'Yes! ChatFloww is compatible with chatting software like Infloww, Reveal, MYM, Mymic, as well as Discord and Frequently Asked Questions',
    ES: '¡Sí! ChatFloww es compatible con software de chat como Infloww, Reveal, MYM, Mymic, así como Discord y Preguntas Frecuentes',
    DE: 'Ja! ChatFloww ist kompatibel mit Chat-Software wie Infloww, Reveal, MYM, Mymic, sowie Discord und häufig gestellte Fragen'
  },
  'faq.question2': {
    FR: 'Puis-je installer ChatFloww tout seul ?',
    EN: 'Can I install ChatFloww by myself?',
    ES: '¿Puedo instalar ChatFloww yo solo?',
    DE: 'Kann ich ChatFloww selbst installieren?'
  },
  'faq.answer2': {
    FR: 'Oui, c\'est très simple. Après le téléchargement, une assistante vous contacte directement et vous accompagne pas à pas pour la mise en place. Telegram.',
    EN: 'Yes, it\'s very simple. After downloading, an assistant contacts you directly and guides you step by step through the setup. Telegram.',
    ES: 'Sí, es muy simple. Después de la descarga, una asistente te contacta directamente y te acompaña paso a paso para la configuración. Telegram.',
    DE: 'Ja, es ist sehr einfach. Nach dem Download kontaktiert Sie eine Assistentin direkt und begleitet Sie Schritt für Schritt bei der Einrichtung. Telegram.'
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
