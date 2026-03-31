import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Sparkles, BookOpen, Trophy } from "lucide-react";
import StatsBar from "@/components/StatsBar";
import tukiLogo from "@/assets/tuki-logo.png";
import heroImg from "@/assets/hero-illustration.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 bg-background">
      {/* Header */}
      <div className="px-4 pt-6 pb-3 flex items-center justify-between">
        <img src={tukiLogo} alt="TUKI" className="h-10" />
        <span className="text-sm font-bold font-display text-muted-foreground">Olá, Joãozinho! 👋</span>
      </div>

      {/* Stats */}
      <div className="px-4 mb-4">
        <StatsBar />
      </div>

      {/* Hero Card */}
      <div className="px-4 mb-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-tuki-purple shadow-xl">
          <div className="relative z-10 p-5">
            <h1 className="text-2xl font-display font-extrabold text-primary-foreground text-shadow-fun mb-1">
              Hora de aprender! 🎉
            </h1>
            <p className="text-primary-foreground/80 text-sm mb-4 font-body">
              Continue sua jornada de descobertas
            </p>
            <Button variant="tukiYellow" size="lg" onClick={() => navigate("/atividades")}>
              <Sparkles size={18} />
              Continuar
            </Button>
          </div>
          <img
            src={heroImg}
            alt="Crianças aprendendo"
            className="absolute right-0 bottom-0 h-32 opacity-30 object-cover rounded-br-3xl"
            width={200}
            height={128}
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-display font-bold mb-3 text-foreground">Explore</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: BookOpen, label: "Alfabetização", color: "bg-tuki-purple/10 text-primary", onClick: () => navigate("/atividades") },
            { icon: Star, label: "Matemática", color: "bg-tuki-yellow/10 text-tuki-orange", onClick: () => navigate("/atividades") },
            { icon: Sparkles, label: "Histórias", color: "bg-tuki-green/10 text-tuki-green", onClick: () => navigate("/atividades") },
            { icon: Trophy, label: "Conquistas", color: "bg-tuki-red/10 text-tuki-red", onClick: () => navigate("/perfil") },
          ].map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className={`flex flex-col items-center gap-2 p-5 rounded-2xl card-bounce bg-card border border-border shadow-sm`}
            >
              <div className={`p-3 rounded-xl ${item.color}`}>
                <item.icon size={24} />
              </div>
              <span className="text-sm font-display font-bold text-foreground">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Daily Progress */}
      <div className="px-4">
        <h2 className="text-lg font-display font-bold mb-3 text-foreground">Progresso Diário</h2>
        <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-body text-muted-foreground">Lições completas hoje</span>
            <span className="font-display font-bold text-primary">3/5</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-tuki-green rounded-full transition-all" style={{ width: "60%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
