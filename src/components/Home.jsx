import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import { SiMongodb, SiExpress, SiGmail } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import mainImage1 from "../../public/image__2_removebg.png";
import { Link } from "react-scroll";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    // Mouse movement parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      href: "https://github.com/ShaikhShehbazK",
      icon: FaGithub,
      color: "text-gray-700 hover:text-black",
      hoverBg: "hover:bg-gray-100",
    },
    {
      href: "https://www.linkedin.com/in/shehbaz-shaikh-087734322",
      icon: FaLinkedin,
      color: "text-blue-700 hover:text-blue-800",
      hoverBg: "hover:bg-blue-50",
    },
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=shahbazshaikh485@gmail.com",
      icon: SiGmail,
      color: "text-blue-500 hover:text-blue-700",
      hoverBg: "hover:bg-blue-50",
    },
    {
      href: "https://x.com/ShaikhShehbaz_K",
      icon: FaTwitter,
      color: "text-blue-500 hover:text-blue-700",
      hoverBg: "hover:bg-blue-50",
    },
  ];

  const techStack = [
    {
      icon: SiMongodb,
      color: "text-green-600 hover:text-green-700",
      name: "MongoDB",
    },
    {
      icon: SiExpress,
      color: "text-gray-700 hover:text-gray-900",
      name: "Express",
    },
    {
      icon: FaReact,
      color: "text-blue-500 hover:text-blue-600",
      name: "React",
    },
    {
      icon: FaNodeJs,
      color: "text-green-700 hover:text-green-800",
      name: "Node.js",
    },
  ];

  return (
    <div
      name="Home"
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x * 100}% ${
          mousePosition.y * 100
        }%, 
            rgba(59, 130, 246, 0.1) 0%, 
            transparent 50%),
          linear-gradient(135deg, 
            #f8fafc 0%, 
            #e2e8f0 25%, 
            #f1f5f9 50%, 
            #e0e7ff 75%, 
            #f8fafc 100%)
        `,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-full animate-pulse-slow"></div>

        {/* Animated Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent animate-slide-right"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent animate-slide-left"></div>
      </div>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-8 relative z-10">
        <div className="flex flex-col md:flex-row md:space-x-20 min-h-screen items-center">
          {/* Left Section */}
          <div
            className={`md:w-1/2 mt-16 md:mt-32 space-y-6 order-2 md:order-1 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Welcome Text */}
            <p
              className={`text-lg md:text-xl font-semibold tracking-wide bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              Welcome to My Portfolio
            </p>

            {/* Main Heading */}
            <h1
              className={`text-4xl md:text-6xl font-extrabold leading-tight transform transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Hi, I'm{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient-x">
                Shehbaz Shaikh
              </span>
            </h1>

            {/* Typed Animation */}
            <h2
              className={`text-xl md:text-2xl font-semibold flex items-center gap-2 transform transition-all duration-1000 delay-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <span className="text-emerald-600 animate-pulse">|</span>
              <ReactTyped
                strings={[
                  "MERN Stack Developer",
                  "React Developer",
                  "Backend Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"
              />
            </h2>

            {/* Description */}
            <p
              className={`mt-6 text-justify text-base md:text-lg text-gray-700 leading-relaxed transform transition-all duration-1000 delay-800 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              I'm a Full Stack Developer specializing in the MERN stack, focused
              on building fast, scalable web apps with clean APIs and seamless
              user experiences.
            </p>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center gap-4 mt-8 transform transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <a
                href="/Node.js_React.js_MERN_Shehbaz (2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-blue-50 hover:text-blue-800 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaDownload className="w-5 h-5 group-hover:animate-bounce" />
                View CV
              </a>
              <a
                href="/Node.js_React.js_MERN_Shehbaz (2).pdf"
                download
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 hover:from-emerald-700 hover:to-blue-700"
              >
                <FaDownload className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </a>
              <Link
                to="Contact"
                smooth={true}
                duration={600}
                offset={-70}
                className="cursor-pointer group inline-flex items-center gap-2 bg-transparent border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white hover:scale-105 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get in Touch
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>

            {/* Social + Stack */}
            <div
              className={`flex flex-col md:flex-row justify-between mt-12 gap-8 items-center transform transition-all duration-1000 delay-1200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              {/* Social Links */}
              <div>
                <h1 className="font-bold text-gray-800 text-lg mb-4 relative">
                  Available On
                  <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600"></span>
                </h1>
                <ul className="flex space-x-4 mt-2">
                  {socialLinks.map(
                    ({ href, icon: Icon, color, hoverBg }, index) => (
                      <li key={index}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group p-3 rounded-xl ${color} ${hoverBg} transition-all duration-300 hover:scale-110 hover:shadow-md transform hover:-translate-y-1 block`}
                        >
                          <Icon className="w-6 h-6 group-hover:animate-pulse" />
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h1 className="font-bold text-gray-800 text-lg mb-4 relative">
                  Currently Working With
                  <span className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600"></span>
                </h1>
                <ul className="flex space-x-4 mt-2">
                  {techStack.map(({ icon: Icon, color, name }, index) => (
                    <li key={index} className="group relative">
                      <div
                        className={`p-3 rounded-xl bg-white/60 backdrop-blur-sm ${color} hover:bg-white/80 hover:shadow-md transition-all duration-300 hover:scale-110 transform hover:-translate-y-1`}
                      >
                        <Icon className="w-6 h-6 group-hover:animate-spin-slow" />
                      </div>
                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {name}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div
            className={`flex justify-center items-center md:w-1/2 mt-12 xl:ml-20 order-1 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-10 opacity-0 scale-95"
            }`}
          >
            <div className="relative group">
              {/* Animated Ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-full animate-spin-slow opacity-20 scale-110"></div>

              {/* Profile Image Container */}
              <div className="relative bg-gradient-to-br from-emerald-100 via-blue-100 to-white rounded-full shadow-2xl p-4 md:p-8 hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <img
                  src={mainImage1}
                  alt="Shehbaz Shaikh"
                  className="w-64 h-64 md:w-[380px] md:h-[380px] object-contain rounded-full shadow-lg border-4 border-white/80 backdrop-blur-sm group-hover:border-white transition-all duration-500"
                />

                {/* Floating Icons */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-bounce-slow">
                  <FaReact className="w-6 h-6 text-white animate-spin-slow" />
                </div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center animate-pulse">
                  <FaNodeJs className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes slide-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes slide-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 2s;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-slide-right {
          animation: slide-right 8s linear infinite;
        }
        .animate-slide-left {
          animation: slide-left 10s linear infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}
