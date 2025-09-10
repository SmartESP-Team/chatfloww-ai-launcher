import { Clock, DollarSign, BookOpen, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Clock,
      title: t('features.speed.title'),
      description: t('features.speed.description'),
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: t('features.revenue.title'),
      description: t('features.revenue.description'),
      color: "text-accent"
    },
    {
      icon: BookOpen,
      title: t('features.punchlines.title'),
      description: t('features.punchlines.description'),
      color: "text-primary"
    },
    {
      icon: Zap,
      title: t('features.pro.title'),
      description: t('features.pro.description'),
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 text-center group hover:scale-105"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-hero mb-6 ${feature.color}`}>
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;