import React, { createContext, useState } from "react";
import type { User, UserState } from "../types/user";

export const AuthContext = createContext<UserState>({
  user: null,
  setUser: null,
});

interface Props {
  children: React.ReactNode;
}

export function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
