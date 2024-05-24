import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminRoute from "./components/routing/adminRoute";
import PrivateRoute from "./components/routing/privateRoute";

const LandingPage = lazy(() => import("./components/landingpage/landingpage"));
const Login = lazy(() => import("./components/login/login"));
const Regis = lazy(() => import("./components/regis/regis"));
const AboutBullying = lazy(() =>
  import("./components/aboutbullying/aboutbullying")
);
const Konseling = lazy(() => import("./components/konseling/konseling"));
const DetailPsikolog = lazy(() =>
  import("./components/konseling/detailpsikolog")
);
const Lapor = lazy(() => import("./components/lapor/lapor"));
const DataLaporan = lazy(() => import("./components/datalaporan/datalaporan"));
const DataPengguna = lazy(() => import("./components/datauser/datauser"));
const DashboardAdmin = lazy(() =>
  import("./components/dashboardadmin/dashboardadmin")
);
const UploadArtikel = lazy(() =>
  import("./components/uploadartikel/UploadArtikel")
);

const Artikel = lazy(() => import("./components/artikel/artikel"));

const BacaArtikel = lazy(() => import("./components/baca-artikel/bacaartikel"));
const ReportDetails = lazy(() =>
  import("./components/detaillaporan/detaillaporan")
);
const ContactUs = lazy(() => import("./components/sendemail/send"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen w-screeen bg-none">
            <span className="loading loading-spinner text-primary loading-lg"></span>
          </div>
        }
      >
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
            <Route element={<AdminRoute />}>
              <Route path="dashboardadmin" index element={<DashboardAdmin />} />
              <Route path="uploadartikel" element={<UploadArtikel />} />
              <Route path="datalaporan" element={<DataLaporan />} />
              <Route path="datapengguna" element={<DataPengguna />} />
              <Route path="detaillaporan" element={<ReportDetails />} />
              <Route path="sendemail/:id" element={<ContactUs />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
