import { useMutation, useQueryClient } from "@tanstack/react-query";
import laporService from "../../services/lapor";

export default function UseDeleteLapor() {
  const queryClient = useQueryClient();
  const { mutate: deleteLaporan } = useMutation({
    mutationKey: ["deleteLaporan"],
    mutationFn: (id) => laporService.deleteLapor(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lapor"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { deleteLaporan };
}
