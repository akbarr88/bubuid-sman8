import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseGetArtikel from "../../hook/artikel/useGetArtikel";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function Artikel() {
  const { isLoading, artikels = {} } = UseGetArtikel();
  const artikelData = artikels?.data || [];

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  // Calculate the total number of pages
  const totalPages = Math.ceil(artikelData.length / articlesPerPage);

  // Get the articles for the current page
  const currentArticles = artikelData.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[url('/src/assets/frameArtikel.png')] hero min-h-full p-4 bg-opacity-50 ">
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Artikel</h1>
          </div>
        </div>
      </div>

      <div className="md:p-20">
        <div className="p-10 bg-slate-100 md:w-3/5/4 m-auto md:px-28 text-[#224F34] ">
          <h1 className="text-start mb-10 text-3xl font-bold">
            Temukan Artikel
          </h1>
          {isLoading ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            currentArticles.map((artikel) => (
              <div
                className="flex flex-col-reverse md:flex-row mb-16 items-center gap-10"
                key={artikel.id}
              >
                <div className="">
                  <h1 className="text-2xl font-bold">{artikel.judul}</h1>
                  <p className="py-6">{artikel.highlight_isi}</p>
                  <Link to={`/artikel/${artikel.id}`}>
                    <button className="btn btn-outline btn-xs sm:btn-sm md:btn-xs ">
                      Baca Selengkapnya
                    </button>
                  </Link>
                </div>
                <img src={artikel.gambar} width={300} className="rounded-3xl" alt="" />
              </div>
            ))
          )}

          <div className="flex justify-center mt-10">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`btn btn-xs sm:btn-sm md:btn-md ${currentPage === index + 1 ? "btn-active" : ""}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Artikel;
