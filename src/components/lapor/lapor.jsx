import React, { useEffect, useState } from "react";
import uploadImage from "../../hook/image/upload";
import UseCreateLapor from "../../hook/lapor/useCreateLapor";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function Lapor() {
  const { createLapor } = UseCreateLapor();
  const [today, setToday] = useState("");
  const [image, setImage] = useState(null);
  const { upload } = uploadImage();

  const [formData, setFormData] = useState({
    tanggal: "",
    keterangan: "",
  });

  useEffect(() => {
    // Mendapatkan tanggal hari ini dalam format yyyy-mm-dd
    const todayDate = new Date().toISOString().split("T")[0];
    setToday(todayDate);
  }, []);

  // Handler untuk mengubah nilai input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler untuk mengirim data
  const handleSubmit = (e) => {
    console.log(image);
    e.preventDefault();
    if (!formData.tanggal || !formData.keterangan) {
      alert("Please fill all fields before submitting.");
      return;
    }
    if (image) {
      upload(image, {
        onSuccess: (data) => {
          console.log(data);
          createLapor({ ...formData, img: data.imageUrl });
        },
      });
    } else {
      createLapor(formData);
    }
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
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#18978F] focus:border-[#18978F] sm:text-sm"
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
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#18978F] focus:border-[#18978F] sm:text-sm"
              />
              <label className="block mt-4" htmlFor="fotolaporan">
                Foto Laporan
              </label>
              <input
                name="fotolaporan"
                id="fotolaporan"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="file-input file-input-bordered file-input-[#18978F] w-full max-w-xs"
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
