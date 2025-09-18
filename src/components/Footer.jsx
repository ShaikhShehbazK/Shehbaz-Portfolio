import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row py-3 justify-center items-center bg-black text-white gap-7">
        <div className="w-[305px]">
          <p className="text-[rgb(125,125,125)]">
            If you are Looking for a web developer or need help with your
            project then feel free to contact me at
          </p>
          <h1>shahbazshaikh485@gmailcom</h1>
        </div>
        {/* Main heading - Original text preserved */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          <span
            className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent inline-block"
            style={{ animation: "text-shimmer 3s ease-in-out infinite" }}
          >
            Let's Work
          </span>
          <br />
          <span
            className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
            style={{
              animation: "text-shimmer 3s ease-in-out infinite 0.5s",
            }}
          >
            Together
          </span>
        </h1>
        {/* Copyright */}
        <div className="relative border-t border-white/10 py-6 px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4"></div>

            <div className="text-gray-500 text-sm">
              © 2024 Shahbaz Shaikh. Crafted with ❤️
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
