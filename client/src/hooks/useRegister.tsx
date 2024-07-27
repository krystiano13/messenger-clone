import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export function useRegister() {
  const [errors, setErrors] = useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors([]);

    const formData = await new FormData(e.target as HTMLFormElement);

    const res = await fetch("http://127.0.0.1:3000/users/tokens/sign_up", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.error_description) {
      setErrors([...data.error_description]);
    }

    return data;
  }

  const mutation = useMutation({
    mutationFn: handleSubmit,
  });

  return {
    errors,
    mutation,
    handleSubmit,
  };
}
