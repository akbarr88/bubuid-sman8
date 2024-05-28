import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DataUserList({ lapor, index, currentPage }) {
  const token = localStorage.getItem("token");
  const [userDetail, setuserDetail] = useState(null);

  useEffect(() => {
    async function getUser() {
      const res = await axios.get(`http://localhost:3000/lapor/${lapor.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setuserDetail(res.data.data.User);
    }
    getUser();
  }, []);

  return (
    <tr className={index === 0 ? "" : "border-t-2 border-gray-200"}>
      <td>{index + 1 + (currentPage - 1) * 10}</td>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{lapor?.User?.nama}</div>
          </div>
        </div>
      </td>
      <td>{userDetail?.email}</td>
      <td>{userDetail?.umur}</td>
      <td>{userDetail?.jenis_kelamin}</td>
      <td>{userDetail?.sekolah}</td>
      <td className="text-center">
        <h3
          className={`px-2 py-1 text-white rounded ${
            lapor?.Status?.verified ? "bg-green-500" : "bg-red-500"
          } `}
        >
          {lapor?.Status?.verified ? "verified" : "unverified"}
        </h3>
      </td>
      <th></th>
    </tr>
  );
}