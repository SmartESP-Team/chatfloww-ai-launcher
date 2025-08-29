import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface VideoPlayerProps {
  videoUrl?: string;
  placeholder?: string;
}

const VideoPlayer = ({ videoUrl, placeholder = "Vidéo de démonstration à venir..." }: VideoPlayerProps) => {
  const { t } = useLanguage();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleThumbnailClick = () => {
    if (videoUrl) {
      setIsVideoLoaded(true);
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

  if (!isVideoLoaded) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-gradient-card rounded-2xl p-4 border border-primary/20 shadow-glow">
        <div 
          className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
          onClick={handleThumbnailClick}
        >
          <img 
            src="https://i.postimg.cc/YSXq0v1g/Ctrl-alt-P.png" 
            alt="Aperçu de la vidéo"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
            <div className="bg-white/90 rounded-full p-4 group-hover:bg-white transition-colors duration-300">
              <svg 
                className="w-8 h-8 text-black ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-card rounded-2xl p-4 border border-primary/20 shadow-glow">
      <video 
        controls 
        autoPlay
        className="w-full aspect-video rounded-xl"
        poster="https://i.postimg.cc/YSXq0v1g/Ctrl-alt-P.png"
      >
        <source src={videoUrl} type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
    </div>
  );
};

export default VideoPlayer;
