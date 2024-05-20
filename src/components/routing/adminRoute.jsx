import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getUsersById } from "../../redux/actions/datauser.action";

export default function AdminRoute() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("id_user");
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getUsersById(token, id));
  }, [id]);
  const { usersbyId = null } = useSelector((state) => state.datauser);
  if (!usersbyId) return <div>loading...</div>;
  const isAdmin = usersbyId.role === "admin";

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
}
