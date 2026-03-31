import { Coins, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShopItemProps {
  emoji: string;
  name: string;
  price: number;
  category: string;
  owned?: boolean;
}

const ShopItem = ({ emoji, name, price, owned }: ShopItemProps) => (
  <div className="bg-card rounded-2xl p-4 border border-border shadow-sm flex flex-col items-center text-center card-bounce">
    <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-3xl mb-2">
      {emoji}
    </div>
    <h3 className="font-display font-bold text-sm text-foreground mb-1">{name}</h3>
    {owned ? (
      <span className="text-xs font-display font-bold text-tuki-green">✓ Obtido</span>
    ) : (
      <Button variant="tukiYellow" size="sm" className="mt-1 gap-1">
        <Coins size={14} />
        {price}
      </Button>
    )}
  </div>
);

const shopItems: ShopItemProps[] = [
  { emoji: "🦁", name: "Avatar Leão", price: 100, category: "avatars", owned: true },
  { emoji: "🐸", name: "Avatar Sapo", price: 100, category: "avatars" },
  { emoji: "🦊", name: "Avatar Raposa", price: 150, category: "avatars" },
  { emoji: "🐼", name: "Avatar Panda", price: 150, category: "avatars" },
  { emoji: "🦄", name: "Avatar Unicórnio", price: 300, category: "avatars" },
  { emoji: "🐉", name: "Avatar Dragão", price: 500, category: "avatars" },
  { emoji: "🌈", name: "Tema Arco-íris", price: 200, category: "temas" },
  { emoji: "🌙", name: "Tema Noturno", price: 200, category: "temas" },
  { emoji: "🎵", name: "Som Divertido", price: 50, category: "sons" },
  { emoji: "🎨", name: "Moldura Colorida", price: 75, category: "molduras" },
  { emoji: "✨", name: "Efeito Brilho", price: 120, category: "efeitos" },
  { emoji: "🎪", name: "Cenário Circo", price: 250, category: "cenarios" },
];

const categories = [
  { label: "Todos", active: true },
  { label: "Avatares", active: false },
  { label: "Temas", active: false },
  { label: "Efeitos", active: false },
];

const Loja = () => {
  return (
    <div className="min-h-screen pb-20 bg-background">
      {/* Header */}
      <div className="px-4 pt-6 pb-3 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-foreground flex items-center gap-2">
            <ShoppingBag className="text-tuki-purple" size={24} /> Loja
          </h1>
          <p className="text-sm text-muted-foreground font-body">Troque moedas por itens legais!</p>
        </div>
        <div className="flex items-center gap-1 bg-tuki-yellow/20 px-3 py-1.5 rounded-full">
          <Coins className="text-tuki-orange" size={18} />
          <span className="font-display font-bold text-foreground">150</span>
        </div>
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

      {/* Items Grid */}
      <div className="px-4 grid grid-cols-2 gap-3">
        {shopItems.map((item) => (
          <ShopItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Loja;
