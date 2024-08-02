import { useQuery } from "@tanstack/react-query";

export function useUser(id: string | number) {
  async function getUser() {
    const res = await fetch(`http://127.0.0.1:3000/api/users/id/${id}`);
    const data = await res.json();
    return data;
  }

  return useQuery({
    queryKey: ["user"],
    queryFn: getUser
  });
}
