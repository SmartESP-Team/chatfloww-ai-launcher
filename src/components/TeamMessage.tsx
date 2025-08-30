import { useLanguage } from "@/contexts/LanguageContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";

const TeamMessage = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Sarah",
      image: teamMember1,
      fallback: "SA"
    },
    {
      name: "Alex",
      image: teamMember2,
      fallback: "AL"
    },
    {
      name: "Emma",
      image: teamMember3,
      fallback: "EM"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('team.title')}
          </h2>
          
          <div className="flex justify-center mb-8 space-x-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <Avatar className="w-20 h-20 md:w-24 md:h-24 border-3 border-primary/30 shadow-lg ring-2 ring-primary/20 transition-transform hover:scale-105">
                  <AvatarImage 
                    src={member.image} 
                    alt={`Photo de profil de ${member.name}`} 
                    className="object-cover object-center"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-bold text-lg">
                    {member.fallback}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-foreground/80">{member.name}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-card p-8 rounded-3xl shadow-card border border-border/50">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              {t('team.message1')}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              {t('team.message2')}
            </p>
            <p className="text-lg md:text-xl text-primary font-semibold">
              {t('team.message3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMessage;