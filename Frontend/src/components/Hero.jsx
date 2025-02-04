import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

const Hero = () => {
  const textTimeline = gsap.timeline(); // Separate timeline for text animation
  const introTimeline = gsap.timeline(); // Separate timeline for initial animations
  const heroTextRef = useRef(null);
  const scrollTextRef = useRef(null);
  const scrollIconRef = useRef(null);
  const paraRef = useRef(null);
  const [scrollText, setScrollText ] = useState("Scroll down");
  const txtArr = ["Minimal.", "Functional.", "Impactful."];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const animateText = () => {
    textTimeline
      .to(heroTextRef.current, {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % txtArr.length);
        },
      })
      .to(heroTextRef.current, {
        duration: 2,
        opacity: 1,
      });
  };

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Initial animations for paragraph and scroll elements
    introTimeline
      .fromTo(
        paraRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
        "a"
      )
      .fromTo(
        scrollTextRef.current,
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.7 },
        "a"
      )
      .fromTo(
        scrollIconRef.current,
        { opacity: 0, y: -70 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.7 },
        "a"
      );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      animateText();
    }, 6000); // Change text every 6 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        // Scrolling Down
        gsap.to(scrollIconRef.current, { rotate: 180, duration: 0.5 });
        setScrollText('ScrollUp')
      } else {
        // Scrolling Up
        gsap.to(scrollIconRef.current, { rotate: 0, duration: 0.5 });
        setScrollText('ScrollDown')
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <div className="xsm:w-full h-[110svh] relative xsm:px-4 md:px-8 flex justify-center text-zinc-900">
      <h1
        ref={heroTextRef}
        className="xsm:text-[15vw] tab:text-[12vw] z-[10] tracking-wide text-black font-poppins absolute xsm:top-[30%] sm:top-[35%] md:top-[29%] tab:top-[35%] transform xsm:translate-y-[-30%] md:translate-y-[-29%] tab:translate-y-[-35%] sm:translate-y-[-35%]"
      >
        {txtArr[currentTextIndex]}
      </h1>
      <p
        ref={paraRef}
        className="xsm:text-[4vw] sm:text-[2.5vw] tab:text-[1.7vw] xsm:tracking-wide md:tracking-wider tracking-wider z-[11] text-center text-zinc-900 font-inter absolute xsm:top-[40%] tab:top-[53%] md:top-[50%] lg:top-[53%] 2xl:top-[50%] sm:top-[47%] transform xsm:translate-y-[-40%] tab:translate-y-[-53%]  2xl:translate-y-[-47%] lg:translate-y-[-53%]  md:translate-y-[-470%] sm:translate-y-[-47%] mt-4"
      >
        Turning ideas into stunning, interactive <br /> web solutions.
      </p>
      <div className="xsm:w-full xsm:h-[10svh] absolute bottom-[13svh] flex justify-between items-center xsm:p-4 p-4 md:px-10 xsm:text-2xl md:text-lg font-poppins">
        <i ref={scrollIconRef} className="ri-arrow-down-line xsm:text-3xl"></i>
        <h3 className="all-ease duration-600 " ref={scrollTextRef}>{scrollText}</h3>
      </div>
    </div>
  );
};

export default Hero;
