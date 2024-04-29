import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authenticateUser } from "../../utils/apiLoginRegister";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const query = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: (data) => authenticateUser(data),
    onSuccess: (data) => {
      //console.log(data);
      toast.success("Logged in successfully");
      navigate("/");
      query.setQueryData(["login"], data);
    },
    onError: (err) => {
      toast.error(err.message);
      navigate("/login");
    },
  });

  return { login, isLoading };
}
