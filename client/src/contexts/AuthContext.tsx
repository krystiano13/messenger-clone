import React, { createContext, useState, useEffect } from "react";
import type { User, UserState } from "../types/user";
import { useLocation, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "../components/Spinner/Spinner";

export const AuthContext = createContext<UserState>({
  user: {
    id: -1,
    email: "",
    accessToken: "",
    username: "",
  },
  setUser: () => {},
});

interface Props {
  children: React.ReactNode;
}

export function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<User>({
    id: -1,
    email: "",
    accessToken: "",
    username: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  async function refreshToken() {
    const res = await fetch("http://127.0.0.1:3000/users/tokens/refresh", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
      },
    });

    const data: {
      resource_owner: { id: number ,email: string };
      token: string;
    } = await res.json();
    return data;
  }

  const refreshMutation = useMutation({
    mutationFn: refreshToken,
  });

  useEffect(() => {
    refreshMutation.mutateAsync().then((res) => {
      setUser({
        id: res.resource_owner.id,
        username: localStorage.getItem("username") as string,
        email: res.resource_owner.email,
        accessToken: res.token,
      });
    });
  }, []);

  useEffect(() => {
    if (!user.accessToken || !user.email) {
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
      {refreshMutation.isPending && <Spinner />}
      {refreshMutation.isError ||
        (refreshMutation.isSuccess && <>{children}</>)}
    </AuthContext.Provider>
  );
}
