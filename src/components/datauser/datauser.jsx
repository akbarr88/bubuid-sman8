import axios from "axios";
import React, { useEffect, useState } from "react";
import NavbarAdmin from "../navbar/navbaradmin";

function DataLaporan() {
  const [userDetail, setUserDetail] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc'); // State untuk pengurutan nama
  const token = localStorage.getItem("token");

  useEffect(() => {
    getAllUser();
  }, [currentPage]);

  const getAllUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/users?page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserDetail(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleNameSort = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Delete response:", response);
      getAllUser(); // Refresh the user list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (!userDetail) return <div>Loading...</div>;

  const sortedUsers = [...userDetail.data].sort((a, b) => {
    const nameA = a.nama.toUpperCase();
    const nameB = b.nama.toUpperCase();
    if (sortOrder === 'asc') {
      return nameA > nameB ? 1 : -1;
    } else {
      return nameA < nameB ? 1 : -1;
    }
  });

  return (
    <div className="overflow-x-auto bg-[#faffff] h-screen">
      <NavbarAdmin />
      <div className="mx-auto max-w-4xl">
        <h3 className="mt-8 text-2xl">Total User {userDetail?.totalItems}</h3>
        <table className="table">
          <thead>
            <tr>
              <th className="w-20">No</th>
              <th className="w-60 cursor-pointer" onClick={handleNameSort}>
                Name {sortOrder === 'asc' ? '▲' : '▼'}
              </th>
              <th className="w-80">Email</th>
              <th className="w-80">Umur</th>
              <th className="w-20">Jenis kelamin</th>
              <th className="w-20">Sekolah</th>
              <th className="w-20">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user, index) => (
              <tr
                key={user.id} // Changed key to user.id for better identification
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
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === userDetail.totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DataLaporan;
