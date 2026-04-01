import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import tukiLogo from "@/assets/tuki-logo.png";
import loginBg from "@/assets/login-bg.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<"home" | "login" | "register">("home");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  if (view === "home") {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-between bg-cover bg-center"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className="flex-1 flex flex-col items-center justify-center">
          <img src={tukiLogo} alt="TUKI" className="h-28 mb-4 animate-float" />
          <p className="text-muted-foreground font-body text-base text-center font-semibold">
            Aprender é uma aventura! 🚀
          </p>
        </div>

        <div className="w-full max-w-sm px-6 pb-12 flex gap-4">
          <Button
            onClick={() => setView("register")}
            variant="outline"
            size="xl"
            className="flex-1 bg-white/90 backdrop-blur-sm border-2 border-border text-foreground font-display font-bold rounded-2xl shadow-lg"
          >
            Cadastrar
          </Button>
          <Button
            onClick={() => setView("login")}
            size="xl"
            className="flex-1 font-display font-bold rounded-2xl shadow-lg"
          >
            Entrar
          </Button>
        </div>
      </div>
    );
  }

  const isRegister = view === "register";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="w-full max-w-sm flex flex-col items-center">
        <img src={tukiLogo} alt="TUKI" className="h-16 mb-6 animate-float" />

        <div className="w-full bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-border">
          <h2 className="text-xl font-display font-bold text-center text-foreground mb-6">
            {isRegister ? "Criar Perfil" : "Entrar"}
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

            {isRegister && (
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

            {isRegister && (
              <div>
                <label className="text-sm font-display font-bold text-foreground mb-1 block">
                  Escolha um avatar
                </label>
                <div className="flex gap-3 justify-center py-2">
                  {["🦁", "🐸", "🦊", "🐼", "🐱"].map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setSelectedAvatar(emoji)}
                      className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl card-bounce border-2 ${
                        selectedAvatar === emoji ? "border-primary" : "border-transparent"
                      } hover:border-primary`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button type="submit" className="w-full" size="xl">
              {isRegister ? "Criar Perfil" : "Entrar"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setView(isRegister ? "login" : "register")}
              className="text-sm text-primary font-bold font-display hover:underline"
            >
              {isRegister ? "Já tenho perfil" : "Criar novo perfil"}
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setView("home")}
          className="mt-4 text-sm text-foreground/70 font-display font-bold hover:underline"
        >
          ← Voltar
        </button>
      </div>
    </div>
  );
};

export default Login;
