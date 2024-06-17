import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseGetAllLapor from "../../hook/lapor/useGetAllLapor";
import NavbarAdmin from "../navbar/navbaradmin";

function DashboardAdmin() {
  const navigate = useNavigate();
  const { lapors = [] } = UseGetAllLapor();

  // State untuk modal
  const [showModal, setShowModal] = useState(false);
  const [selectedLapor, setSelectedLapor] = useState(null);

  const openModal = (lapor) => {
    setSelectedLapor(lapor);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedLapor(null);
    setShowModal(false);
  };

  // Urutkan laporan berdasarkan tanggal dari yang terbaru ke yang terlama
  const sortedLapors =
    lapors?.data?.sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal)) ||
    [];

  const unverified = (
    lapors?.totalItems - lapors?.totalLaporVerified
  ).toString();

  const obfuscateName = (name) => {
    const truncatedName = name.length > 14 ? name.substring(0, 14) : name;
    const nameArray = truncatedName.split('');
    const randomIndexes = new Set();
    while (randomIndexes.size < 2) {
      randomIndexes.add(Math.floor(Math.random() * truncatedName.length));
    }
    return nameArray.map((char, index) => randomIndexes.has(index) ? char : '*').join('');
  };

  return (
    <div className="overflow-x-auto bg-[#faffff] min-h-screen">
      <NavbarAdmin />
      <div className="mx-auto max-w-4xl mt-8">
        <div className="bg-blue-300 shadow-md p-4 text-white rounded-md">
          <h1 className="text-2xl font-bold mb-4 py-2">Dashboard Admin</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            <div className="bg-blue-500 text-white p-4 rounded-md">
              <h2 className="text-xl font-bold mb-2">Total Laporan</h2>
              <p>{lapors?.totalItems?.toString()}</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-md">
              <h2 className="text-xl font-bold mb-2">Verified</h2>
              <p>{lapors?.totalLaporVerified?.toString()}</p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-md">
              <h2 className="text-xl font-bold mb-2">Unverified</h2>
              <p>{unverified}</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-300 h-full shadow-md p-4 mt-4 rounded-md">
          <h2 className="text-xl font-bold mb-4 text-white">
            Daftar Laporan Terbaru
          </h2>
          <div className="overflow-x-auto">
            <table className="table mt-8">
              <thead>
                <tr>
                  <th className="w-20 text-left px-4 py-2">No</th>
                  <th className="w-60 text-left px-4 py-2">Nama</th>
                  <th className="w-32 text-left px-4 py-2">Tanggal</th>
                  <th className="w-40 text-left px-4 py-2">Keterangan</th>
                  <th className="w-20 text-center px-4 py-2">Status</th>
                  <th className="w-30 text-center px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedLapors?.slice(0, 3).map((lapor, index) => (
                  <tr
                    key={lapor.id}
                    className={index === 0 ? "" : "border-t-2 border-gray-200"}
                  >
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold">{obfuscateName(lapor?.User?.nama)}</div>
                        </div>
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
                    <td className="text-center">
                      <div
                        className={`px-2 py-1 text-white rounded ${
                          lapor?.Status?.verified
                            ? "bg-green-500"
                            : "bg-red-500"
                        } `}
                      >
                        {lapor?.Status?.verified ? "verified" : "unverified"}
                      </div>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => navigate(`/sendemail/${lapor.id}`)}
                      >
                        Reply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && selectedLapor && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md w-1/2">
            <h2 className="text-xl font-bold mb-4">Detail Keterangan</h2>
            <p>{selectedLapor?.keterangan}</p>
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

export default DashboardAdmin;
