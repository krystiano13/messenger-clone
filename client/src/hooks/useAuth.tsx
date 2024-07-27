import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  const auth = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (auth.user !== null) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [auth]);

  return { data: auth, loggedIn };
}
