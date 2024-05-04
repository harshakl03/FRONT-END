import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEmployeeDetails } from "../../utils/apiEmployeeData";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useEditEmployee() {
  const query = useQueryClient();
  const navigate = useNavigate();
  const { mutate: editEmployee, isPending: isLoading } = useMutation({
    mutationFn: (data) => updateEmployeeDetails(data),
    onSuccess: (data) => {
      query.setQueryData(["employee-data"], data);
      toast.success("Profile data updated successfully");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
      navigate("/");
    },
  });

  return { editEmployee, isLoading };
}
