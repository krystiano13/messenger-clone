import React, { createContext, useState, useEffect } from "react";
import type { User, UserState } from "../types/user";
import { useLocation, useNavigate } from "react-router";

export const AuthContext = createContext<UserState>({
  user: null,
  setUser: null,
});

interface Props {
  children: React.ReactNode;
}

export function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      if (location.pathname !== "/login" && location.pathname !== "/register") {
        navigate("/login");
      }
    } else {
      if (location.pathname === "/login" || location.pathname === "/register") {
        navigate("/");
      }
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
