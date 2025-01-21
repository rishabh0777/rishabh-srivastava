import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; 
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";

import ProjectCard from "./ProjectCard";
import ishaniaqua from "../assets/images/ishaniaqua.webp";
import spicesaga from "../assets/images/spicesaga.webp";
import techvista from "../assets/images/techvista.webp";
import atmos from "../assets/images/atmos.webp";

const Work = () => {
  const projects = [
    {
      title: "Ishani Aqua Mineral Water",
      description: "A modern website showcasing a premium bottled water brand, featuring sleek design, product highlights, and an emphasis on purity and quality.",
      img: ishaniaqua,
    },
    {
      title: "Spicesaga",
      description: "A recipe-sharing platform with vibrant design and intuitive navigation, connecting food lovers with unique recipes.",
      img: spicesaga,
    },
    {
      title: "Atmos",
      description: "A weather app with real-time data and dynamic visuals, showcasing API integration and minimalistic design.",
      img: atmos,
    },
    {
      title: "Techvista",
      description: "A sleek e-commerce platform for tech enthusiasts, featuring responsive design, advanced filtering, and seamless navigation.",
      img: techvista,
    },
  ];

  return (
    <div className="xsm:w-full xsm:min-h-[110svh] px-4 py-10 relative text-zinc-900 flex flex-col items-center">
      <h1 className="text-center text-4xl text-zinc-900 font-poppins mb-6 mt-10">
      Crafted Creations
      </h1>
      <p className="text-center xsm:text-sm text-zinc-900 font-poppins mb-1">
        A collection of projects where I turned ideas into functional and interactive solutions. 
        Explore how I brought creativity and code together.
      </p>

      <Swiper 
        modules={[Pagination, Autoplay]} // Only include the Pagination module
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: #6b7280; width: 10px; height: 10px;"></span>`;
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        
        
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="mySwiper w-full p-4 rounded-lg.swiper-pagination-bullet .swiper-pagination-bullet-active rounded-xl shadow-md mt-10"
      >
        {
          projects.map((project, index) => (
            <SwiperSlide className="w-full p-4  rounded-lg .swiper-slide" key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))
        }
        </Swiper>


    </div>
  );
};

export default Work;
