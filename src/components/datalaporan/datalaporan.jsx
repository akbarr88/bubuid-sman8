import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../navbar/navbaradmin";
import { getLapors } from "../../redux/actions/datalaporan.action";
import axios from "axios";

function DataLaporan() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, lapors } = useSelector((state) => state.lapor);
  const token = localStorage.getItem("token");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    dispatch(getLapors(token));
  }, [dispatch, token]);

  async function handleStatus(id, status) {
    console.log(id, status);
    const res = await axios.patch(
      `http://localhost:3000/lapor/${id}/${!status}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(res);
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = lapors.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="overflow-x-auto bg-[#faffff]">
      <NavbarAdmin />
      <div className="mx-auto max-w-4xl">
        <table className="table mt-8 w-full">
          <thead>
            <tr>
              <th className="w-20 text-left px-4 py-2">No</th>
              <th className="w-60 text-left px-4 py-2">Name</th>
              <th className="w-80 text-left px-4 py-2">Tanggal</th>
              <th className="w-80 text-left px-4 py-2">Keterangan</th>
              <th className="w-20 text-center px-4 py-2">Status</th>
              <th className="w-20 text-center px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((lapor, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{index + 1 + indexOfFirstItem}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <div className="font-bold">{lapor?.User?.nama}</div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  {lapor.tanggal ? lapor.tanggal.substring(0, 10) : "-"}
                </td>
                <td className="px-4 py-2">{lapor.keterangan}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    className={`px-2 py-1 text-white rounded ${
                      lapor?.Status?.verified ? "bg-green-500" : "bg-red-500"
                    } btn btn-ghost btn-xs`}
                    onClick={() => handleStatus(lapor.id, lapor.Status.verified)}
                  >
                    {lapor?.Status?.verified ? "verified" : "unverified"}
                  </button>
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => navigate(`/sendemail/${lapor.id}`)}
                  >
                    reply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {lapors.length > itemsPerPage && (
        <div className="pagination flex items-center justify-center mt-4 mb-8">
          <button
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md mr-2"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="px-3 py-1 bg-blue-400 text-gray-700 rounded-md mr-2">
            {currentPage}
          </span>
          <button
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md mr-2"
            onClick={handleNextPage}
            disabled={indexOfLastItem >= lapors.length}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default DataLaporan;
