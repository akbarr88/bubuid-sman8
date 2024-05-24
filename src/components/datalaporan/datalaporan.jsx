import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLapors } from "../../redux/actions/datalaporan.action";
import isEmpty from "../../utils/empetyObject";
import NavbarAdmin from "../navbar/navbaradmin";

function DataLaporan() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, lapors } = useSelector((state) => state.lapor);
  const token = localStorage.getItem("token");
  const [currentPage, setCurrentPage] = useState(lapors.currentPage || 1);

  useEffect(() => {
    dispatch(getLapors(token, currentPage));
  }, [dispatch, token, currentPage]);

  if (isEmpty(lapors)) return <div>loading...</div>;

  return (
    <div className="overflow-x-auto bg-[#faffff] h-screen">
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
            {lapors?.data?.map((lapor, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{index + 1}</td>
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
                  <h3
                    className={`px-2 py-1 text-white rounded ${
                      lapor?.Status?.verified ? "bg-green-500" : "bg-red-500"
                    } `}
                  >
                    {lapor?.Status?.verified ? "verified" : "unverified"}
                  </h3>
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
          disabled={lapors.currentPage === lapors.totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DataLaporan;
