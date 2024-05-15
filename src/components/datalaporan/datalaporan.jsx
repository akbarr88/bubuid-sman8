import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLapors } from "../../redux/actions/datalaporan.action"; // Sesuaikan dengan path ke file actions Anda
import NavbarAdmin from "../navbar/navbaradmin";

function DataLaporan() {
  const dispatch = useDispatch();
  const { isLoading, lapors } = useSelector((state) => state.lapor);
  const token = localStorage.getItem("token");
  console.log(lapors);
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

  return (
    <div className="min-h-screen bg-[#329694]">
      <NavbarAdmin />

      <div className="bg-[#54BAB9] shadow-md p-4 mt-4 py-2">
        <h2 className="text-xl font-bold mb-4 text-white py-2">Data Laporan</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-white" scope="col">
                No
              </th>
              <th className="px-4 py-2 text-white" scope="col">
                Dari
              </th>
              <th className="px-4 py-2 text-white" scope="col">
                Tanggal
              </th>
              <th className="px-4 py-2 text-white" scope="col">
                Isi Laporan
              </th>
              <th className="px-4 py-2 text-white" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {lapors.map(
              (
                lapor,
                index // Mengubah laporan menjadi lapors
              ) => (
                <tr key={index}>
                  <td className="border border-gray-200 px-4 py-2 text-white text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-white text-center">
                    {lapor?.User?.nama}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-white text-center">
                    {lapor.createdAt
                      .split("T")[0]
                      .split("-")
                      .reverse()
                      .join("-")}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-white text-center">
                    {lapor.keterangan}
                  </td>
                  <td
                    className={` ${
                      lapor?.Status?.verified ? "bg-green-500" : "bg-red-500"
                    } border border-gray-200 px-4 py-2 text-white text-center`}
                  >
                    <button
                      onClick={() =>
                        handleStatus(lapor.id, lapor.Status.verified)
                      }
                    >
                      {lapor?.Status?.verified ? "verifeid" : "unverified"}
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        {isLoading && <p>Loading...</p>}{" "}
        {/* Mengubah loading menjadi isLoading */}
      </div>
    </div>
  );
}

export default DataLaporan;
