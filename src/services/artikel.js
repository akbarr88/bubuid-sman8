import api from "./axiosauth";

export default class artikelService {
  static async createArtikel(data) {
    const res = await api.post("/artikel", data);
    return res.data;
  }

  static async getArtikels() {
    const res = await api.get("/artikel");
    return res.data;
  }

  static async getArtikelId(id) {
    const res = await api.get(`/artikel/${id}`);
    return res.data;
  }
}
