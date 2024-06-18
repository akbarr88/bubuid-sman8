import { useQuery } from "@tanstack/react-query";
import { notificationService } from "../../services/notification";

export default function UserNotification() {
  const { data: notification } = useQuery({
    queryKey: ["notification"],
    queryFn: () => notificationService.getNotification(),
  });

  return { notification };
}
