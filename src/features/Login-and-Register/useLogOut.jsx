import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogOut } from "../../utils/apiLoginRegister";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogOut() {
  const query = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: () => userLogOut(),
    onSuccess: (data) => {
      //console.log(data);
      toast.success("Logged out successfully");
      localStorage.removeItem("part-a");
      localStorage.removeItem("part-a/submitted");
      localStorage.removeItem("vtu-id");
      navigate("/");
      query.setQueriesData(["login"], data);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { logout, isLoading };
}
