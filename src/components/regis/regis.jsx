import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logoRegis from "../../assets/regis.png"

function Regis() {
  const [user, setUser] = useState({
    nama: "",
    email: "",
    password: "",
    umur: "",
    sekolah: "",
    jenis_kelamin: "",
  });
  const [regisAlert, setRegisAlert] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      window.alert("Anda harus menyetujui syarat dan ketentuan.");
    return;
  }
    try {
      const { data } = await axios.post(
        "http://localhost:3000/auth/register",
        user
      );
      setRegisAlert(true);
      setUser({
        nama: "",
        email: "",
        password: "",
        umur: "",
        sekolah: "",
        jenis_kelamin: "",
      });
    } catch (error) {
      console.error("Error during Register:", error);
      setErrorRegister(true);
      setErrorMessage(error.response.data.message);
    }
  };
  
  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="hero min-h-screen bg-[#18978F]">
      <div className="hero-content flex-col">
        <div className="card flex-col items-center shadow-2xl bg-base-100 md:px-20 p-4">
          <form className="card-body">
            <div className="mb-8 w-60">
              <img src={logoRegis}alt="" />
            </div>
            <div className="form-control">
              <h1 className="text-center font-bold">CREATE ACCOUNT</h1>
              <label className="label">
                <span className="label-text">Nama</span>
              </label>
              <input
                type="text"
                placeholder="Masukkan Nama Lengkap Anda"
                className="input input-bordered"
                value={user.nama}
                onChange={handleChange}
                name="nama"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Kelas</span>
              </label>
              <input
                type="text"
                placeholder="Masukkan Asal Kelas Anda"
                required
                className="input input-bordered"
                value={user.sekolah}
                onChange={handleChange}
                name="sekolah"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Gunakan email yang aktif"
                className="input input-bordered"
                value={user.email}
                onChange={handleChange}
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Input Password"
                className="input input-bordered"
                value={user.password}
                onChange={handleChange}
                name="password"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Umur</span>
              </label>
              <input
                type="number"
                placeholder="Input Umur"
                className="input input-bordered"
                value={user.umur}
                onChange={handleChange}
                name="umur"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Jenis Kelamin</span>
              </label>
              <select
                className="select select-bordered"
                value={user.jenis_kelamin}
                onChange={handleChange}
                name="jenis_kelamin"
                required
              >
                <option value="" disabled>
                  Pilih Jenis Kelamin
                </option>
                <option value="pria">Pria</option>
                <option value="wanita">Wanita</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer p-1">
                <span className="label-text m-1">Saya sudah berusia diatas 15 Tahun</span>
                <input type="checkbox" checked={isChecked} className="checkbox" onChange={handleCheck} />
              </label>
            </div>
            {regisAlert ? (
              <div role="alert" className="alert alert-success p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Akun Berhasil Dibuat</span>
              </div>
            ) : (
              <span></span>
            )}
            {errorRegister ? (
              <div role="alert" className="alert alert-error p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs">{errorMessage}</span>
              </div>
            ) : (
              <span></span>
            )}
            <div className="form-control mt-6 items-center">
              <button
                className="btn bg-[#18978F] text-white"
                onClick={handleRegister}
              >
                Create Account
              </button>
              <label className="label">
                <Link
                  to="/login"
                  className="label-text-alt link link-hover text-center"
                >
                  Sudah Punya Akun
                </Link>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Regis;
