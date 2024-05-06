import { useQuery } from "@tanstack/react-query";
import { getDesignations } from "../../utils/apiAdmin";

export default function useDesigntaion() {
  const { data, isLoading } = useQuery({
    queryKey: ["designations"],
    queryFn: getDesignations,
  });

  return { data, isLoading };
}
