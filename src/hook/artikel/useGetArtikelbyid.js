import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import artikelService from "../../services/artikel";

export default function UseGetArticleId() {
  const { id } = useParams();
  const { data: artikelDetail, isLoading } = useQuery({
    queryKey: ["artikel", id],
    queryFn: () => artikelService.getArtikelId(id),
  });

  return { artikelDetail, isLoading };
}
