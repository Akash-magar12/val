import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { CgMenuRightAlt } from "react-icons/cg";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);

  const open = () => {
    setSidebar(false);
  };
  const close = () => {
    setSidebar(true);
  };
  useEffect(() => {
    if (!sidebar) {
      document.querySelector("body").style.overflow = "hidden"; // Disable scroll when sidebar is open
    } else {
      document.querySelector("body").style.overflow = "scroll"; // Re-enable scroll when sidebar is closed
    }

    // Cleanup function to reset overflow style when component unmounts or sidebar state changes
    return () => {
      document.querySelector("body").style.overflow = "scroll";
    };
  }, [sidebar]);

  return (
    <>
      <nav className="flex relative items-center justify-between  px-2 md:px-8">
        <img className="w-10 md:w-16" src={logo} alt="" />
        <ul className="flex gap-10 items-center">
          <NavLink
            className="head text-2xl tracking-wide hidden md:block cursor-pointer"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="head text-2xl tracking-wide hidden md:block cursor-pointer"
            to="/agent"
          >
            Agents
          </NavLink>
          <NavLink
            className="head text-2xl tracking-wide hidden md:block cursor-pointer"
            to="/maps"
          >
            Maps
          </NavLink>
          <NavLink
            className="head text-2xl tracking-wide hidden md:block cursor-pointer"
            to="/weapon"
          >
            Weapons
          </NavLink>
          <NavLink
            to="/bundle"
            className="head text-2xl hidden md:block tracking-wide cursor-pointer"
          >
            Bundles
          </NavLink>
          <span onClick={open} className="head text-2xl md:hidden">
            <CgMenuRightAlt />
          </span>
        </ul>
      </nav>
      <div
        className={`w-[15rem] bg-zinc-900 h-screen px-3 py-6 top-0  text-white fixed ${
          sidebar ? "right-[-15rem]" : "right-0"
        } z-30  transition-all`}
      >
        <span
          className="text-2xl flex justify-end w-full cursor-pointer "
          onClick={close}
        >
          <IoMdClose />
        </span>
        <div>
          <ul className="flex gap-10 flex-col items-end px-4 mt-10">
            <NavLink
              className="head text-2xl tracking-wide  cursor-pointer"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="head text-2xl tracking-wide  cursor-pointer"
              to="/agent"
            >
              Agents
            </NavLink>
            <NavLink
              className="head text-2xl tracking-wide  cursor-pointer"
              to="/maps"
            >
              Maps
            </NavLink>
            <NavLink
              className="head text-2xl tracking-wide  cursor-pointer"
              to="/weapon"
            >
              Weapons
            </NavLink>
            <NavLink
              to="/bundle"
              className="head text-2xl  tracking-wide cursor-pointer"
            >
              Bundles
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
