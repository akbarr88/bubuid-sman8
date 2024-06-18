import { useMutation } from "@tanstack/react-query";
import { imageService } from "../../services/imageService";

export default function uploadImage() {
  const { mutate: upload, data } = useMutation({
    mutationKey: ["upload"],
    mutationFn: (image) => imageService.uploadImage(image),
    onError: (error) => {
      console.log(error);
    },
  });

  return { upload, data };
}
