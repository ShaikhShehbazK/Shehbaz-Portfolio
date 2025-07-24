import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import mainImage1 from "../../public/image__2_removebg.png";
import { Link } from "react-scroll";
import Contact from "./Contact";

export default function Home() {
  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-8 bg-gradient-to-b from-gray-50 to-white shadow-lg rounded-2xl"
    >
      <div className="flex flex-col md:flex-row md:space-x-20 z-10 mb-12">
        {/* Left Section */}
        <div className="md:w-1/2 mt-16 md:mt-32 space-y-6 order-2 md:order-1 z-10">
          <p className="text-lg md:text-xl text-emerald-600 font-semibold tracking-wide">
            Welcome to My Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Hi, I'm <span className="text-blue-600">Shehbaz Shaikh</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
            <span className="text-emerald-600">|</span>
            <ReactTyped
              strings={[
                "MERN Stack Developer",
                "React Developer",
                "Backend Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
              className="text-red-700"
            />
          </h2>
          <p className="mt-6 text-justify text-base md:text-lg text-gray-700 leading-relaxed">
            I’m a Full Stack Developer specializing in the MERN stack, focused
            on building fast, scalable web apps with clean APIs and seamless
            user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <a
              href="/Shehbaz_Shaikh_React_MERN.pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-50 hover:text-blue-800 transition duration-300"
            >
              <FaDownload className="w-5 h-5" />
              View CV
            </a>
            <a
              href="/Shehbaz_Shaikh_React_MERN.pdf.pdf"
              download
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-emerald-700 hover:scale-105 transition-transform duration-300"
            >
              <FaDownload className="w-5 h-5" />
              Download CV
            </a>
            {/* <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent border border-emerald-600 text-emerald-600 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition duration-300"
            >
              Get in Touch
            </a> */}
            <Link
              to="Contact"
              smooth={true}
              duration={600}
              offset={-70}
              className="cursor-pointer inline-flex items-center gap-2 bg-transparent border border-emerald-600 text-emerald-600 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social + Stack */}
          <div className="flex flex-col md:flex-row justify-between mt-12 gap-8 items-center">
            <div>
              <h1 className="font-bold text-gray-800 text-lg mb-2">
                Available On
              </h1>
              <ul className="flex space-x-6 mt-2">
                <li>
                  <a
                    href="https://github.com/ShaikhShehbazK"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-8 h-8 text-gray-700 hover:text-black transition duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/shehbaz-shaikh-087734322"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="w-8 h-8 text-blue-700 hover:text-blue-800 transition duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/ShaikhShehbaz_K"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="w-8 h-8 text-blue-500 hover:text-blue-700 transition duration-200" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-gray-800 text-lg mb-2">
                Currently Working With
              </h1>
              <ul className="flex space-x-6 mt-2">
                <li>
                  <SiMongodb className="w-8 h-8 text-green-600 hover:scale-110 transition-transform duration-150" />
                </li>
                <li>
                  <SiExpress className="w-8 h-8 text-gray-700 hover:scale-110 transition-transform duration-150" />
                </li>
                <li>
                  <FaReact className="w-8 h-8 text-blue-500 hover:scale-110 transition-transform duration-150" />
                </li>
                <li>
                  <FaNodeJs className="w-8 h-8 text-green-700 hover:scale-110 transition-transform duration-150" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center md:w-1/2 mt-12 xl:ml-20 order-1 z-10">
          <div className="bg-gradient-to-br from-emerald-100 via-blue-100 to-white rounded-full shadow-lg p-4 md:p-8">
            <img
              src={mainImage1}
              alt="Shehbaz Shaikh"
              className="w-64 h-64 md:w-[380px] md:h-[380px] object-contain rounded-full shadow-md border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
