import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white mt-20 py-6">
      <div className="max-w-[90rem]  mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
          {/* Left Section: Logo and Info */}
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-3xl font-semibold ">Valorant Info</h2>
            <p className="mt-2 text-sm text-gray-400">
              Your ultimate source for Valorant weapon and skin information.
            </p>
          </div>

          {/* Middle Section: Navigation Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 mt-6 sm:mt-0">
            <a
              href="/"
              className="text-gray-400 hover:text-[#00FFA3] mb-2 sm:mb-0"
            >
              Home
            </a>
            <a
              href="/weapons"
              className="text-gray-400 hover:text-[#00FFA3] mb-2 sm:mb-0"
            >
              Weapons
            </a>
            <a
              href="/skins"
              className="text-gray-400 hover:text-[#00FFA3] mb-2 sm:mb-0"
            >
              Skins
            </a>
            <a
              href="/about"
              className="text-gray-400 hover:text-[#00FFA3] mb-2 sm:mb-0"
            >
              About
            </a>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-4 mt-6 sm:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00FFA3] text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00FFA3] text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00FFA3] text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00FFA3] text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Valorant Info. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
