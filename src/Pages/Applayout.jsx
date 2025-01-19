import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Applayout = () => {
  return (
    <div className="w-full min-h-screen bg-[#000] text-white  py-2">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Applayout;
