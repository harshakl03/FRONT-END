import { useMutation } from "@tanstack/react-query";
import { changePasswordApi, forgotPasswordApi } from "../../utils/apiSetting";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useChangePassword() {
  const navigate = useNavigate();
  const { mutate: changePassword, isFetching: isLoading } = useMutation({
    mutationFn: (data) => changePasswordApi(data),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return { changePassword, isLoading };
}

export function useForgotPassword() {
  const navigate = useNavigate();
  const { mutate: forgotPassword, isFetching: isLoading } = useMutation({
    mutationFn: (data) => forgotPasswordApi(data),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return { forgotPassword, isLoading };
}
