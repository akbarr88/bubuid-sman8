import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getArtikelById } from "../../redux/actions/artikel.action";
import logoFb from "../../assets/Logofb.png"
import logoGoogle from "../../assets/Logogugel.png"
import logoIg from "../../assets/Logoig.png"

function Bacaartikel() {
  const dispatch = useDispatch();
  const { isLoading, artikelbyId } = useSelector((state) => state.artikel);
  const token = localStorage.getItem("token");

  const { id } = useParams();

    useEffect(() => {
    dispatch(getArtikelById(token, id));
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="hero"
        style={{ backgroundImage: "url(src/assets/bacaartikel.jpeg)" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Artikel</h1>
          </div>
        </div>
      </div>

      <div className="md:p-10">
        <div className="p-10 bg-slate-100 font-poppins">
          <h1 className="font-bold text-center text-2xl">
            {artikelbyId.judul}
          </h1>
          <div className="grid grid-cols-1 justify-center items-center">
            <img
              src={artikelbyId.gambar}
              width={300}
              className="mx-auto mt-5 mb-5 rounded-md"
              alt=""
            />
            <p className="indent-8 font-sm tracking-normal">
              {artikelbyId.isi}
            </p>
          </div>
          <div className="justify-between p-2">
            <div className="flex gap-4 items-center left-content">
              <img src={artikelbyId.profil_penulis} width={30} alt="" />
              <div className="">
                <p>{artikelbyId.penulis}</p>
                <p>{artikelbyId.pekerjaan}</p>
              </div>
              <div className="flex gap-4">
                <a>
                  <img src={logoFb} width={20} alt="" />
                </a>
                <a>
                  <img src={logoGoogle} width={20} alt="" />
                </a>
                <a>
                  <img src={logoIg} width={20} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bacaartikel;
