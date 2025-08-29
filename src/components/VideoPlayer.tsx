import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface VideoPlayerProps {
  videoUrl?: string;
  placeholder?: string;
}

const VideoPlayer = ({ videoUrl, placeholder = "Vidéo de démonstration à venir..." }: VideoPlayerProps) => {
  const { t } = useLanguage();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleClick = () => {
    if (videoUrl) {
      setIsVideoPlaying(true);
    }
  };

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
      {!isVideoPlaying ? (
        <div
          className="aspect-video rounded-xl overflow-hidden cursor-pointer relative"
          onClick={handleClick}
        >
          <img
            src="https://i.postimg.cc/YSXq0v1g/Ctrl-alt-P.png"
            alt="Lecture vidéo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white/80 text-black px-4 py-2 rounded-full hover:bg-white">
              ▶️ {t("Lecteur vidéo") || "Cliquez pour lire"}
            </button>
          </div>
        </div>
      ) : (
        <video
          controls
          autoPlay
          className="w-full aspect-video rounded-xl"
        >
          <source src={videoUrl} type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
