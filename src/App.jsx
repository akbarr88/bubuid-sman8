import "./App.css";
import LandingPage from "./components/landingpage/landingpage";
import AboutBullying from "./components/aboutbullying/aboutbullying";
import Konseling from "./components/konseling/konseling";
import DetailPsikolog from "./components/konseling/detailpsikolog";
import Artikel from "./components/artikel/artikel";
import BacaArtikel from "./components/baca-artikel/bacaartikel";
import Login from "./components/login/login";
import Regis from "./components/regis/regis";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/routing/privateRoute";
import Lapor from "./components/lapor/lapor";
import DashboardAdmin from "./components/dashboardadmin/dashboardadmin";
import DataLaporan from "./components/datalaporan/datalaporan";
import ReportDetails from "./components/detaillaporan/detaillaporan";
import { ContactUs } from "./components/sendemail/send";
import DataPengguna from "./components/datauser/datauser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Regis />} />
        <Route element={<PrivateRoute />}>
          <Route path="aboutbullying" element={<AboutBullying />} />
          <Route path="konseling" element={<Konseling />} />
          <Route path="konseling/:id" element={<DetailPsikolog />} />
          <Route path="artikel" element={<Artikel />} />
          <Route path="artikel/:id" element={<BacaArtikel />} />
          <Route path="lapor" element={<Lapor/>}/>
          <Route path="dashboardadmin" element={<DashboardAdmin/>}/>
          <Route path="datalaporan" element={<DataLaporan/>}/>
          <Route path="datapengguna" element={<DataPengguna/>}/>
          <Route path="detaillaporan" element={<ReportDetails/>}/>
          <Route path="sendemail" element={<ContactUs/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
