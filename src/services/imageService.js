import axios from "axios";
import api from "./axiosauth";

export class imageService {
  static async uploadImage(image) {
    const formData = new FormData();
    formData.append("file", image);
    const res = await axios.post(
      "http://localhost:3000/image/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data;
  }

  static async deleteImage(imageName) {
    const res = await api.delete(`image/delete/${imageName}`);
    return res.data;
  }
}
