import React, { useState } from "react";
import image from "../../public/photo.avif";
import mainImage1 from "../../public/image__2_removebg.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Portfolio" },
    { id: 4, name: "Experience" },
    { id: 5, name: "Contact" },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md py-1 flex justify-between items-center h-16 fixed top-0 left-0 right-0 z-100 2xl:w-screen bg-white">
        {/* LeftPart */}
        <div className="flex space-x-2">
          <img
            src={mainImage1}
            width={50}
            alt=""
            className="h-12 w-12 rounded-full"
          />
          <h1 className="text-2xl font-semibold cursor-pointer">
            Shehba
            <span className="text-green-700">z</span>
            <p className="text-sm font-semibold cursor-pointer">
              Web Developer
            </p>
          </h1>
        </div>
        {/* Deskpot menu */}
        <div>
          <ul className="hidden md:flex space-x-9 font-medium">
            {navItems.map(({ id, name }) => (
              <li
                key={id}
                className="cursor-pointer hover:scale-110 duration-200"
              >
                <Link to={name} smooth={true} duration={500}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Menu buttons */}
          {!menu ? (
            <GiHamburgerMenu
              size={22}
              onClick={() => setMenu(!menu)}
              className="md:hidden"
            />
          ) : (
            <IoCloseSharp
              size={22}
              onClick={() => setMenu(!menu)}
              className="md:hidden"
            />
          )}
        </div>
      </div>
      {/* small Device Menu */}
      {menu && (
        <div className="bg-white z-50 fixed top-0 right-0 left-0">
          <ul className="md:hidden flex flex-col justify-center items-center text-xl font-bold space-y-3 h-screen">
            {navItems.map(({ id, name }) => (
              <li
                key={id}
                className="cursor-pointer hover:scale-110 duration-200"
              >
                <Link
                  to={name}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
