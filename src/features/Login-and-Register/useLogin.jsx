import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authenticateUser } from "../../utils/apiLoginRegister";

export default function useLogin() {
  const query = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: (data) => authenticateUser(data),
    onSuccess: (data) => {
      console.log(data);
      query.setQueriesData(["login"], data);
    },
  });

  return { login, isLoading };
}
