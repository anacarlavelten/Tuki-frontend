import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import tukiLogo from "@/assets/tuki-logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [isCreating, setIsCreating] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-tuki-yellow/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-32 h-32 bg-tuki-green/10 rounded-full blur-2xl" />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
        {/* Logo */}
        <img src={tukiLogo} alt="TUKI" className="h-20 mb-2 animate-float" />
        <p className="text-muted-foreground font-body text-sm mb-8 text-center">
          Aprender é uma aventura! 🚀
        </p>

        {/* Form Card */}
        <div className="w-full bg-card rounded-3xl p-6 shadow-xl border border-border">
          <h2 className="text-xl font-display font-bold text-center text-foreground mb-6">
            {isCreating ? "Criar Perfil" : "Entrar"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-display font-bold text-foreground mb-1 block">
                Nome da criança
              </label>
              <Input
                placeholder="Ex: Joãozinho"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl h-12 text-base font-body"
              />
            </div>

            {isCreating && (
              <div>
                <label className="text-sm font-display font-bold text-foreground mb-1 block">
                  Idade
                </label>
                <Input
                  type="number"
                  placeholder="Ex: 6"
                  min={2}
                  max={12}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="rounded-xl h-12 text-base font-body"
                />
              </div>
            )}

            {isCreating && (
              <div>
                <label className="text-sm font-display font-bold text-foreground mb-1 block">
                  Escolha um avatar
                </label>
                <div className="flex gap-3 justify-center py-2">
                  {["🦁", "🐸", "🦊", "🐼", "🐱"].map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl card-bounce border-2 border-transparent hover:border-primary"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button type="submit" className="w-full" size="xl">
              {isCreating ? "Criar Perfil" : "Entrar"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsCreating(!isCreating)}
              className="text-sm text-primary font-bold font-display hover:underline"
            >
              {isCreating ? "Já tenho perfil" : "Criar novo perfil"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
