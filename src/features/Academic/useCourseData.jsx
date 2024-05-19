import { useQuery } from "@tanstack/react-query";
import { getCourseData } from "../../utils/apiAcademic";

export default function useCourseData() {
  const { data, isLoading } = useQuery({
    queryKey: ["course"],
    queryFn: getCourseData,
  });

  return { data, isLoading };
}
