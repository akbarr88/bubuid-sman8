import axios from "axios";
import React, { useEffect, useState } from "react";
import NavbarAdmin from "../navbar/navbaradmin";

function DataLaporan() {
  const [userDetail, setuserDetail] = useState(null);
  const [currentPage, setCurrentPage] = useState(userDetail?.currentPage || 1);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getAllUser() {
      const res = await axios.get(
        `http://localhost:3000/users?page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      setuserDetail(res.data);
    }
    getAllUser();
  }, [currentPage]);

  if (!userDetail) return <div>loading...</div>;

  return (
    <div className="overflow-x-auto bg-[#faffff] h-screen">
      <NavbarAdmin />
      <div className="mx-auto max-w-4xl">
        <h3 className="mt-8 text-2xl">Total User {userDetail?.totalItems}</h3>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="w-20">No</th>
              <th className="w-60">Name</th>
              <th className="w-80">Email</th>
              <th className="w-80">Umur</th>
              <th className="w-20">Jenis kelamin</th>
              <th className="w-20">Sekolah</th>
            </tr>
          </thead>
          <tbody>
            {userDetail?.data?.map((user, index) => (
              <tr
                key={index}
                className={index === 0 ? "" : "border-t-2 border-gray-200"}
              >
                <td>{index + 1 + (currentPage - 1) * 10}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{user?.nama}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.umur}</td>
                <td>{user.jenis_kelamin}</td>
                <td>{user.sekolah}</td>
                <th></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination flex items-center justify-center mt-4 mb-8">
        <button
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md mr-2"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-3 py-1 bg-blue-400 text-gray-700 rounded-md mr-2">
          {currentPage}
        </span>
        <button
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md mr-2"
          onClick={() => {
            alert("next");
            setCurrentPage(currentPage + 1);
          }}
          disabled={userDetail.currentPage === userDetail.totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DataLaporan;
