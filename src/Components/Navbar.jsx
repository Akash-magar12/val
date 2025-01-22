import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { CgMenuRightAlt } from "react-icons/cg";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-2 md:px-8">
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
          className="head text-2xl tracking-wide cursor-pointer"
        >
          Bundles
        </NavLink>
        <span className="head text-2xl md:hidden">
          <CgMenuRightAlt />
        </span>
      </ul>
    </nav>
  );
};

export default Navbar;
