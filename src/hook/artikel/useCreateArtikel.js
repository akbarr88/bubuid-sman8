import { useMutation } from "@tanstack/react-query";
import artikelService from "../../services/artikel";

export default function UseCreateArticle() {
  const { mutate: createArtikel } = useMutation({
    mutationKey: ["createArticle"],
    mutationFn: (data) => artikelService.createArtikel(data),
    onSuccess: () => {
      alert("Artikel Berhasil");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { createArtikel };
}
