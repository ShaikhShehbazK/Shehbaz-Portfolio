import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

function Portfolio() {
  return (
    <>
      <div
        name="Portfolio"
        className="bg-gradient-to-br from-[#ffee00] to-[#bfff00] w-screen h-screen flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl font-semibold text-center">My Projects</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          fsldffff
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-white shadow-2xl flex justify-center items-center w-full h-full text-3xl">
              MongoDB
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-2xl flex justify-center items-center w-full h-full text-3xl">
              Express
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-2xl flex justify-center items-center w-full h-full text-3xl">
              NodeJs
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-2xl flex justify-center items-center w-full h-full text-3xl">
              React
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-2xl flex justify-center items-center w-full h-full text-3xl">
              JavaScript
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-2xl flex justify-center items-center w-full h-full text-3xl">
              CSS
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-2xl flex justify-center items-center w-full h-full text-3xl">
              HTML
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-2xl flex justify-center items-center w-full h-full text-3xl">
              Java
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-2xl flex justify-center items-center w-full h-full text-3xl">
              C Programming
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Portfolio;
