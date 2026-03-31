import { Star, Flame, Coins } from "lucide-react";

interface StatsBarProps {
  stars?: number;
  coins?: number;
  streak?: number;
  xp?: number;
}

const StatsBar = ({ stars = 24, coins = 150, streak = 5, xp = 320 }: StatsBarProps) => {
  return (
    <div className="flex items-center justify-between gap-2 px-4 py-2 bg-card rounded-2xl shadow-sm border border-border">
      <div className="flex items-center gap-1">
        <Star className="text-tuki-yellow fill-tuki-yellow" size={18} />
        <span className="text-sm font-bold font-display">{stars}</span>
      </div>
      <div className="flex items-center gap-1">
        <Coins className="text-tuki-orange" size={18} />
        <span className="text-sm font-bold font-display">{coins}</span>
      </div>
      <div className="flex items-center gap-1">
        <Flame className="text-tuki-red" size={18} />
        <span className="text-sm font-bold font-display">{streak} dias</span>
      </div>
      <div className="flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-full">
        <span className="text-xs font-bold font-display text-primary">{xp} XP</span>
      </div>
    </div>
  );
};

export default StatsBar;
