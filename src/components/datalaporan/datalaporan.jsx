import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import UseDeleteLapor from "../../hook/lapor/useDeleteLapor";
import UseGetAllLapor from "../../hook/lapor/useGetAllLapor";
import isEmpty from "../../utils/empetyObject";
import NavbarAdmin from "../navbar/navbaradmin";
import FilterLaporan from "./filterLaporan";

function DataLaporan() {
  const navigate = useNavigate();
  const { lapors = [] } = UseGetAllLapor();
  const { deleteLaporan } = UseDeleteLapor();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(lapors.currentPage || 1);

  // State untuk modal
  const [showModal, setShowModal] = useState(false);
  const [selectedLapor, setSelectedLapor] = useState(null);

  // State untuk filter tanggal
  const [sortOrder, setSortOrder] = useState("desc"); // default: newest first

  if (isEmpty(lapors)) return <div>Loading...</div>;

  const openModal = (lapor) => {
    setSelectedLapor(lapor);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedLapor(null);
    setShowModal(false);
  };

  const handleDateSort = () => {
    setSortOrder((prevOrder) => (prevOrder === "desc" ? "asc" : "desc"));
  };

  const handleDelete = async (laporId) => {
    deleteLaporan(laporId);
  };

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

  // Sort data by date based on sortOrder
  const sortedLapors = lapors.data?.sort((a, b) => {
    const dateA = new Date(a.tanggal);
    const dateB = new Date(b.tanggal);
    return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="overflow-x-auto bg-[#faffff] h-screen">
      <NavbarAdmin />
      <div className="mx-auto max-w-4xl">
        <table className="table mt-8 w-full">
          <thead>
            <tr>
              <th className="w-20 text-left px-4 py-2">No</th>
              <th className="w-60 text-left px-4 py-2">Nama</th>
              <th
                className="w-32 text-left px-4 py-2 cursor-pointer"
                onClick={handleDateSort}
              >
                Tanggal {sortOrder === "desc" ? "▼" : "▲"}
              </th>
              <th className="w-40 text-left px-4 py-2">Keterangan</th>
              <th className="w-20 text-center px-4 py-2">Status</th>
              <th className="w-30 text-center px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedLapors?.map((lapor, index) => (
              <tr key={index}>
                <td className="px-4 py-2">
                  {index + 1 + (currentPage - 1) * 10}
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <div className="font-bold">{lapor?.User?.nama}</div>
                  </div>
                </td>
                <td className="px-1 py-2">
                  {lapor.tanggal ? lapor.tanggal.substring(0, 10) : "-"}
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    className="btn btn-ghost btn-xs mr-16"
                    onClick={() => openModal(lapor)}
                  >
                    Detail
                  </button>
                </td>
                <td className="px-3 py-2 text-center">
                  <h3
                    className={`px-1 py-1 text-white rounded ${
                      lapor?.Status?.verified ? "bg-green-500" : "bg-red-500"
                    } `}
                  >
                    {lapor?.Status?.verified ? "verified" : "unverified"}
                  </h3>
                </td>
                <td className="px-4 py-2 flex gap-2  justify-center items-center text-center">
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => navigate(`/sendemail/${lapor.id}`)}
                  >
                    Reply
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(lapor.id)}
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
          disabled={lapors?.currentPage === lapors?.totalPages}
        >
          Next
        </button>
        <FilterLaporan />
      </div>

      {showModal && selectedLapor && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md w-1/2">
            <h2 className="text-xl font-bold mb-4">Detail Keterangan</h2>
            <p>{selectedLapor.keterangan}</p>
            <img src={selectedLapor.img} />
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataLaporan;
