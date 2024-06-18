import api from "./axiosauth";

export class notificationService {
  static async getNotification() {
    const res = await api.get("/notification");
    return res.data;
  }

  static async readAllNotification() {
    const res = await api.patch("/notification/update");
    return res.data;
  }
}
