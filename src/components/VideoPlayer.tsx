import { useLanguage } from "@/contexts/LanguageContext";

interface VideoPlayerProps {
  videoUrl?: string;
  placeholder?: string;
}

const VideoPlayer = ({ videoUrl, placeholder = "Vidéo de démonstration à venir..." }: VideoPlayerProps) => {
  const { t } = useLanguage();

  if (!videoUrl) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-gradient-card rounded-2xl p-8 border border-primary/20">
        <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🎬</div>
            <p className="text-muted-foreground text-lg">{placeholder}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-card rounded-2xl p-4 border border-primary/20 shadow-glow">
      <video 
        controls 
        className="w-full aspect-video rounded-xl"
        poster="/hero-dashboard.jpg"
      >
        <source src={videoUrl} type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
    </div>
  );
};

export default VideoPlayer;