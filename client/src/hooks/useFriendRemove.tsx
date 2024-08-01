import { useMutation } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router";

export function useFriendRemove(id: string | number) {
  const auth = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: () => removeFriend(id),
    onError: (error) => {
      alert(error.message);
    },
    onSuccess: () => navigate("/friends"),
  });

  async function removeFriend(id: string | number) {
    const res = await fetch(`http://127.0.0.1:3000/api/friends/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${auth.auth.user.accessToken}`,
      },
    });

    const data = await res.json();
    console.log(data);
    return data;
  }

  return {
    mutation: mutation
  }
}
