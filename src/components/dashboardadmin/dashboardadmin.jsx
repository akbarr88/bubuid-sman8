import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../navbar/navbaradmin";
import { getLapors } from "../../redux/actions/datalaporan.action";
import axios from "axios";

function DashboardAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, lapors } = useSelector((state) => state.lapor);
  const token = localStorage.getItem("token");

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
    <div className="overflow-x-auto bg-[#faffff] min-h-screen">
      <NavbarAdmin />
      <div className="mx-auto max-w-4xl mt-8">
        <div className="bg-blue-300 shadow-md p-4 text-white rounded-md">
          <h1 className="text-2xl font-bold mb-4 py-2">Dashboard Admin</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            <div className="bg-blue-500 text-white p-4 rounded-md">
              <h2 className="text-xl font-bold mb-2">Total Laporan</h2>
              <p>100</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-md">
              <h2 className="text-xl font-bold mb-2">Laporan Diterima</h2>
              <p>80</p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-md">
              <h2 className="text-xl font-bold mb-2">Laporan Ditolak</h2>
              <p>20</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-300 shadow-md p-4 mt-4 rounded-md">
          <h2 className="text-xl font-bold mb-4 text-white">Daftar Laporan Terbaru</h2>
          <div className="overflow-x-auto">
            <table className="table mt-8">
              <thead>
                <tr>
                  <th className="w-20">No</th>
                  <th className="w-60">Name</th>
                  <th className="w-80">Tanggal</th>
                  <th className="w-80">Keterangan</th>
                  <th className="w-20">Status</th>
                  <th className="w-20">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {lapors.slice(0, 3).map((lapor, index) => (
                  <tr
                    key={lapor.id}
                    className={index === 0 ? "" : "border-t-2 border-gray-200"}
                  >
                    <td className="text-center">{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold">{lapor?.User?.nama}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      {lapor.tanggal ? lapor.tanggal.substring(0, 10) : "-"}
                    </td>
                    <td>{lapor.keterangan}</td>
                    <td className="text-center">
                      <button
                        className={`px-2 py-1 text-white rounded ${
                          lapor?.Status?.verified ? "bg-green-500" : "bg-red-500"
                        } btn btn-ghost btn-xs`}
                        onClick={() => handleStatus(lapor.id, lapor.Status.verified)}
                      >
                        {lapor?.Status?.verified ? "verified" : "unverified"}
                      </button>
                    </td>
                    <td className="text-center">
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
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
