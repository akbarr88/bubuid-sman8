import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutBullying from "./components/aboutbullying/aboutbullying";
import Artikel from "./components/artikel/artikel";
import BacaArtikel from "./components/baca-artikel/bacaartikel";
import DashboardAdmin from "./components/dashboardadmin/dashboardadmin";
import DataLaporan from "./components/datalaporan/datalaporan";
import DataPengguna from "./components/datauser/datauser";
import ReportDetails from "./components/detaillaporan/detaillaporan";
import DetailPsikolog from "./components/konseling/detailpsikolog";
import Konseling from "./components/konseling/konseling";
import LandingPage from "./components/landingpage/landingpage";
import Lapor from "./components/lapor/lapor";
import Login from "./components/login/login";
import Regis from "./components/regis/regis";
import AdminRoute from "./components/routing/adminRoute";
import PrivateRoute from "./components/routing/privateRoute";
import { ContactUs } from "./components/sendemail/send";
import UploadArtikel from "./components/uploadartikel/UploadArtikel";

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
          <Route path="lapor" element={<Lapor />} />
          <Route path="dashboardadmin" element={<AdminRoute />}>
            <Route index element={<DashboardAdmin />} />
          </Route>
          <Route path="uploadartikel" element={<UploadArtikel />} />
          <Route path="datalaporan" element={<DataLaporan />} />
          <Route path="datapengguna" element={<DataPengguna />} />
          <Route path="detaillaporan" element={<ReportDetails />} />
          <Route path="sendemail/:id" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
