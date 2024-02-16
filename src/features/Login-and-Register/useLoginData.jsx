import { useQuery } from "@tanstack/react-query";
import { authenticateUserData } from "../../utils/apiLoginRegister";

export default function useLoginData() {
  const { data, isLoading } = useQuery({
    queryKey: ["login"],
    queryFn: authenticateUserData,
  });

  return { data, isLoading };
}
