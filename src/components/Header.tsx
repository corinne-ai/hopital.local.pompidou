import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Menu, Search, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import hospitalLogo from "@/assets/hospital-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, login, logout } = useAuth();

  const handleAuth = () => {
    if (user) {
      logout();
    } else {
      // Simuler l'ouverture de Keycloak
      login();
    }
  };

  return (
    <header className="bg-white shadow-medical border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-4">
            <span>📞 01 56 09 20 00</span>
            <span>✉️ contact@hegp.fr</span>
          </div>
          <div className="flex items-center gap-2">
            {user ? (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Connecté : {user.name}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleAuth}
                  className="h-8"
                >
                  <LogOut className="h-4 w-4" />
                  Déconnexion
                </Button>
              </div>
            ) : (
              <Button 
                variant="medical" 
                size="sm" 
                onClick={handleAuth}
                className="h-8"
              >
                Connexion Keycloak
              </Button>
            )}
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <img 
              src={hospitalLogo} 
              alt="Hôpital Georges Pompidou" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">
                Hôpital Européen Georges Pompidou
              </h1>
              <p className="text-sm text-muted-foreground">
                Excellence médicale et innovation
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button variant="secondary" size="sm">
              Nous rejoindre
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Search bar */}
        <div className="pb-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher un service, un médecin..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-3">
              <a href="#accueil" className="text-foreground hover:text-primary transition-colors py-2">
                Accueil
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors py-2">
                Services
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">
                Contact
              </a>
              <Button variant="secondary" size="sm" className="self-start">
                Nous rejoindre
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;