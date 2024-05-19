import { useMutation } from "@tanstack/react-query";
import { apiDateSet } from "../../utils/apiAcademic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useDateSet() {
  const navigate = useNavigate();
  const { mutate: setDate, isPending: isLoading } = useMutation({
    mutationFn: (data) => apiDateSet(data),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/academic/tlea");
    },
    onError: (err) => toast.error(err.message),
  });

  return { setDate, isLoading };
}
