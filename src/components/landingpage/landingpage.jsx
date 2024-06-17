import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import logoBubu from "../../assets/logobubu.png";
import logoKompak from "../../assets/kompak.png"; 
import animasi from "../../assets/animasi.png"

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#54BAB9] min-h-screen py-16">
        <div className="hero-content flex-col justify-evenly md:flex-row-reverse mr-8">
          <div>
            <img
              src={logoBubu}
              className="max-w-xs"
              width={350}
            />
          </div>
          <div className="md:w-1/2 text-white">
            <div className="md:w-64 text-center ml-2">
              <h1 className="text-6xl font-rufina ">Say No!! <br></br> To <br></br>Bullying</h1>
            </div>
            <p className="p-6 font-poppins antialiased tracking-wider">
              Bubu.id adalah website yang mendukung gerakan anti-bullying,
              yang menyediakan konten edukasi dan pelaporan
              bullying di SMAN 8 BATAM <br></br> #BullyingBusters
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col md:flex-row justify-around items-center">
        <div className="mb-4 md:mb-0">
          <img
            src={logoKompak}
            alt=""
            className="max-w-sm"
            width={300}
          />
        </div>
        <div className="">
          <div className="card md:w-96 bg-[#18978F] shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-white text-lg font-semibold">
                Misi Kami
              </h2>
              <p className="text-white text-center font-poppins text-sm">
                Melalui program yang kami kelola, Website ini di dedikasikan untuk 
                mengedukasi dan menangani kasus Bullying di SMAN 8 BATAM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-max bg-[#18978F] text-white p-4 md:text-left">
        <div className="hero-content flex-col justify-around lg:flex-row-reverse">
          <img
            src={animasi}
            className="max-w-sm rounded-lg shadow-2xl"
            width={220}
          />
          <div className="w-1/2">
            <h1 className="text-2xl font-base font-poppins">About Bullying</h1>
            <p className="py-3 font-poppins text-sm">
              Bullying adalah penggunaan kekerasan, ancaman, atau paksaan untuk
              menyalahgunakan atau mengintimidasi orang lain. Perilaku ini dapat
              menjadi suatu kebiasaan dan melibatkan ketidakseimbangan kekuasaan
              sosial atau fisik.
            </p>
            <Link to="/aboutbullying">
              <button className="bg-white px-4 py-0 rounded-md text-black">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-max p-5"
        style={{ backgroundImage: "url(/src/assets/bg-fitur.png)" }}
      >
        <div className="text-center">
          <div>
            <h1 className="mb-5 text-3xl font-bold font-poppins text-[#224F34]">
              Fitur 
            </h1>
            <div className="flex flex-col md:flex-row font-poppins text-white justify-center gap-14">
              <div className="basis-1/4">
                <div className="card shadow-xl bg-[#18978F]">
                  <div className="card-body ">
                    <h2 className="text-sm text-left">Artikel</h2>
                    <h3 className="font-semibold text-left">
                      Tersedia artikel yang yang beragam
                    </h3>
                    <p className="text-left font-poppins text-sm mt-4">
                      Kamu dapat meningkatkan pengetahuan tentang informasi
                      mengenai bullying, baik itu cara mencegahnya, dampak dan
                      akibatnya
                    </p>
                    <div className="card-actions justify-center">
                      <Link to="/artikel">
                        <button className="bg-white px-4 py-0 rounded-md text-black mt-4">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/4">
                <div className="card shadow-xl bg-[#18978F]">
                  <div className="card-body">
                    <h2 className="text-sm text-left">Lapor</h2>
                    <h3 className="font-semibold text-left">Form Lapor</h3>
                    <p className="text-left font-poppins text-sm mt-4">
                      Form Lapor digunakan untuk user yang menghadapi masalah bullying,
                      dapat melaporkan kasus bullying yang di alaminya dan akan di proses
                      oleh admin atau guru BK SMAN 8 BATAM
                    </p>
                    <div className="card-actions justify-center">
                    <Link to="/lapor">
                        <button className="bg-white px-4 py-0 rounded-md text-black mt-4">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="p-5">
        <h1 className="mb-5 text-xl font-bold font-poppins text-[#224F34] text-center">
          Feedback Corner
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
      </div> */}
      <Footer />
    </>
  );
}

export default LandingPage;
