import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectCard from "./ProjectCard";
import spicesaga from "../assets/images/spicesaga.webp";
import atmos from "../assets/images/atmos.webp";


gsap.registerPlugin(ScrollTrigger);


const Work = () => {
  const headRef = useRef(null);
  const paraRef = useRef(null);
  const projRef = useRef(null);



  const projects = [
    
    {
      title: "Spicesaga",
      description: "A recipe-sharing platform with vibrant design and intuitive navigation, connecting food lovers with unique recipes.",
      img: spicesaga,
      link: "https://rishabh0777.github.io/spice_saga/", // Replace with actual URL
    },
    {
      title: "Atmos",
      description: "A weather app with real-time data and dynamic visuals, showcasing API integration and minimalistic design.",
      img: atmos,
      link: "https://rishabh0777.github.io/Atmos/", // Replace with actual URL
    },
  ];
  

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.from(headRef.current, {
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
          markers: false,
        },
        y: -100,
        opacity: 0,
        duration: 1,
        scale: 0.5,
      });
      gsap.from(paraRef.current, {
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
          markers: false,
        },

        opacity: 0,
        duration: 1,
        scale: 0.8,
      })
      gsap.from(projRef.current, {
        scrollTrigger: {
          trigger: projRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
          markers: false,
        },
        y: 100,
        opacity: 0,
        duration: 1,
        scale: 0.5,
      });
    });
    mm.add("(max-width: 767px)", () => {
      gsap.from(headRef.current, {
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
          markers: false,
        },
        y: -50,
        opacity: 0,
        duration: 1,
    })
    gsap.from(paraRef.current, {
        scrollTrigger:{
          trigger: paraRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
          markers: false,
        },
        y: 50,
        opacity: 0,
        duration: 1,
    })
    gsap.from(projRef.current, {
        scrollTrigger:{
          trigger: projRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
          markers: false,
        },
        y: 100,
        opacity: 0,
        duration: 1,})
  })



    return () => mm.revert(); // ✅ Cleanup matchMedia on unmount
  }, []);


  useEffect(() => {
    // initialization of Lenis
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="xsm:w-full xsm:min-h-[110svh] px-4 py-10 relative text-zinc-900 flex flex-col items-center">
      <h1 ref={headRef} className="text-center xsm:text-4xl md:text-[5vw]  text-zinc-900 font-poppins mb-6 mt-10">
        Crafted Creations
      </h1>
      <p ref={paraRef} className="text-center text-lg xsm:text-sm md:w-[50%] text-zinc-900 font-poppins mb-1">
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
        className="mySwiper w-full p-4 bg-zinc-900 rounded-lg.swiper-pagination-bullet .swiper-pagination-bullet-active rounded-xl shadow-md mt-10"
        ref={projRef}
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
