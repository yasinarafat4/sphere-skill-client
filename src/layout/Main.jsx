import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      {/* Navbar */}
      <Navbar />
      {/* Main Body */}
      <div className="min-h-[calc(100vh-436px)] lg:pt-4">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
