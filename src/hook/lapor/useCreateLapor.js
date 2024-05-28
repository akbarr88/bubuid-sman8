import { useMutation } from "@tanstack/react-query";
import laporService from "../../services/lapor";

export default function UseCreateLapor() {
  const { mutate: createLapor } = useMutation({
    mutationKey: ["deleteLaporan"],
    mutationFn: (formData) => laporService.createLapor(formData),
    onSuccess: () => {
      alert("Laporan Berhasil");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { createLapor };
}
