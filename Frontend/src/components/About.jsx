import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const paraRef = useRef(null);
  const greetRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const [paraSplittedText, setParaSplittedText] = useState([]);
  const [splittedTextName, setSplittedTextName] = useState([]);

  const paraAnim = () => {
    const pText = `✨ Specializing in HTML, CSS, JavaScript, and modern frameworks like React ⚛️ and Tailwind CSS 🎨, I craft seamless, user-centric interfaces with clean, maintainable code. 💻

On the backend, I utilize Node.js ⚡, Express.js 🌐, and MongoDB 🍃 to build scalable, efficient, and robust server-side solutions.

With a strong focus on bridging design and functionality, I strive to create high-quality, impactful digital experiences. 🚀`;

    const splPara = pText.split("").map((letter, index) => (
      <span key={index} className="inline-block">
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
    setParaSplittedText(splPara);
  };

  const TxtAnim = () => {
    const h1Txt = "Rishabh";
    const splTxt = h1Txt.split("").map((letter, index) => (
      <span key={index} className="inline-block">
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
    setSplittedTextName(splTxt);
  };

  useEffect(() => {
    TxtAnim();
    paraAnim();
  }, []);

  useEffect(() => {
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
    if (!h1Ref.current || !pRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.from(paraRef.current, {
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 50%",
          end: "top 30%",
          scrub: true,
          markers: false,
        },
        y: -200,
        opacity: 0,
        scale:0.5
      }
      )
      gsap.from(greetRef.current, {
        scrollTrigger: {
          trigger: greetRef.current,
          start: "top 70%",
          end: "top 50%",
          scrub: true,
          markers: false,
        },
        x: -100,
        opacity: 0,
        duration: 1,
        
      });
      gsap.fromTo('#myName span',
        {y: 200, opacity: 0},
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          scrollTrigger: {
            trigger: "#myName",
            start: "top 50%",
            end: "top 30%",
            scrub: true,
            markers: false,
          },
        }
        ,'a'
      )
      

     
      gsap.fromTo(
        "#para span",
        { opacity:0, y: '200'},
        {
          opacity:1,
          y:0,

          stagger: 0.02,
          scrollTrigger: {
            trigger: "#para",
            start: "top 50%",
            end: "top 40%",
            scrub: true,
          },
        }, 'a');
    });
     
    mm.add("(max-width: 767px)", ()=>{
      gsap.from(paraRef.current, {
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 70%",
          end: "top 60%",
          scrub: true,
          markers: false,
        },
        y: 50,
        opacity: 0,
        duration: 1,
      })
      gsap.from(greetRef.current,{
        scrollTrigger: {
          trigger: greetRef.current,
          start: "top 70%",
          end: "top 50%",
          scrub: true,
          markers: false,
        },
        x: -50,
        opacity: 0,
        duration: 1,
      
      })
      gsap.fromTo("#myName span",{
        opacity:0,
        y: '100',
      },
      {
        opacity:1,
        y:0,
        stagger: 0.02,
        scrollTrigger: {
          trigger: "#myName",
          start: "top 70%",
          end: "top 60%",
          scrub: true,
          markers: false,
        }
        
      })
      gsap.fromTo(
        "#para span",
        { opacity:0, y: '50'},
        {
          opacity:1,
          y:0,

          stagger: 0.02,
          scrollTrigger: {
            trigger: "#para",
            start: "top 70%",
            end: "top 50%",
            scrub: true,
          },
        }, 'a');

    })

    return () => mm.revert();
  }, [splittedTextName]); // Run only after text updates
 
  

  return (
    <div className="relative w-full xsm:min-h-[70svh] min-h-[100svh] pb-8 flex flex-col items-center px-2 py-2">
      <h2 ref={paraRef} className="xsm:text-[5vw] md:w-[60%] tab:text-[2.4vw] md:text-[2vw] text-center text-zinc-500 font-inter tracking-wider">
        <span className="text-zinc-900 font-bold font-poppins tracking-widest">
          The most{" "}
        </span><br />
        passionate, dedicated, aspiring, innovative{" "}
        <span className="text-zinc-900 font-bold font-poppins tracking-widest">
          full-stack developer
        </span>
        .
      </h2>
      <h2
        ref={greetRef}
        className="item-start xsm:text-[7vw] md:text-[5vw] w-full xsm:px-8 text-zinc-500 font-playflair tracking-wider xsm:mt-6 md:mt-6 md:text-left md:ml-[10vw]"
      >
        Hii I'm
      </h2>
      <h1 id="myName" ref={h1Ref} className="xsm:text-[20.1vw] xsm:px-5 md:text-[15vw] font-playflair font-black lg:tracking-widest text-zinc-800 md:tracking-wider xsm:tracking-wider tab:tracking-wide">
        {splittedTextName}
      </h1>
      <p id="para" ref={pRef} className="md:px-8  xsm:text-[4vw] tab:text-[3vw] md:text-[2vw] w-[90%] text-zinc-500 font-inter tracking-wider mt-2">
        {paraSplittedText}
      </p>
    </div>
  );
};

export default About;
