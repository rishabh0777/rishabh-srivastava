import React, { useState, useRef, useEffect } from "react";
import SkillCard from "./SkillCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const [count, setCount] = useState(0);
  const headRef = useRef(null);
  const paraRef = useRef(null);
 

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
        y: -50,
        opacity: 0,
        duration: 1,
        scale:0.5,
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
        scale:0.8,
      })

      
    });
    mm.add("(max-width: 767px)", () => {
      gsap.from(headRef.current, {
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          markers: false,
        },
        y: -50,
        opacity: 0,
        duration: 1,
       
      });
      gsap.from(paraRef.current, {
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          markers: false,
        },
        scale:0.5,
        opacity: 0,
        duration: 1,
      });
      

    

      
    });
    return () => mm.revert(); 
  
},[]);

  const skillData = [
    {
      id: 1,
      icon: "devicon-html5-plain",
      title: "HTML5",
      description:
        "The foundation of web pages, providing structure and meaning to web content with semantic elements.",
      className:
        count === 6
          ? "rotate-[0deg] duration-700 all-ease z-10 translate-x-[-50%] translate-y-[-4%]"
          : "rotate-[-2deg] z-2",
    },
    {
      id: 2,
      icon: "devicon-css3-plain",
      title: "CSS3",
      description:
        "A stylesheet language used to create visually engaging and responsive layouts for web applications.",
      className:
        count === 5
          ? "rotate-[0deg] duration-700 all-ease z-10 translate-x-[-50%] translate-y-[-4%]"
          : "rotate-[3deg] z-3",
    },
    {
      id: 3,
      icon: "devicon-javascript-plain",
      title: "JavaScript",
      description:
        "A versatile programming language for adding interactivity and dynamic behavior to web pages.",
      className:
        count === 4
          ? "rotate-[0deg] duration-700 all-ease z-10 translate-x-[-50%] translate-y-[-4%]"
          : "rotate-[-4deg] z-4",
    },
    {
      id: 4,
      icon: "devicon-nodejs-plain",
      title: "Node.js",
      description:
        "A JavaScript runtime built on Chrome's V8 engine, used for building scalable server-side applications.",
      className:
        count === 3
          ? "rotate-[0deg] duration-700 all-ease z-10 translate-x-[-50%] translate-y-[-4%]"
          : "rotate-[2deg] z-5",
    },
    {
      id: 5,
      icon: "devicon-express-original",
      title: "Express.js",
      description:
        "A minimal and flexible Node.js web application framework for building APIs and web apps.",
      className:
        count === 2
          ? "rotate-[0deg] duration-700 all-ease z-10 translate-x-[-50%] translate-y-[-4%]"
          : "rotate-[-6deg] translate-x-[-55%] translate-y-[-6%] z-6",
    },
    {
      id: 6,
      icon: "devicon-mongodb-plain",
      title: "MongoDB",
      description:
        "A NoSQL database program known for its scalability, flexibility, and JSON-like document structure.",
      className:
        count === 1
          ? "rotate-[0deg] duration-700 all-ease z-10 translate-x-[-50%] translate-y-[-4%]"
          : "rotate-[-6deg] translate-x-[-55%] translate-y-[-10%] z-8",
    },
    {
      id: 7,
      icon: "devicon-react-original",
      title: "React",
      description:
        "A JavaScript library for building user interfaces with a component-based architecture and fast rendering.",
      className:
        count === 0
          ? "rotate-[0deg] duration-700 all-ease z-10 translate-x-[-50%] translate-y-[-4%]"
          : "rotate-[-6deg] translate-x-[-55%] duration-600 translate-y-[-10%] z-8",
    },
  ];

 

  const increaseIndex = () => {
    setCount((prev) => (prev + 1) % 7);
   
  };

  return (
    <div className="w-full xsm:min-h-[110svh] py-4 relative overflow-hidden flex flex-col items-center">
      <h1
        ref={headRef}
        className="text-center xsm:text-4xl md:text-[5vw] xsm:mt-16 md:mt-2 text-zinc-900 tracking-wide font-poppins absolute left-1/2 translate-x-[-50%] whitespace-nowrap"
      >
        Code Toolkit
      </h1>
      <p 
      ref={paraRef}
      className="text-center xsm:mt-4 md:w-[70%] lg:w-[50%] text-lg tab:w-[80%]  absolute md:top-[8vh] xsm:top-[10vh] xsm:-translate-y-[-10vh] md:-translate-y-[-8vh] text-zinc-700 px-6">
        Unlock the power of coding with a robust toolkit designed to simplify
        development, improve productivity, and create stunning user interfaces.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xsm:gap-8 md:mt-5 xsm:mt-20 px-4">
        {skillData.map((item) => (
          <SkillCard
            key={item.id}
            desc={item.description}
            icon={item.icon}
            title={item.title}
            className={`${item.className}`}
            click={increaseIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
