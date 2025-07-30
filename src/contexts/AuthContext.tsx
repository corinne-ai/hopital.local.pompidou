import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  service: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
  authenticateUser: (username: string, password: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Utilisateurs prédéfinis pour la simulation Keycloak
const users: Record<string, { password: string; user: User }> = {
  "dr.martin": {
    password: "bu181920",
    user: {
      id: "1",
      name: "Dr. Martin",
      service: "cardiologie",
      role: "Cardiologue"
    }
  },
  "m.justine": {
    password: "do181920",
    user: {
      id: "2",
      name: "M. Justine",
      service: "radiologie",
      role: "Radiologue"
    }
  },
  "c.corinne": {
    password: "mardi0205",
    user: {
      id: "3",
      name: "C. Corinne",
      service: "urgences",
      role: "Infirmière d'urgences"
    }
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    // Simuler l'ouverture de Keycloak avec une popup simple
    const username = prompt("Nom d'utilisateur Keycloak:");
    const password = prompt("Mot de passe:");
    
    if (username && password) {
      const userCredentials = users[username];
      if (userCredentials && userCredentials.password === password) {
        setUser(userCredentials.user);
        alert(`Connexion réussie! Bienvenue ${userCredentials.user.name}`);
      } else {
        alert("Identifiants incorrects. Veuillez réessayer.");
      }
    }
  };

  const logout = () => {
    setUser(null);
  };

  const authenticateUser = (username: string, password: string): boolean => {
    const userCredentials = users[username];
    if (userCredentials && userCredentials.password === password) {
      setUser(userCredentials.user);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, authenticateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};