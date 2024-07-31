import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import type { FriendWithMessage } from "../types/friendMessage";

type fn = React.Dispatch<React.SetStateAction<FriendWithMessage[]>>;

export function useFriendsMessage(setFilteredFriends: fn) {
  const auth = useAuth();

  const friendsQuery = useQuery({
    queryKey: ["friends"],
    queryFn: getFriends,
  });

  async function getFriends() {
    const res = await fetch(
      `http://127.0.0.1:3000/api/friends/msg/${auth.auth.user.id}`
    );
    const data = await res.json();
    console.log(data);
    setFilteredFriends(data.friends);
    return data;
  }

  return friendsQuery;
}
