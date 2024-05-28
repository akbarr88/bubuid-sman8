import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UseCreateLapor from "../../hook/lapor/useCreateLapor";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function Lapor() {
  const dispatch = useDispatch();
  const { createLapor } = UseCreateLapor();
  const token = localStorage.getItem("token");

  // State untuk menyimpan nilai input
  const [formData, setFormData] = useState({
    tanggal: "",
    keterangan: "",
  });

  // State untuk menyimpan tanggal hari ini
  const [today, setToday] = useState("");

  useEffect(() => {
    // Mendapatkan tanggal hari ini dalam format yyyy-mm-dd
    const todayDate = new Date().toISOString().split("T")[0];
    setToday(todayDate);
  }, []);

  // Handler untuk mengubah nilai input
  const handleChange = (e) => {
    const value = e.target.name === "img" ? e.target.files[0] : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  // Handler untuk mengirim data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.tanggal || !formData.keterangan) {
      alert("Please fill all fields before submitting.");
      return;
    }
    createLapor(formData);
    setFormData({ tanggal: "", keterangan: "" });
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#54BAB9] min-h-screen py-10">
        <h1 className="font-rufina text-center text-white text-4xl">Lapor</h1>
        <div className="bg-white min-w-min mx-40 mt-8 mb-20 rounded-3xl">
          <h1 className="font-poppins text-center text-3xl py-6">
            Form Laporan
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="py-4 mx-20 font-poppins">
              <label htmlFor="tanggal">Tanggal laporan</label>
              <input
                type="date"
                id="tanggal"
                name="tanggal"
                value={formData.tanggal}
                onChange={handleChange}
                required
                max={today} // Batas maksimal tanggal adalah hari ini
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="py-4 mx-20 font-poppins">
              <label htmlFor="keterangan">Masukkan teks</label>
              <textarea
                id="keterangan"
                name="keterangan"
                value={formData.keterangan}
                onChange={handleChange}
                required
                rows="6"
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="my-8 font-poppins bg-[#18978F] text-white px-20 rounded-sm"
                type="submit"
              >
                Buat Laporan
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Lapor;
