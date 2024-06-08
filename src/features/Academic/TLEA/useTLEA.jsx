import { useMutation, useQuery } from "@tanstack/react-query";
import { getISTHDataApi, insertMulISTHApi } from "../../../utils/apiAcademic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useTLEAData(tag) {
  const { data, isLoading } = useQuery({
    queryKey: [tag],
    queryFn: () => getISTHDataApi(tag),
  });
  return { data, isLoading };
}

export function useTLEA(tag, nav) {
  const navigate = useNavigate();
  const { mutate: insertMul, isPending: isLoading } = useMutation({
    mutationFn: (data) => insertMulISTHApi(data, tag),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate(nav);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { insertMul, isLoading };
}
