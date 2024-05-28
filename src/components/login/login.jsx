import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoLogin from "../../assets/login.jpeg";

function Login() {
  const navigate = useNavigate();
  localStorage.removeItem("token");
  localStorage.removeItem("id_user");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorLogin, setErrorLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        user,
        {
          withCredentials: true,
        }
      );
      const data = response.data;
      console.log(response.data);

      if (!data || !data.token || !data.id_user) {
        // Data tidak lengkap, tampilkan alert
        alert("Login gagal. Cek kembali username dan password Anda.");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("id_user", data.id_user);
      if (data.role === "admin") {
        return navigate("/dashboardadmin");
      }
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);

      // Tangani pesan kesalahan dari server
      if (error.response && error.response.status === 400) {
        setErrorLogin(true);
        setErrorMessage(error.response.data);
      } else {
        alert("Terjadi kesalahan selama proses login. Coba lagi nanti.");
      }
    }
  };
  return (
    <div className="hero min-h-screen bg-[#18978F]">
      <div className="hero-content">
        <div className="card md:flex-row flex-col items-center shadow-2xl bg-base-100 md:px-20 p-6">
          <form className="card-body">
            <div className="form-control">
              <h1 className="text-center font-bold">LOGIN</h1>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                name="email"
                className="input input-bordered"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="input password"
                name="password"
                className="input input-bordered"
                value={user.password}
                onChange={handleChange}
                required
              />
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Create Acoount
                </Link>
              </label>
            </div>
            {errorLogin ? (
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
            <div className="form-control mt-6">
              <button
                className="btn bg-[#18978F] text-white"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
          <div className="w-60">
            <img src={logoLogin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;