import { useQuery } from "@tanstack/react-query";
import { authenticatedUserData } from "../../utils/apiLoginRegister";

export default function useLoginData() {
  const { data, isLoading } = useQuery({
    queryKey: ["login"],
    queryFn: authenticatedUserData,
  });

  console.log(isLoading);
  return { data, isLoading };
}
