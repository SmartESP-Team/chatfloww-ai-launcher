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
    FR: 'Absolument ! 🚀 ChatFloww s\'intègre parfaitement avec tous les logiciels de chatting populaires : Infloww, Reveal, MYM, Mymic, et même Discord. Notre technologie s\'adapte automatiquement à votre environnement de travail pour une expérience fluide et sans interruption.',
    EN: 'Absolutely! 🚀 ChatFloww integrates perfectly with all popular chatting software: Infloww, Reveal, MYM, Mymic, and even Discord. Our technology automatically adapts to your work environment for a smooth, uninterrupted experience.',
    ES: '¡Absolutamente! 🚀 ChatFloww se integra perfectamente con todo el software de chat popular: Infloww, Reveal, MYM, Mymic, e incluso Discord. Nuestra tecnología se adapta automáticamente a tu entorno de trabajo para una experiencia fluida e ininterrumpida.',
    DE: 'Absolut! 🚀 ChatFloww integriert sich perfekt mit allen beliebten Chat-Software: Infloww, Reveal, MYM, Mymic und sogar Discord. Unsere Technologie passt sich automatisch an Ihre Arbeitsumgebung an für eine reibungslose, ununterbrochene Erfahrung.'
  },
  'faq.question2': {
    FR: 'Puis-je installer ChatFloww tout seul ?',
    EN: 'Can I install ChatFloww by myself?',
    ES: '¿Puedo instalar ChatFloww yo solo?',
    DE: 'Kann ich ChatFloww selbst installieren?'
  },
  'faq.answer2': {
    FR: 'C\'est un jeu d\'enfant ! 😎 L\'installation se fait en quelques clics seulement. Dès que vous téléchargez ChatFloww, notre équipe d\'assistance dédiée vous contacte immédiatement ( whatsapp, Gmail ) pour un accompagnement personnalisé. Vous serez opérationnel en moins de 10 minutes !',
    EN: 'It\'s a breeze! 😎 Installation takes just a few clicks. As soon as you download ChatFloww, our dedicated support team contacts you immediately ( whatsapp ,Gmail ) for personalized guidance. You\'ll be up and running in under 10 minutes!',
    ES: '¡Es pan comido! 😎 La instalación toma solo unos clics. Tan pronto como descargas ChatFloww, nuestro equipo de soporte dedicado te contacta inmediatamente ( whatsapp ,Gmail ) para orientación personalizada. ¡Estarás funcionando en menos de 10 minutos!',
    DE: 'Das ist kinderleicht! 😎 Die Installation dauert nur wenige Klicks. Sobald Sie ChatFloww herunterladen, kontaktiert Sie unser engagiertes Support-Team sofort über( whatsapp ,Gmail ) für persönliche Anleitung. Sie sind in unter 10 Minuten einsatzbereit!'
  },

  // Header Navigation
  'nav.features': {
    FR: 'Fonctionnalités',
    EN: 'Features',
    ES: 'Características',
    DE: 'Funktionen'
  },
  'nav.howItWorks': {
    FR: 'Comment ça marche',
    EN: 'How it works',
    ES: 'Cómo funciona',
    DE: 'Wie es funktioniert'
  },
  'nav.testimonials': {
    FR: 'Témoignages',
    EN: 'Testimonials',
    ES: 'Testimonios',
    DE: 'Testimonials'
  },
  'nav.contact': {
    FR: 'Contact',
    EN: 'Contact',
    ES: 'Contacto',
    DE: 'Kontakt'
  },

  // Features Section
  'features.title': {
    FR: 'Pourquoi ChatFloww ?',
    EN: 'Why ChatFloww?',
    ES: '¿Por qué ChatFloww?',
    DE: 'Warum ChatFloww?'
  },
  'features.subtitle': {
    FR: 'Les outils qui font la différence entre un chatter amateur et un pro.',
    EN: 'The tools that make the difference between an amateur chatter and a pro.',
    ES: 'Las herramientas que marcan la diferencia entre un chatter amateur y un profesional.',
    DE: 'Die Tools, die den Unterschied zwischen einem Amateur-Chatter und einem Profi ausmachen.'
  },
  'features.speed.title': {
    FR: 'Double la vitesse de chat',
    EN: 'Double chat speed',
    ES: 'Duplica la velocidad de chat',
    DE: 'Verdoppelt die Chat-Geschwindigkeit'
  },
  'features.speed.description': {
    FR: 'Réponds en 3 sec max, sans chercher tes phrases.',
    EN: 'Respond in 3 seconds max, without searching for your phrases.',
    ES: 'Responde en 3 segundos máximo, sin buscar tus frases.',
    DE: 'Antworte in maximal 3 Sekunden, ohne nach deinen Sätzen zu suchen.'
  },
  'features.revenue.title': {
    FR: 'Multiplie ton chiffre d\'affaires (x3 à x4)',
    EN: 'Multiply your revenue (x3 to x4)',
    ES: 'Multiplica tu facturación (x3 a x4)',
    DE: 'Multipliziere deinen Umsatz (x3 bis x4)'
  },
  'features.revenue.description': {
    FR: 'Plus de conversations = plus de ventes.',
    EN: 'More conversations = more sales.',
    ES: 'Más conversaciones = más ventas.',
    DE: 'Mehr Gespräche = mehr Verkäufe.'
  },
  'features.punchlines.title': {
    FR: 'Ta base perso de punchlines',
    EN: 'Your personal punchlines database',
    ES: 'Tu base personal de punchlines',
    DE: 'Deine persönliche Punchlines-Datenbank'
  },
  'features.punchlines.description': {
    FR: 'Enregistre et réutilise les phrases qui vendent.',
    EN: 'Save and reuse the phrases that sell.',
    ES: 'Guarda y reutiliza las frases que venden.',
    DE: 'Speichere und verwende Sätze wieder, die verkaufen.'
  },
  'features.pro.title': {
    FR: 'Accès aux textes de pros',
    EN: 'Access to pro texts',
    ES: 'Acceso a textos de profesionales',
    DE: 'Zugang zu Profi-Texten'
  },
  'features.pro.description': {
    FR: 'Profite d\'un arsenal de messages éprouvés pour PPV & upsells.',
    EN: 'Benefit from an arsenal of proven messages for PPV & upsells.',
    ES: 'Aprovecha un arsenal de mensajes probados para PPV y upsells.',
    DE: 'Profitiere von einem Arsenal bewährter Nachrichten für PPV & Upsells.'
  },

  // How It Works Section
  'howItWorks.title': {
    FR: 'ChatFloww leur fait exploser les ventes… et toi ? 🔥',
    EN: 'ChatFloww makes their sales explode... what about you? 🔥',
    ES: 'ChatFloww hace explotar sus ventas... ¿y tú? 🔥',
    DE: 'ChatFloww lässt ihre Verkäufe explodieren... und du? 🔥'
  },
  'howItWorks.subtitle': {
    FR: 'Direct. Efficace. Boom ! 💥',
    EN: 'Direct. Efficient. Boom! 💥',
    ES: 'Directo. Eficiente. ¡Boom! 💥',
    DE: 'Direkt. Effizient. Boom! 💥'
  },
  'howItWorks.step1.title': {
    FR: 'Classe tes phrases et accroches',
    EN: 'Organize your phrases and hooks',
    ES: 'Organiza tus frases y ganchos',
    DE: 'Organisiere deine Sätze und Hooks'
  },
  'howItWorks.step1.description': {
    FR: 'Organise tes meilleures punchlines par catégories : PPV, upsells, objections...',
    EN: 'Organize your best punchlines by categories: PPV, upsells, objections...',
    ES: 'Organiza tus mejores punchlines por categorías: PPV, upsells, objeciones...',
    DE: 'Organisiere deine besten Punchlines nach Kategorien: PPV, Upsells, Einwände...'
  },
  'howItWorks.step2.title': {
    FR: 'Clique → colle instantanément',
    EN: 'Click → paste instantly',
    ES: 'Clic → pega instantáneamente',
    DE: 'Klick → sofort einfügen'
  },
  'howItWorks.step2.description': {
    FR: 'Un simple clic et ta phrase parfaite est collée dans ton chat. Fini les hésitations !',
    EN: 'A simple click and your perfect phrase is pasted in your chat. No more hesitation!',
    ES: 'Un simple clic y tu frase perfecta se pega en tu chat. ¡Se acabaron las vacilaciones!',
    DE: 'Ein einfacher Klick und dein perfekter Satz wird in deinen Chat eingefügt. Schluss mit dem Zögern!'
  },
  'howItWorks.step3.title': {
    FR: 'Réponds plus vite, encaisses plus',
    EN: 'Respond faster, earn more',
    ES: 'Responde más rápido, gana más',
    DE: 'Antworte schneller, verdiene mehr'
  },
  'howItWorks.step3.description': {
    FR: 'Gère plus de clients simultanément et multiplie tes revenus sans effort.',
    EN: 'Handle more clients simultaneously and multiply your revenue effortlessly.',
    ES: 'Maneja más clientes simultáneamente y multiplica tus ingresos sin esfuerzo.',
    DE: 'Betreue mehr Kunden gleichzeitig und multipliziere deine Einnahmen mühelos.'
  },

  // Testimonials Section
  'testimonials.title': {
    FR: '💬 Leur chatting n\'a plus rien à voir avec le classique.',
    EN: '💬 Their chatting has nothing to do with the classic anymore.',
    ES: '💬 Su chat ya no tiene nada que ver con el clásico.',
    DE: '💬 Ihr Chatten hat nichts mehr mit dem Klassischen zu tun.'
  },
  'testimonials.subtitle': {
    FR: 'Désormais, il est structuré, rapide et performant. Rejoignez des milliers de chatters qui transforment leurs résultats avec ChatFloww',
    EN: 'Now it\'s structured, fast and efficient. Join thousands of chatters transforming their results with ChatFloww',
    ES: 'Ahora es estructurado, rápido y eficiente. Únete a miles de chatters que transforman sus resultados con ChatFloww',
    DE: 'Jetzt ist es strukturiert, schnell und effizient. Schließe dich Tausenden von Chattern an, die ihre Ergebnisse mit ChatFloww transformieren'
  },

  // Final CTA Section
  'finalCta.title': {
    FR: 'Chaque détail compte… maximise ton CA dès maintenant ! ⚡💎',
    EN: 'Every detail counts... maximize your revenue right now! ⚡💎',
    ES: 'Cada detalle cuenta... ¡maximiza tu facturación ahora mismo! ⚡💎',
    DE: 'Jedes Detail zählt... maximiere jetzt deinen Umsatz! ⚡💎'
  },
  'finalCta.subtitle': {
    FR: 'Les meilleurs chatters utilisent ChatFloww pour écraser la concurrence.',
    EN: 'The best chatters use ChatFloww to crush the competition.',
    ES: 'Los mejores chatters usan ChatFloww para aplastar a la competencia.',
    DE: 'Die besten Chatter nutzen ChatFloww, um die Konkurrenz zu zermalmen.'
  },
  'finalCta.testimonial': {
    FR: '"Avec ChatFloww, je triple mon avance : mes phrases perso sont toutes prêtes en un clic, et l\'inspiration vient naturellement ! 🚀💎."',
    EN: '"With ChatFloww, I triple my lead: my personal phrases are all ready with one click, and inspiration comes naturally! 🚀💎."',
    ES: '"Con ChatFloww, triplico mi ventaja: mis frases personales están todas listas con un clic, ¡y la inspiración viene naturalmente! 🚀💎."',
    DE: '"Mit ChatFloww verdreifache ich meinen Vorsprung: Meine persönlichen Sätze sind alle mit einem Klick bereit, und die Inspiration kommt natürlich! 🚀💎."'
  },
  'finalCta.author': {
    FR: '— Sarah M., Top Chatter',
    EN: '— Sarah M., Top Chatter',
    ES: '— Sarah M., Top Chatter',
    DE: '— Sarah M., Top Chatter'
  },

  // Footer Section
  'footer.description': {
    FR: 'L\'outil ultime pour doubler ta vitesse de chat et multiplier tes revenus.',
    EN: 'The ultimate tool to double your chat speed and multiply your revenue.',
    ES: 'La herramienta definitiva para duplicar tu velocidad de chat y multiplicar tus ingresos.',
    DE: 'Das ultimative Tool, um deine Chat-Geschwindigkeit zu verdoppeln und deine Einnahmen zu multiplizieren.'
  },
  'footer.support': {
    FR: 'Support',
    EN: 'Support',
    ES: 'Soporte',
    DE: 'Support'
  },
  'footer.helpCenter': {
    FR: 'Centre d\'aide',
    EN: 'Help Center',
    ES: 'Centro de ayuda',
    DE: 'Hilfe-Center'
  },
  'footer.copyright': {
    FR: '© 2025 ChatFloww – Tous droits réservés. Toute copie ou reproduction entraînera des poursuites.',
    EN: '© 2025 ChatFloww – All rights reserved. Any copying or reproduction will result in prosecution.',
    ES: '© 2025 ChatFloww – Todos los derechos reservados. Cualquier copia o reproducción resultará en enjuiciamiento.',
    DE: '© 2025 ChatFloww – Alle Rechte vorbehalten. Jedes Kopieren oder Reproduzieren führt zu rechtlichen Schritten.'
  },
  'footer.tagline': {
    FR: 'Boostez vos conversations, multipliez vos revenus.',
    EN: 'Boost your conversations, multiply your revenue.',
    ES: 'Impulsa tus conversaciones, multiplica tus ingresos.',
    DE: 'Steigere deine Gespräche, multipliziere deine Einnahmen.'
  },

  // Privacy Policy Section
  'privacy.title': {
    FR: '📜 Politique de Confidentialité & Protection de ChatFloww',
    EN: '📜 Privacy Policy & ChatFloww Protection',
    ES: '📜 Política de Privacidad y Protección de ChatFloww',
    DE: '📜 Datenschutzrichtlinie & ChatFloww-Schutz'
  },
  'privacy.intellectual.title': {
    FR: 'Propriété intellectuelle',
    EN: 'Intellectual Property',
    ES: 'Propiedad Intelectual',
    DE: 'Geistiges Eigentum'
  },
  'privacy.intellectual.content': {
    FR: 'L\'outil ChatFloww, son nom, son logo, son interface et l\'ensemble de ses fonctionnalités sont protégés par les lois en vigueur sur le droit d\'auteur et la propriété intellectuelle. Toute reproduction, distribution, modification ou utilisation non autorisée de ChatFloww, en totalité ou en partie, est strictement interdite sans l\'accord écrit de on Nom du CEO de ChatFloww.',
    EN: 'The ChatFloww tool, its name, logo, interface and all its features are protected by current copyright and intellectual property laws. Any unauthorized reproduction, distribution, modification or use of ChatFloww, in whole or in part, is strictly prohibited without written consent from the ChatFloww CEO.',
    ES: 'La herramienta ChatFloww, su nombre, logotipo, interfaz y todas sus características están protegidas por las leyes actuales de derechos de autor y propiedad intelectual. Cualquier reproducción, distribución, modificación o uso no autorizado de ChatFloww, total o parcial, está estrictamente prohibido sin el consentimiento por escrito del CEO de ChatFloww.',
    DE: 'Das ChatFloww-Tool, sein Name, Logo, Interface und alle seine Funktionen sind durch geltende Urheberrechts- und Eigentumsgesetze geschützt. Jede unbefugte Reproduktion, Verbreitung, Änderung oder Nutzung von ChatFloww, ganz oder teilweise, ist ohne schriftliche Zustimmung des ChatFloww-CEOs strengstens untersagt.'
  },
  'privacy.data.title': {
    FR: 'Confidentialité et données',
    EN: 'Privacy and Data',
    ES: 'Privacidad y Datos',
    DE: 'Datenschutz und Daten'
  },
  'privacy.data.content': {
    FR: 'Les informations collectées via ChatFloww (données de connexion, préférences d\'utilisation, messages, etc.) sont utilisées uniquement pour améliorer l\'expérience utilisateur et ne seront jamais revendues à des tiers sans consentement.',
    EN: 'Information collected via ChatFloww (login data, usage preferences, messages, etc.) is used solely to improve user experience and will never be resold to third parties without consent.',
    ES: 'La información recopilada a través de ChatFloww (datos de conexión, preferencias de uso, mensajes, etc.) se utiliza únicamente para mejorar la experiencia del usuario y nunca se revenderá a terceros sin consentimiento.',
    DE: 'Über ChatFloww gesammelte Informationen (Anmeldedaten, Nutzungspräferenzen, Nachrichten usw.) werden ausschließlich zur Verbesserung der Benutzererfahrung verwendet und niemals ohne Zustimmung an Dritte weiterverkauft.'
  },
  'privacy.responsibility.title': {
    FR: 'Responsabilité et usage',
    EN: 'Responsibility and Usage',
    ES: 'Responsabilidad y Uso',
    DE: 'Verantwortung und Nutzung'
  },
  'privacy.responsibility.content': {
    FR: 'En utilisant ChatFloww, vous acceptez de respecter son usage conforme à la loi et aux présentes conditions. Toute tentative de copie, piratage, rétro-ingénierie ou redistribution non autorisée de l\'outil entraînera des poursuites judiciaires conformément aux articles L335-2 et suivants du Code de la Propriété Intellectuelle.',
    EN: 'By using ChatFloww, you agree to respect its lawful use and these terms. Any attempt to copy, hack, reverse engineer or unauthorized redistribution of the tool will result in legal action in accordance with applicable intellectual property laws.',
    ES: 'Al usar ChatFloww, aceptas respetar su uso conforme a la ley y estos términos. Cualquier intento de copia, pirateo, ingeniería inversa o redistribución no autorizada de la herramienta resultará en acciones legales de acuerdo con las leyes de propiedad intelectual aplicables.',
    DE: 'Durch die Nutzung von ChatFloww stimmen Sie zu, die rechtmäßige Nutzung und diese Bedingungen zu respektieren. Jeder Versuch des Kopierens, Hackens, Reverse Engineering oder unbefugter Weiterverteilung des Tools führt zu rechtlichen Schritten gemäß den geltenden Gesetzen zum geistigen Eigentum.'
  },
  'privacy.disclaimer.title': {
    FR: 'Disclaimer',
    EN: 'Disclaimer',
    ES: 'Disclaimer',
    DE: 'Haftungsausschluss'
  },
  'privacy.disclaimer.content': {
    FR: 'Nous nous réservons le droit de suspendre ou de supprimer l\'accès à ChatFloww en cas de non-respect de ces règles. L\'utilisation frauduleuse, abusive ou illicite pourra donner lieu à des sanctions civiles et pénales.',
    EN: 'We reserve the right to suspend or remove access to ChatFloww in case of non-compliance with these rules. Fraudulent, abusive or illicit use may result in civil and criminal sanctions.',
    ES: 'Nos reservamos el derecho de suspender o eliminar el acceso a ChatFloww en caso de incumplimiento de estas reglas. El uso fraudulento, abusivo o ilícito puede resultar en sanciones civiles y penales.',
    DE: 'Wir behalten uns das Recht vor, den Zugang zu ChatFloww bei Nichteinhaltung dieser Regeln zu sperren oder zu entfernen. Betrügerische, missbräuchliche oder rechtswidrige Nutzung kann zu zivil- und strafrechtlichen Sanktionen führen.'
  },
  'privacy.contact.title': {
    FR: 'Contact',
    EN: 'Contact',
    ES: 'Contacto',
    DE: 'Kontakt'
  },
  // WhatsApp message translation
  'contact.whatsapp.message': {
    FR: 'Bonjour, je suis intéressé par ChatFloww et j\'aimerais en savoir plus !',
    EN: 'Hello, I am interested in ChatFloww and would like to know more!',
    ES: 'Hola, estoy interesado en ChatFloww y me gustaría saber más!',
    DE: 'Hallo, ich bin an ChatFloww interessiert und möchte mehr erfahren!'
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
