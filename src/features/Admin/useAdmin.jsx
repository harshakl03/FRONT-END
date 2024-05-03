import { useMutation } from "@tanstack/react-query";
import { RegisterUserApi } from "../../utils/apiAdmin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useRegisterUser() {
  const navigate = useNavigate();
  const { mutate: registerUser, isPending: isLoading } = useMutation({
    mutationFn: (data) => RegisterUserApi(data),
    onSuccess: () => {
      toast.success("Registered User Successfully");
      navigate("/");
    },
    onError: () => toast.error("Error in registering user"),
  });

  return { registerUser, isLoading };
}
