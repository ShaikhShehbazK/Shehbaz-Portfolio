import React, { useState, useEffect } from "react";
import image from "../../public/photo.avif";
import mainImage1 from "../../public/photo.avif";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle scroll effect and initial load animation
  useEffect(() => {
    // Trigger initial load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Portfolio" },
    { id: 4, name: "Experience" },
    { id: 5, name: "Contact" },
  ];

  return (
    <>
      <div
        className={`w-full px-4 md:px-20 shadow-lg py-1 flex justify-between items-center h-16 fixed top-0 left-0 right-0 z-[9999] transition-all duration-700 ease-out transform ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${
          scrolled
            ? "bg-gradient-to-r from-slate-900/98 via-purple-900/98 to-slate-900/98 backdrop-blur-md"
            : "bg-gradient-to-r from-white/98 via-blue-50/98 to-white/98 backdrop-blur-sm"
        }`}
      >
        {/* LeftPart */}
        <div
          className={`flex space-x-2 items-center group transition-all duration-500 delay-200 ${
            isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          <div className="relative">
            <img
              src={mainImage1}
              width={50}
              alt=""
              className="h-12 w-12 rounded-full border-2 border-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
            />
            <div className="absolute inset-0 h-12 w-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
          </div>
          <div className="transition-all duration-300 group-hover:translate-x-1">
            <h1
              className={`text-2xl font-bold cursor-pointer transition-colors duration-300 ${
                scrolled ? "text-white" : "text-gray-800"
              }`}
            >
              Shehba
              <span className="text-green-500 animate-pulse">z</span>
            </h1>
            <p
              className={`text-sm font-medium cursor-pointer transition-colors duration-300 ${
                scrolled ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Web Developer
            </p>
          </div>
        </div>

        {/* Desktop menu */}
        <div
          className={`transition-all duration-500 delay-300 ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <ul className="hidden md:flex space-x-8 font-medium">
            {navItems.map(({ id, name }, index) => (
              <li
                key={id}
                className={`relative cursor-pointer group transition-all duration-300 delay-${
                  400 + index * 100
                } ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0"
                }`}
              >
                <Link
                  to={name}
                  smooth={true}
                  duration={500}
                  className={`transition-all duration-300 hover:scale-110 py-2 px-3 rounded-lg relative overflow-hidden ${
                    scrolled
                      ? "text-white hover:text-green-400"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {name}
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  {/* Hover background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Menu buttons */}
          <div
            className={`md:hidden relative transition-all duration-500 delay-200 ${
              isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            {!menu ? (
              <GiHamburgerMenu
                size={24}
                onClick={() => setMenu(!menu)}
                className={`cursor-pointer transition-all duration-300 hover:scale-110 ${
                  scrolled
                    ? "text-white hover:text-green-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              />
            ) : (
              <IoCloseSharp
                size={24}
                onClick={() => setMenu(!menu)}
                className="text-white cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-90"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-[9998] fixed inset-0 animate-slideInFromTop">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-10 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce delay-100"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-pulse delay-200"></div>
            <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-pink-400/20 rounded-full animate-bounce delay-300"></div>
          </div>

          <ul className="flex flex-col justify-center items-center text-xl font-bold space-y-6 h-screen relative z-10">
            {navItems.map(({ id, name }, index) => (
              <li
                key={id}
                className="cursor-pointer group relative"
                style={{
                  animation: `slideInFromRight 0.6s ease-out ${
                    index * 0.1
                  }s both`,
                }}
              >
                <Link
                  to={name}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                  className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 py-3 px-6 rounded-lg relative overflow-hidden block"
                >
                  {name}
                  {/* Animated background on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }

        .animate-slideInFromTop {
          animation: slideInFromTop 0.4s ease-out;
        }
      `}</style>
    </>
  );
}

export default Navbar;
