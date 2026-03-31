import { Star, Flame, Trophy, Medal, Target, BookOpen, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const achievements = [
  { icon: "⭐", label: "Primeira Estrela", unlocked: true },
  { icon: "🔥", label: "Streak de 5 dias", unlocked: true },
  { icon: "📚", label: "10 Lições", unlocked: true },
  { icon: "🏆", label: "Mestre das Vogais", unlocked: false },
  { icon: "🎯", label: "100% numa lição", unlocked: false },
  { icon: "👑", label: "Nível 10", unlocked: false },
];

const stats = [
  { icon: BookOpen, label: "Lições", value: "12", color: "text-primary" },
  { icon: Star, label: "Estrelas", value: "24", color: "text-tuki-yellow" },
  { icon: Flame, label: "Streak", value: "5 dias", color: "text-tuki-red" },
  { icon: TrendingUp, label: "XP Total", value: "320", color: "text-tuki-green" },
];

const Perfil = () => {
  return (
    <div className="min-h-screen pb-20 bg-background">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-primary to-tuki-purple px-4 pt-8 pb-12 rounded-b-[2rem]">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-card flex items-center justify-center text-4xl shadow-xl border-4 border-primary-foreground/20 mb-3">
            🦁
          </div>
          <h1 className="text-xl font-display font-extrabold text-primary-foreground">Joãozinho</h1>
          <p className="text-primary-foreground/70 text-sm font-body">6 anos • Nível 4</p>
          <div className="mt-3 w-48">
            <div className="flex justify-between text-xs text-primary-foreground/70 mb-1 font-display">
              <span>Nível 4</span>
              <span>Nível 5</span>
            </div>
            <div className="h-2.5 bg-primary-foreground/20 rounded-full overflow-hidden">
              <div className="h-full bg-tuki-yellow rounded-full" style={{ width: "65%" }} />
            </div>
            <p className="text-center text-xs text-primary-foreground/60 mt-1 font-body">320 / 500 XP</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-4 -mt-6">
        <div className="grid grid-cols-4 gap-2">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card rounded-2xl p-3 text-center shadow-sm border border-border">
              <stat.icon size={20} className={`mx-auto mb-1 ${stat.color}`} />
              <p className="text-sm font-display font-bold text-foreground">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Section */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-display font-bold text-foreground mb-3 flex items-center gap-2">
          <Target size={20} className="text-primary" /> Progresso
        </h2>
        <div className="space-y-3">
          {[
            { label: "Alfabetização", value: 75, color: "bg-primary" },
            { label: "Matemática", value: 45, color: "bg-tuki-orange" },
            { label: "Cognitivo", value: 30, color: "bg-tuki-green" },
          ].map((p) => (
            <div key={p.label} className="bg-card rounded-xl p-3 border border-border">
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-display font-bold text-foreground">{p.label}</span>
                <span className="text-sm font-display font-bold text-muted-foreground">{p.value}%</span>
              </div>
              <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                <div className={`h-full ${p.color} rounded-full transition-all`} style={{ width: `${p.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-display font-bold text-foreground mb-3 flex items-center gap-2">
          <Trophy size={20} className="text-tuki-yellow" /> Conquistas
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {achievements.map((a) => (
            <div
              key={a.label}
              className={`flex flex-col items-center gap-1 p-3 rounded-2xl border border-border text-center transition-all ${
                a.unlocked ? "bg-card shadow-sm" : "bg-muted opacity-50"
              }`}
            >
              <span className="text-2xl">{a.icon}</span>
              <span className="text-[10px] font-display font-bold text-foreground leading-tight">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
