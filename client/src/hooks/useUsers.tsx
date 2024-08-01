import { useQuery } from "@tanstack/react-query";

export function useUsers(search: string) {
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(search),
    enabled: search !== "",
  });

  async function getUsers(search: string) {
    const res = await fetch(`http://127.0.0.1:3000/api/users/${search}`);
    const data = await res.json();
    return data;
  }

  return usersQuery;
}
