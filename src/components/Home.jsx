import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

import mainImage1 from "../../public/image__2_removebg.png";
import video from "../../public/smoke1.mp4";

export default function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20"
      >
        <div className="flex flex-col md:flex-row md:space-x-20 z-10 mb-40">
          {/* Left part */}
          <div className="md:w-1/2 mt-20 md:mt-50 space-y-2 order-2 md:order-1 z-10">
            <p className="text-xl">Welcome In My Feed</p>
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, I'm a
              <span>
                {" "}
                <ReactTyped
                  strings={[
                    "MERN Developer",
                    "React Developer",
                    "Backend Developer",
                  ]}
                  className="text-red-800"
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </span>
            </h1>
            <p className="mt-8 text-justify text-md">
              I'm a MERN Stack Developer skilled in React for building dynamic
              UIs and Node.js & Express for developing robust backend APIs. I
              love creating scalable full-stack applications with clean and
              efficient code. 🚀
            </p>
            <div className="flex flex-col md:flex-row justify-between mt-10 space-y-5 text-center">
              <div className="">
                <h1 className="font-bold">Available On</h1>
                <ul className="flex space-x-5 mt-3 justify-center">
                  <li>
                    <a href="https://github.com/ShaikhShehbazK" target="_blank">
                      <FaGithub className="w-7 h-7" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/shehbaz-shaikh-087734322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <FaLinkedin className="w-7 h-7" />
                    </a>
                  </li>
                  <li>
                    <a
                      href=" https://x.com/ShaikhShehbaz_K?t=iC90bCZ-l01_0XWCa5CBbQ&s=08"
                      target="_blank"
                    >
                      <FaTwitter className="w-7 h-7" />
                    </a>
                  </li>
                  {/* <li>
                    <a href="">
                      <FaInstagram className="w-7 h-7" />
                    </a>
                  </li> */}
                </ul>
              </div>
              <div>
                <h1 className="font-bold">Currently Working On</h1>
                <ul className="flex space-x-5 mt-3 justify-center">
                  <li>
                    <a href="">
                      <SiMongodb className="w-7 h-7 border-[0.1px] rounded-full cursor-pointer hover:scale-110 duration-150" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <SiExpress className="w-7 h-7 border-[0.1px] rounded-full cursor-pointer hover:scale-110 duration-150" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaReact className="w-7 h-7 border-[0.1px] rounded-full cursor-pointer hover:scale-110 duration-150" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaNodeJs className="w-7 h-7 border-[0.1px] rounded-full cursor-pointer hover:scale-110 duration-150" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right part */}
          <div className="flex justify-center md:w-1/2 mt-40 xl:ml-20 order-1 z-10">
            <img
              src={mainImage1}
              alt=""
              className="md:w-[460px] md:h-[460px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
