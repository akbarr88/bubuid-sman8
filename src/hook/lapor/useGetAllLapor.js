import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import laporService from "../../services/lapor";

export default function UseGetAllLapor() {
  const [searchParam] = useSearchParams();
  const page = !searchParam.get("page") ? 1 : Number(searchParam.get("page"));
  const status = !searchParam.get("status") ? "all" : searchParam.get("status");

  const { data: lapors, ...rest } = useQuery({
    queryKey: ["lapor", page, status],
    queryFn: () => laporService.getLapor({ currentPage: page, status }),
  });

  return {
    lapors,
    ...rest,
  };
}
