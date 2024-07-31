import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export function useFriends() {
  const auth = useAuth();

  const friendsQuery = useQuery({
    queryKey: ["friend"],
    queryFn: getFriends,
  });

  async function getFriends() {
    const res = await fetch(
      `http://127.0.0.1:3000/api/friends/${auth.auth.user.id}`
    );
    const data = await res.json();
    return data;
  }

  return friendsQuery;
}
