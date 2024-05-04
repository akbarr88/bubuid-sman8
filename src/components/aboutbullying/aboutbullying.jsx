import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import aboutBullying from "../../assets/aboutbullying.png"
import verbal from "../../assets/verbal.png"
import physical from "../../assets/physical.png"
import social from "../../assets/social.png"
import cyber from "../../assets/cyber.png"
import stress from "../../assets/stress.png"
import hate from "../../assets/hate.png"
import danger from "../../assets/danger.png"



function AboutBullying() {
  return (
    <>
      <Navbar/>
      <div className="bg-[#54BAB9] p-4 text-white">
        <div className="font-rufina">
          <div className="grid justify-items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">About Bullying</h1>
            <img src={aboutBullying} alt="" width={200} />
          </div>
          <div className="mt-8 font-poppins md:ml-10">
            <h2 className="text-xl font-semibold">Bullying</h2>
            <p className="py-2 font-normal text-sm">
              Menurut UNICEF, bullying adalah spektrum perilaku agresif atau
              kekerasan yang disengaja dan dilakukan secara berulang-ulang oleh
              seorang individu atau sekelompok individu terhadap satu atau
              beberapa korban dimana terdapat ketidakseimbangan kekuasaan yang
              nyata atau dirasakan. Penindasan dapat terjadi dalam berbagai
              bentuk: penindasan verbal, penindasan fisik, penindasan sosial,
              dan penindasan dunia maya.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-base-200 p-4 font-poppins text-[#224F34]">
          <h1 className="text-center text-lg font-bold">
            Macam - macam Bullying
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4">
              <h1 className="font-semibold">Verbal Bullying</h1>
              <div className="flex flex-col md:flex-row gap-2 mt-2 rounded-lg">
                <img src={verbal} alt="" width={200} />
                <p className="text-sm">
                  Mengolok-olok, mencaci-maki, mengejek, mengancam, memfitnah,
                  mencemarkan nama baik atau menggunakan kata-kata yang tidak
                  pantas yang dimaksudkan untuk menyakiti orang lain.
                </p>
              </div>
            </div>
            <div className="p-4">
              <h1 className="font-semibold">Physical Bullying</h1>
              <div className="flex flex-col md:flex-row gap-2 mt-2 rounded-lg">
                <img src={physical} alt="" width={200} />
                <p className="text-sm">
                  Memukul, meninju, menendang, menampar, meludah, merusak barang
                  atau barang milik orang lain, atau bentuk kekerasan lainnya
                  dengan maksud melukai tubuh seseorang.
                </p>
              </div>
            </div>
            <div className="p-4">
              <h1 className="font-semibold">Social Bullying</h1>
              <div className="flex flex-col md:flex-row gap-2 mt-2 rounded-lg">
                <img src={social} alt="" width={200} />
                <p className="text-sm">
                  Mengabaikan, mengecualikan, mencemooh, dan bentuk-bentuk
                  tindakan lain yang bertujuan untuk menjauhi seseorang dari
                  komunitasnya.
                </p>
              </div>
            </div>
            <div className="p-4">
              <h1 className="font-semibold">Cyber Bullying</h1>
              <div className="flex flex-col md:flex-row gap-2 mt-2 rounded-lg">
                <img src={cyber} alt="" width={200} />
                <p className="text-sm">
                  Mengejek atau mengintimidasi seseorang melalui sarana
                  elektronik seperti namun tidak terbatas pada pesan teks dan
                  jejaring sosial (misal: merekam video atau memfitnah orang
                  lain melalui situs jejaring sosial).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-[#18978F] flex flex-col md:flex-row justify-evenly text-white font-poppins">
        <div className="md:w-40 text-center md:text-left">
          <h1 className="font-semibold mt-20">
            Gejala Orang Yang Mengalami Bullying
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 p-4 md:p-0 text-left ml-6">
          <div>
            <h1 className="font-semibold">Social</h1>
            <ul className="text-xs mt-2">
              <li>- Sering diganggu orang</li>
              <li>- Selalu lebih suka menyendiri</li>
              <li>- Menghindari atau menolak ajakan nongkrong</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">Fisik</h1>
            <ul className="text-xs mt-2">
              <li>- Cedera fisik</li>
              <li>- Kesulitan tidur</li>
              <li>- Kehilangan selera makan</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">Emosi</h1>
            <ul className="text-xs mt-2">
              <li>- Tampak khawatir dan tidak bahagia</li>
              <li>- Perubahan suasana hati dan perilaku</li>
              <li>- Kemarahan yang tidak terkendali</li>
              <li>- Enggan pergi ke sekolah</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">Akademik</h1>
            <ul className="text-xs mt-2">
              <li>- Penurunan prestasi akademik, prestasi & konsentrasi</li>
              <li>- Enggan berpartisipasi dalam kegiatan kelas</li>
              <li>- Sering meninggalkan kelas</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 font-poppins">
        <div className="grid grid-cols-1 text-center text-[#224F34]">
          <h1 className="p-4 text-xl font-semibold">Bahaya Bullying</h1>
          <p className="md:w-1/2 justify-self-center text-sm">
            Tahukah Anda bahwa bullying berpotensi menimbulkan stres traumatis
            yang berdampak buruk pada kesehatan mental korbannya. Sayangnya, ada
            laporan kasus di mana insiden intimidasi berakhir dengan bunuh diri.
          </p>
        </div>
        <div className="p-5 flex flex-col md:flex-row gap-14 justify-around md:mt-10 mb-10">
          <div className="grid justify-items-center md:w-60 text-center gap-4 bg-[#18978F] p-6 text-white shadow-2xl shadow-emerald-200 rounded-md">
            <img src={stress} alt="" width={70} />
            <p className="text-base font-medium">Bullying Menyebabkan ketakutan dan stres psikolog</p>
          </div>
          <div className="grid justify-items-center md:w-60 text-center gap-4 bg-[#18978F] p-6 text-white shadow-2xl shadow-emerald-200 rounded-md">
            <img src={hate} alt="" width={70} />
            <p className="text-base font-medium">
              Bullying menyebabkan kebencian dan melestarikan budaya kekerasan
            </p>
          </div>
          <div className="grid justify-items-center md:w-60 text-center gap-4 bg-[#18978F] p-6 text-white shadow-2xl shadow-emerald-200 rounded-md">
            <img src={danger} alt="" width={70} />
            <p className="text-base font-medium">Bullying dapat mengancam kehidupan seseorang</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AboutBullying;
