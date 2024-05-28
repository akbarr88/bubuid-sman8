import { useQuery } from "@tanstack/react-query";
import artikelService from "../../services/artikel";

export default function UseGetArtikel() {
  const { data: artikels, isLoading } = useQuery({
    queryKey: ["artikel"],
    queryFn: () => artikelService.getArtikels(),
  });

  return { artikels, isLoading };
}
