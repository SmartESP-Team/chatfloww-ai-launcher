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
          
          <div className="flex justify-center mb-8 space-x-4">
            {teamMembers.map((member, index) => (
              <Avatar key={index} className="w-16 h-16 border-2 border-primary/20">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {member.fallback}
                </AvatarFallback>
              </Avatar>
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