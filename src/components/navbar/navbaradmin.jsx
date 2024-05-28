import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavbarAdmin() {
  const [isClick, setIsClick] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id_user");
  const location = useLocation(); // Hook to get the current location

  // useEffect(() => {
  //   getDataUser();
  // }, []);

  // const getDataUser = async () => {
  //   try {
  //     const { data } = await axios.get(`https://calm-ruby-chicken-tam.cyclic.app/users/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setUser(data);
  //     setIsLogin(!!data);
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //     setIsLogin(false);
  //   }
  // };

  const handleNavbar = () => {
    setIsClick(!isClick);
  };

  const handleLogout = () => {
    const isConfirmed = window.confirm("Apakah Anda yakin ingin logout?");

    if (isConfirmed) {
      localStorage.removeItem("token");
      localStorage.removeItem("id_user");
      window.location.href = "/login";
    }
  };

  // Function to check if a given path is the current path
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="flex bg-blue-400 justify-between lg:justify-around text-white items-center font-poppins py-4 ">
        <div>
          <h1 className="text-xl font-bold font-poppins ml-20"> ADMIN </h1>
        </div>
        <div
          className={`${
            isClick
              ? "absolute p-2 right-0 top-20 bg-blue-400 md:w-1/3 lg:hidden rounded-md"
              : "hidden lg:flex"
          }`}
        >
          <ul className="lg:flex gap-16 p-2 trackingwider ml-40 ">
            <li
              className={`hover:bg-white px-2 py-1 hover:text-black hover:rounded-xl text-xs ${
                isActive("/dashboardadmin") && "bg-white text-black rounded-xl"
              }`}
            >
              <Link to="/dashboardadmin">DASHBOARD ADMIN</Link>
            </li>
            <li
              className={`hover:bg-white px-2 py-1 hover:text-black hover:rounded-xl text-xs ${
                isActive("/datalaporan") && "bg-white text-black rounded-xl"
              }`}
            >
              <Link to="/datalaporan">DATA LAPORAN</Link>
            </li>
            <li
              className={`hover:bg-white px-2 py-1 hover:text-black hover:rounded-xl text-xs ${
                isActive("/datapengguna") && "bg-white text-black rounded-xl"
              }`}
            >
              <Link to="/datapengguna">DATA USER</Link>
            </li>
            <li
              className={`hover:bg-white px-2 py-1 hover:text-black hover:rounded-xl text-xs ${
                isActive("/uploadartikel") && "bg-white text-black rounded-xl"
              }`}
            >
              <Link to="/uploadartikel">UPLOAD ARTIKEL</Link>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:bg-blue-700 hover:rounded-md"
              onClick={handleLogout}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            <div className="inline-flex lg:flex gap-3 mt-2 text-black lg:ml-60 lg:mt-0 text-sm w-fit">
              <div
                className={`${isLogin ? "flex gap-2 text-white" : "hidden"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
          </ul>
        </div>
        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={handleNavbar}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default NavbarAdmin;
