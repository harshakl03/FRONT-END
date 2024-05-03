import { useMutation } from "@tanstack/react-query";
import { RegisterEmployeeApi } from "../../utils/apiAdmin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useRegisterEmployee() {
  const navigate = useNavigate();
  const { mutate: registerEmployee, isPending: isLoading } = useMutation({
    mutationFn: (data) => RegisterEmployeeApi(data),
    onSuccess: () => {
      toast.success("Registered User Successfully");
      navigate("/");
    },
    onError: () => toast.error("Error in registering user"),
  });

  return { registerEmployee, isLoading };
}
