import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getArtikels } from "../../redux/actions/artikel.action";

function Artikel() {
  const dispatch = useDispatch();
  const { isLoading, artikels } = useSelector((state) => state.artikel);
  const token = localStorage.getItem("token");


  useEffect(() => {
    dispatch(getArtikels(token));
    console.log(artikels);
  }, []);

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
            artikels.map((artikel) => (
              <div className="flex flex-col-reverse md:flex-row mb-16 items-center gap-10" key={artikel.id}>
                <div className="">
                  <h1 className="text-2xl font-bold">{artikel.judul}</h1>
                  <p className="py-6">
                    {artikel.highlight_isi}
                  </p>
                  <Link to={`/artikel/${artikel.id}`}>
                    <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md ">
                      Baca Selengkapnya
                    </button>
                  </Link>
                </div>
                  <img
                    src={artikel.gambar}
                    width={300}
                    className="rounded-3xl"
                  />
              </div>
            ))
          )}

          <div>
            <button className="btn btn-active btn-accent btn-xs sm:btn-sm md:btn-md ">
              Load More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Artikel;
