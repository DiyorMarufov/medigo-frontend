import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const loginKey = "loginKey";

export const useLogin = () => {
  const client = useQueryClient();

  const adminLogin = useMutation({
    mutationFn: (data: any) =>
      api.post("admin/login", data).then((res) => res.data),
    onSuccess: () => client.invalidateQueries({ queryKey: [loginKey] }),
  });

  return { adminLogin };
};
