import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import type { Friend } from "../types/friend";

type fn = React.Dispatch<React.SetStateAction<Friend[]>>;

export function useFriends(setFilteredFriends: fn) {
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
    setFilteredFriends(data.friends);
    return data;
  }

  return friendsQuery;
}
