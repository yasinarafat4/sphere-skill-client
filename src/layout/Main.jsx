import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import LoadingSpinner from "../components/Shared/LoadingSpinner/LoadingSpinner";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
  // Set loading spinner
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      {/* Navbar */}
      <Navbar />
      {/* Main Body */}
      <div className="min-h-[calc(100vh-436px)]">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
