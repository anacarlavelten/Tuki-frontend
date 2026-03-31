import { BookOpen, Calculator, Brain, Headphones, BookMarked, Lock, CheckCircle2 } from "lucide-react";
import StatsBar from "@/components/StatsBar";

interface LessonCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  bgClass: string;
  status: "completed" | "current" | "locked";
  order: number;
}

const LessonCard = ({ title, description, icon, colorClass, bgClass, status, order }: LessonCardProps) => (
  <button
    disabled={status === "locked"}
    className={`w-full flex items-center gap-4 p-4 rounded-2xl border border-border shadow-sm card-bounce text-left transition-all ${
      status === "locked" ? "opacity-50 cursor-not-allowed bg-muted" : "bg-card"
    }`}
  >
    <div className={`relative p-3 rounded-xl ${bgClass} ${colorClass} shrink-0`}>
      {icon}
      {status === "completed" && (
        <CheckCircle2 size={16} className="absolute -top-1 -right-1 text-tuki-green fill-background" />
      )}
      {status === "locked" && (
        <Lock size={14} className="absolute -top-1 -right-1 text-muted-foreground" />
      )}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2">
        <span className="text-xs font-display font-bold text-muted-foreground">Lição {order}</span>
      </div>
      <h3 className="font-display font-bold text-foreground truncate">{title}</h3>
      <p className="text-xs text-muted-foreground font-body truncate">{description}</p>
    </div>
    {status === "current" && (
      <div className="shrink-0 px-3 py-1 bg-primary rounded-full">
        <span className="text-xs font-bold text-primary-foreground font-display">Jogar</span>
      </div>
    )}
  </button>
);

const lessons: LessonCardProps[] = [
  {
    title: "Vogais Mágicas",
    description: "Aprenda A, E, I, O, U com sons e imagens",
    icon: <BookOpen size={22} />,
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
    status: "completed",
    order: 1,
  },
  {
    title: "Números Divertidos",
    description: "Conte de 1 a 10 brincando",
    icon: <Calculator size={22} />,
    colorClass: "text-tuki-orange",
    bgClass: "bg-tuki-orange/10",
    status: "completed",
    order: 2,
  },
  {
    title: "Sílabas Dançantes",
    description: "Junte as letras e forme sílabas",
    icon: <Headphones size={22} />,
    colorClass: "text-tuki-green",
    bgClass: "bg-tuki-green/10",
    status: "current",
    order: 3,
  },
  {
    title: "Formas e Cores",
    description: "Identifique formas geométricas",
    icon: <Brain size={22} />,
    colorClass: "text-tuki-yellow",
    bgClass: "bg-tuki-yellow/10",
    status: "locked",
    order: 4,
  },
  {
    title: "Minha Primeira História",
    description: "Leia uma história interativa",
    icon: <BookMarked size={22} />,
    colorClass: "text-tuki-red",
    bgClass: "bg-tuki-red/10",
    status: "locked",
    order: 5,
  },
];

const categories = [
  { label: "Todas", active: true },
  { label: "Alfabetização", active: false },
  { label: "Matemática", active: false },
  { label: "Cognitivo", active: false },
];

const Atividades = () => {
  return (
    <div className="min-h-screen pb-20 bg-background">
      <div className="px-4 pt-6 pb-3">
        <h1 className="text-2xl font-display font-extrabold text-foreground">Atividades 📚</h1>
        <p className="text-sm text-muted-foreground font-body">Escolha uma lição para começar</p>
      </div>

      <div className="px-4 mb-4">
        <StatsBar />
      </div>

      {/* Categories */}
      <div className="px-4 mb-4 flex gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat.label}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-display font-bold transition-all ${
              cat.active
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Lessons */}
      <div className="px-4 space-y-3">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.order} {...lesson} />
        ))}
      </div>
    </div>
  );
};

export default Atividades;
