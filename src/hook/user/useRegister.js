import { useMutation } from "@tanstack/react-query";
import userService from "../../services/user";

export default function UseRegister() {
  const { mutate: register } = useMutation({
    mutationKey: ["register"],
    mutationFn: (user) => userService.registerUser(user),
  });

  return { register };
}
