import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UseDeleteUser from "../../hook/user/useDeleteUser";
import UseGetAllUser from "../../hook/user/useGetAllUser";
import NavbarAdmin from "../navbar/navbaradmin";

function DataLaporan() {
  const { userDetail = [] } = UseGetAllUser();
  const { deleteUser } = UseDeleteUser();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const token = localStorage.getItem("token");

  const handleNameSort = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Apakah yakin ingin menghapus data user ini?")) {
      deleteUser(userId);
      toast.success("Data user berhasil dihapus!");
    }
  };

  if (!userDetail) return <div>Loading...</div>;

  const sortedUsers = userDetail?.data?.sort((a, b) => {
    const nameA = a.nama.toUpperCase();
    const nameB = b.nama.toUpperCase();
    if (sortOrder === "asc") {
      return nameA > nameB ? 1 : -1;
    } else {
      return nameA < nameB ? 1 : -1;
    }
  });

  function prevPage() {
    const current = currentPage - 1;
    setCurrentPage(current);
    searchParams.set("page", current);
    setSearchParams(searchParams);
  }

  function nextPage() {
    const current = currentPage + 1;
    setCurrentPage(current);
    searchParams.set("page", current);
    setSearchParams(searchParams);
  }

  return (
    <div className="overflow-x-auto bg-[#faffff] h-screen">
      <NavbarAdmin />
      <ToastContainer />
      <div className="mx-auto max-w-4xl">
        <h3 className="mt-8 text-2xl">Total User {userDetail?.totalItems}</h3>
        <table className="table">
          <thead>
            <tr>
              <th className="w-4">No</th>
              <th className="w-60 cursor-pointer" onClick={handleNameSort}>
                Name {sortOrder === "asc" ? "▲" : "▼"}
              </th>
              <th className="w-20">Email</th>
              <th className="w-20">Umur</th>
              <th className="w-20">Jenis kelamin</th>
              <th className="w-32">Kelas</th>
              <th className="w-40">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers?.map((user, index) => (
              <tr
                key={user.id}
                className={index === 0 ? "" : "border-t-2 border-gray-200"}
              >
                <td>{index + 1 + (currentPage - 1) * 10}</td>
                <td>
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold">{user?.nama}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.umur}</td>
                <td>{user.jenis_kelamin}</td>
                <td>{user.sekolah}</td>
                <td>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination flex items-center justify-center mt-4 mb-8">
        <button
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md mr-2"
          onClick={() => prevPage()}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-3 py-1 bg-blue-400 text-gray-700 rounded-md mr-2">
          {currentPage}
        </span>
        <button
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md mr-2"
          onClick={() => nextPage()}
          disabled={currentPage === userDetail.totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DataLaporan;
