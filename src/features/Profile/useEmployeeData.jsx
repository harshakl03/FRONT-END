import { useQuery } from "@tanstack/react-query";
import { getEmployeeData } from "../../utils/apiEmployeeData";

export default function useEmployeeData() {
  const { data, isLoading } = useQuery({
    queryKey: ["employee-data"],
    queryFn: getEmployeeData,
  });

  return { data, isLoading };
}
