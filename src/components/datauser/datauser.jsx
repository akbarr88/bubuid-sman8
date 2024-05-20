import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLapors } from "../../redux/actions/datalaporan.action";
import Modal from "../modal/modal";
import NavbarAdmin from "../navbar/navbaradmin";

function DataLaporan() {
  const [openModal, setOpenModal] = useState(false);
  const [userDetail, setuserDetail] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { isLoading, lapors } = useSelector((state) => state.lapor);
  const token = localStorage.getItem("token");
  const itemsPerPage = 15;

  useEffect(() => {
    dispatch(getLapors(token));
  }, [dispatch, token]);

  async function handleStatus(id, status) {
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

  const handleDetail = async (id) => {
    const res = await axios.get(`http://localhost:3000/lapor/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setuserDetail(res.data.data.User);
    setOpenModal((openModal) => !openModal);
  };

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
        <table className="table mt-8">
          {/* head */}
          <thead>
            <tr>
              <th className="w-20">No</th>
              <th className="w-60">Name</th>
              <th className="w-80">Tanggal</th>
              <th className="w-80">Keterangan</th>
              <th className="w-20">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((lapor, index) => (
              <tr
                key={index}
                className={index === 0 ? "" : "border-t-2 border-gray-200"}
              >
                <td>{index + 1 + indexOfFirstItem}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{lapor?.User?.nama}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {lapor.tanggal ? lapor.tanggal.substring(0, 10) : "-"}
                  <br />
                </td>
                <td>{lapor.keterangan}</td>
                <td className="text-center">
                  <button
                    className={`px-2 py-1 text-white rounded ${
                      lapor?.Status?.verified ? "bg-green-500" : "bg-red-500"
                    } btn btn-ghost btn-xs`}
                    onClick={() =>
                      handleStatus(lapor.id, lapor.Status.verified)
                    }
                  >
                    {lapor?.Status?.verified ? "verified" : "unverified"}
                  </button>
                </td>
                <th>
                  <button
                    onClick={() => handleDetail(lapor.id)}
                    className="btn btn-ghost btn-xs"
                  >
                    details
                  </button>
                </th>
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
            {currentPage === 1 ? "Prev" : currentPage - 1}
          </button>
          <span className="px-3 py-1 bg-blue-400 text-gray-700 rounded-md mr-2">
            {currentPage}
          </span>
          <button
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md mr-2"
            onClick={handleNextPage}
            disabled={indexOfLastItem >= lapors.length}
          >
            {currentPage + 1}
          </button>
        </div>
      )}
      <Modal isOpen={openModal} onClose={() => setOpenModal((modal) => !modal)}>
        <div className="w-full">
          <h2 className="text-2xl font-bold">Name</h2>
          <p className="mt-1 text-xl">{userDetail?.nama}</p>
          <h2 className="text-2xl mt-2 font-bold">Email</h2>
          <p className="mt-1 text-xl">{userDetail?.email}</p>
          <h2 className="text-2xl mt-2 font-bold">Umur</h2>
          <p className="mt-1 text-xl">{userDetail?.umur}</p>
          <h2 className="text-2xl mt-2 font-bold">Jenis Kelamin</h2>
          <p className="mt-1 text-xl">{userDetail?.jenis_kelamin}</p>
          <h2 className="text-2xl mt-2 font-bold">Sekolah</h2>
          <p className="mt-1 text-xl">{userDetail?.sekolah}</p>
        </div>
      </Modal>
    </div>
  );
}

export default DataLaporan;
