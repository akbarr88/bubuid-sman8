import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function Lapor() {
  const [dateValue, setDateValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [file, setFile] = useState(null);

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nilai dari text box:", inputValue);
    console.log("Tanggal laporan:", dateValue);
    
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#54BAB9] min-h-screen py-10">
        <h1 className="font-rufina text-center text-white text-4xl">Lapor</h1>
        <div className="bg-white min-w-min mx-40 mt-8 mb-20 rounded-3xl">
          <h1 className="font-poppins text-center text-3xl py-6">Form Laporan</h1>
          <form onSubmit={handleSubmit}>
            <div className="py-4 mx-20 font-poppins">
              <label htmlFor="dateValue">Tanggal laporan</label>
              <input
                type="date"
                id="dateValue"
                name="dateValue"
                value={dateValue}
                onChange={handleDateChange}
                required
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="py-4 mx-20 font-poppins">
              <label htmlFor="inputValue">Masukkan teks</label>
              <textarea
                id="inputValue"
                name="inputValue"
                value={inputValue}
                onChange={handleInputChange}
                required
                rows="6"
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="py-4 mx-20 font-poppins">
              <label htmlFor="file">Bukti (jika ada)</label><br></br>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="flex justify-center">
            <button className="my-8 font-poppins bg-[#18978F] text-white px-20 rounded-sm " type="submit">Buat Laporan</button>
            </div>
            
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Lapor;