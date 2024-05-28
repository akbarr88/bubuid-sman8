import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import userService from "../../services/user";

export default function UseGetAllUser() {
  const [searchParam] = useSearchParams();
  const page = !searchParam.get("page") ? 1 : Number(searchParam.get("page"));

  const { data: userDetail, ...rest } = useQuery({
    queryKey: ["users", page],
    queryFn: () => userService.getUser({ currentPage: page }),
  });

  return {
    userDetail,
    ...rest,
  };
}
