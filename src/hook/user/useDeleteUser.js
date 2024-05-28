import { useMutation, useQueryClient } from "@tanstack/react-query";
import userService from "../../services/user";

export default function UseDeleteUser() {
  const queryClient = useQueryClient();
  const { mutate: deleteUser } = useMutation({
    mutationKey: ["deleteUser"],
    mutationFn: (id) => userService.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { deleteUser };
}
