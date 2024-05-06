import { useMutation } from "@tanstack/react-query";
import {
  AssignRoleApi,
  RegisterEmployeeApi,
  RegisterUserApi,
} from "../../utils/apiAdmin";
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

export function useRegisterUser() {
  const navigate = useNavigate();
  const { mutate: registerUser, isPending: isLoading } = useMutation({
    mutationFn: (data) => RegisterUserApi(data),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return { registerUser, isLoading };
}

export function useAssignRole() {
  const navigate = useNavigate();
  const { mutate: assignRole, isPending: isLoading } = useMutation({
    mutationFn: (data) => AssignRoleApi(data),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return { assignRole, isLoading };
}
