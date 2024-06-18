import axios from "axios";
import api from "./axiosauth";

export default class userService {
  static async loginUser(user) {
    const response = await axios.post("http://localhost:3000/auth/login", user);
    return response.data;
  }
  static async registerUser(user) {
    const response = await axios.post(
      "http://localhost:3000/auth/register",
      user
    );
    return response.data;
  }

  static async getUser({ currentPage }) {
    const response = await api.get(`/users?page=${currentPage}`);
    return response.data;
  }

  static async deleteUser(id) {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  }
}
