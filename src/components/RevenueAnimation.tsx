import { useEffect, useState } from "react";
import { TrendingUp, DollarSign } from "lucide-react";

const RevenueAnimation = () => {
  const [revenue, setRevenue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setRevenue(prev => {
        const increase = Math.random() * 500 + 100;
        return prev + increase;
      });
      
      setTimeout(() => setIsAnimating(false), 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl shadow-2xl border border-green-400/50 transform transition-all duration-500 ${
        isAnimating ? "scale-110 shadow-green-500/50" : "scale-100"
      }`}>
        <div className="flex items-center gap-3 text-white">
          <div className="relative">
            <DollarSign className="w-6 h-6" />
            <TrendingUp className={`w-4 h-4 absolute -top-1 -right-1 transition-transform duration-300 ${
              isAnimating ? "animate-bounce" : ""
            }`} />
          </div>
          
          <div>
            <div className="text-xs opacity-90">Revenus générés</div>
            <div className="font-bold text-lg">
              {revenue.toLocaleString('fr-FR', {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 0
              })}
            </div>
          </div>
        </div>
        
        {/* Particules d'argent */}
        {isAnimating && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 100}ms`,
                  animationDuration: '600ms'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RevenueAnimation;