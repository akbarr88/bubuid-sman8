import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { submitLaporan } from "../../redux/actions/laporan.action";
import { useDispatch } from "react-redux";

function Lapor() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  // State untuk menyimpan nilai input
  const [formData, setFormData] = useState({
    tanggal: "",
    keterangan: "",
    // img: null, // Mengubah menjadi null karena akan menyimpan file
  });

  // Handler untuk mengubah nilai input
  const handleChange = (e) => {
    // Jika input adalah file, gunakan e.target.files[0] untuk mengakses file
    const value = e.target.name === "img" ? e.target.files[0] : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  // Handler untuk mengirim data
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi input
    if (!formData.tanggal || !formData.keterangan) {
      alert("Please fill all fields before submitting.");
      return;
    }
    
    // Buat FormData untuk mengirim data file
    // const formDataToSend = new FormData();
    // formDataToSend.append("tanggal", formData.tanggal);
    // formDataToSend.append("keterangan", formData.keterangan);
    // formDataToSend.append("img", formData.img); // File
    
    // Panggil action creator untuk mengirim data
    dispatch(submitLaporan(token, formData))
      .then(() => {
        alert("Data berhasil di submit!");
      })
      .catch((error) => {
        alert("Terjadi kesalahan saat mengirim data.");
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#54BAB9] min-h-screen py-10">
        <h1 className="font-rufina text-center text-white text-4xl">Lapor</h1>
        <div className="bg-white min-w-min mx-40 mt-8 mb-20 rounded-3xl">
          <h1 className="font-poppins text-center text-3xl py-6">Form Laporan</h1>
          <form onSubmit={handleSubmit}> {/* Tambahkan onSubmit */}
            <div className="py-4 mx-20 font-poppins">
              <label htmlFor="tanggal">Tanggal laporan</label>
              <input
                type="date"
                id="tanggal"
                name="tanggal"
                value={formData.tanggal}
                onChange={handleChange}
                required
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

            {/* <div className="py-4 mx-20 font-poppins">
              <label htmlFor="img">Bukti (jika ada)</label><br></br>
              <input
                type="file"
                id="img"
                name="img"
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div> */}

            <div className="flex justify-center">
              <button className="my-8 font-poppins bg-[#18978F] text-white px-20 rounded-sm" type="submit">
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
