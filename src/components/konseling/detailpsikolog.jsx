import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPsikologById } from "../../redux/actions/psikolog.action";
import { submitKonselingForm } from "../../redux/actions/konseling.action";

function DetailPsikolog() {
  const dispatch = useDispatch();
  const { isLoading, psikologsById } = useSelector((state) => state.psikolog);
  const token = localStorage.getItem("token");
  const idUser = localStorage.getItem("id_user");
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPsikologById(token, id));
  }, []);

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    no_hp: "",
    asal_sekolah: "",
    paket: "online",
    jadwal: "",
    keluhan: "",
    status: false,
    id_user: idUser,
    id_psikolog: id,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitKonselingForm(token, id, formData));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-fit m-auto text-center bg-[#54BAB9] text-white">
        <div className="p-10">
          <h1 className="text-3xl font-rufina mb-5">Profil Psikolog</h1>
          <p className="font-poppins text-sm">
            Kami akan membantu mendengarkan, meresapi, dan memecahkan setiap
            masalahmu!
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center p-10 gap-9">
        <div className="md:basis-1/5 font-poppins md:grid  md:place-content-between">
          <img
            src={psikologsById.gambar}
            alt=""
            className="w-full mb-5 rounded-md"
          />
          <button
            className="text-white bg-[#54BAB9] p-1 rounded-xl w-full hover:bg-[#9fe4e3]"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Konsultasi Sekarang
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form className="mx-auto mt-10">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    className="border rounded w-full py-2 px-3"
                    onChange={handleChange}
                    value={formData.nama}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border rounded w-full py-2 px-3"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    No. HP
                  </label>
                  <input
                    type="tel"
                    id="no_hp"
                    name="no_hp"
                    className="border rounded w-full py-2 px-3"
                    onChange={handleChange}
                    value={formData.no_hp}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="school"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Asal Sekolah
                  </label>
                  <input
                    type="text"
                    id="asal_sekolah"
                    name="asal_sekolah"
                    className="border rounded w-full py-2 px-3"
                    onChange={handleChange}
                    value={formData.asal_sekolah}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="onlineOffline"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Pilihan Online/Offline
                  </label>
                  <select
                    id="paket"
                    name="paket"
                    className="border rounded md:w-full py-2 px-3"
                    onChange={handleChange}
                    value={formData.paket}
                  >
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Tanggal
                  </label>
                  <input
                    type="date"
                    id="jadwal"
                    name="jadwal"
                    className="border rounded w-full py-2 px-3"
                    onChange={handleChange}
                    value={formData.jadwal}
                  />
                  <label className="label">
                    <span className="label-text-alt">{psikologsById.jadwal}</span>
                  </label>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="complaint"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Keluhan Anda
                  </label>
                  <textarea
                    id="keluhan"
                    name="keluhan"
                    className="border rounded w-full py-2 px-3"
                    onChange={handleChange}
                    value={formData.keluhan}
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-[#54BAB9] p-1 rounded-xl w-full hover:bg-[#9fe4e3]"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </dialog>
        </div>
        <div className="md:basis-1/2 p-10 bg-[#54BAB9] rounded-xl font-poppins">
          <h1 className="text-xl font-bold">{psikologsById.nama_psikolog}</h1>
          <div className="mt-2">
            <h1 className="text-white font-semibold mb-2">Biography</h1>
            <p className="text-sm">{psikologsById.biography}</p>
          </div>
          <div className="mt-2">
            <h1 className="text-white font-semibold mb-2">Pendidikan</h1>
            <ul className="list-disc text-sm">
              <li>{psikologsById.pendidikan}</li>
            </ul>
          </div>
          <div className="mt-2">
            <h1 className="text-white font-semibold mb-2">Jadwal Konseling</h1>
            <ul className="list-disc text-sm">
              <li>{psikologsById.jadwal}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h1 className="mb-5 text-xl font-bold font-poppins text-[#224F34] text-center">
          Testimoni
        </h1>
        <div className="flex flex-col md:flex-row gap-2 font-poppins justify-around">
          <div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-xs">
                <h2 className="font-semibold">Sarah Emelly</h2>
                <p>
                  The customer experience was exceptional from start to finish.
                  The website is user-friendly, the checkout process was smooth,
                  and the clothes I ordered fit perfectly. I'm beyond satisfied!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-xs">
                <h2 className="font-semibold">Sarah Emelly</h2>
                <p>
                  The customer experience was exceptional from start to finish.
                  The website is user-friendly, the checkout process was smooth,
                  and the clothes I ordered fit perfectly. I'm beyond satisfied!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-xs">
                <h2 className="font-semibold">Sarah Emelly</h2>
                <p>
                  The customer experience was exceptional from start to finish.
                  The website is user-friendly, the checkout process was smooth,
                  and the clothes I ordered fit perfectly. I'm beyond satisfied!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailPsikolog;
