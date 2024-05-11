import React from "react";
import NavbarAdmin from "../navbar/navbaradmin";

function DashboardAdmin() {
  return (
    <div className="min-h-screen bg-[#329694]">
      <NavbarAdmin />
      <div className="bg-[#54BAB9] shadow-md p-4 text-white">
        <h1 className="text-2xl font-bold mb-4 py-2">Dashboard Admin</h1>
        <div className="grid grid-cols-4 gap-4">
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
      <div className="bg-[#54BAB9] shadow-md p-4 mt-4 py-2">
        <h2 className="text-xl font-bold mb-4 text-white">Daftar Laporan Terbaru</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-white" scope="col">No</th>
              <th className="px-4 py-2 text-white" scope="col">Dari</th>
              <th className="px-4 py-2 text-white" scope="col">Tanggal</th>
              <th className="px-4 py-2 text-white" scope="col">Isi Laporan</th>
              <th className="px-4 py-2 text-white" scope="col">Bukti</th>
              <th className="px-4 py-2 text-white" scope="col">Status</th>
              
            </tr>
          </thead>
          <tbody>
            <tr key="1">
              <td className="border border-gray-200 px-4 py-2 text-white text-center">1</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">Agus</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">2024-01-01</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">Lorem ipsum dolor sit amet.</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">img</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">Diterima</td>
            </tr>
            <tr key="2">
              <td className="border border-gray-200 px-4 py-2 text-white text-center">2</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">Rio</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">2024-01-02</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">Consectetur adipiscing elit.</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">img</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">Ditolak</td>
            </tr>
            <tr key="3">
              <td className="border border-gray-200 px-4 py-2 text-white text-center">3</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">Riska</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">2024-01-03</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">Sed do eiusmod tempor incididunt.</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">img</td>
              <td className="border border-gray-200 px-4 py-2 text-white text-center">Diterima</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardAdmin;