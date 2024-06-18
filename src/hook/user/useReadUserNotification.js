import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notificationService } from "../../services/notification";

export default function readAllNotification() {
  const queryClient = useQueryClient();
  const { mutate: readAll } = useMutation({
    mutationFn: () => notificationService.readAllNotification(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notification"] });
    },
  });

  return { readAll };
}
