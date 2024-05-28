import { useMutation } from "@tanstack/react-query";
import userService from "../../services/user";

export default function UseLoginUser() {
  const { mutate: login, ...rest } = useMutation({
    mutationKey: ["login"],
    mutationFn: (user) => userService.loginUser(user),
    onError: (error) => {
      console.log(error);
    },
  });

  return {
    login,
    ...rest,
  };
}
