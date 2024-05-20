import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoute() {
  const [currentUser, setCurrentUser] = useState(null);

  const id = localStorage.getItem("id_user");
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function getUserId() {
      const res = await axios.get(`http://localhost:3000/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCurrentUser(res.data.data);
    }
    getUserId();
  }, [id]);

  if (!currentUser) return <div>loading...</div>;
  const isAdmin = currentUser.role === "admin";

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
}
