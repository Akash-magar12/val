import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Applayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="w-full min-h-screen bg-[#000] text-white  py-2">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Applayout;
