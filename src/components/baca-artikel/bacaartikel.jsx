import React from "react";
import logoFb from "../../assets/Logofb.png";
import logoGoogle from "../../assets/Logogugel.png";
import logoIg from "../../assets/Logoig.png";
import UseGetArticleId from "../../hook/artikel/useGetArtikelbyid";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function Bacaartikel() {
  const { artikelDetail } = UseGetArticleId();
  const artikelbyId = artikelDetail?.data;

  // Format the createdAt date to 'YYYY-MM-DD'
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('sv-SE', options);
  };

  return (
    <>
      <Navbar />
      <div
        className="hero"
        style={{ backgroundImage: "url('/src/assets/frameArtikel.png')" }}
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
            {artikelbyId?.judul}
          </h1>
          <div className="grid grid-cols-1 justify-center items-center">
            <img
              src={artikelbyId?.gambar}
              width={400}
              className="mx-auto mt-8 mb-10 rounded-md"
              alt=""
            />
            <div
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: artikelbyId?.isi }}
            ></div>
          </div>
          <div className="justify-between p-2 mt-10">
            <div className="flex gap-4 items-center">
              <img src={artikelbyId?.profil_penulis} width={30} alt="" />
              <div>
                <p>{artikelbyId?.penulis}</p>
                <p>{artikelbyId?.createdAt ? formatDate(artikelbyId.createdAt) : ''}</p>
              </div>
            </div>
            <div className="flex gap-4 mt-4 ml-12">
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
      <Footer />
    </>
  );
}

export default Bacaartikel;
