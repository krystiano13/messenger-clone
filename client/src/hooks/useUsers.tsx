import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useUsers(search: string) {
  const queryClient = useQueryClient();

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(search),
    enabled: search !== "",
  });

  const mutation = useMutation({
    mutationFn: (search: string) => getUsers(search),
    onSuccess: () => queryClient.refetchQueries({ queryKey: ["users"] }),
  });

  async function getUsers(search: string) {
    const res = await fetch(`http://127.0.0.1:3000/api/users/${search}`);
    const data = await res.json();
    console.log(data);
    return data;
  }

  return {
    query: usersQuery,
    mutation: mutation,
  };
}
