import { useMutation } from "@tanstack/react-query";
import { RegisterEmployeeApi } from "../../utils/apiAdmin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useRegisterEmployee() {
  const navigate = useNavigate();
  const { mutate: registerEmployee, isPending: isLoading } = useMutation({
    mutationFn: (data) => RegisterEmployeeApi(data),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return { registerEmployee, isLoading };
}
