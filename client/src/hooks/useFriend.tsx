import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useAuth } from "./useAuth";

export function useFriend(id: string) {
  const auth = useAuth();
  const navigate = useNavigate();

  const friendQuery = useQuery({
    queryKey: ["single_friend"],
    queryFn: () => getFriendData(id),
  });

  async function getFriendData(id: string) {
    const res = await fetch(`http://127.0.0.1:3000/api/friends/id/${id}`);
    const data = await res.json();

    console.log(data);

    if (data.friend.user_id !== auth.auth.user.id) {
      navigate("/friends");
    }

    return data;
  }

  return friendQuery;
}
