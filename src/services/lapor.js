import api from "./axiosauth";

export default class laporService {
  static async getLapor({ currentPage }) {
    const res = await api.get(`/lapor?page=${currentPage}`);
    return res.data;
  }

  static async deleteLapor(id) {
    const res = await api.delete(`/lapor/${id}`);
    return res.data;
  }

  static async createLapor(formData) {
    const res = await api.post("/lapor", formData);
    return res.data;
  }
}
