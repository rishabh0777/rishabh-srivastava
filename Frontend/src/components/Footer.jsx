import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
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

    // GSAP Animation for Background & Text Color
    gsap.fromTo(
      footerRef.current,
      { backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(24, 24, 27)' },
      {
        backgroundColor: 'rgb(24, 24, 27)',
        color: 'rgb(255, 255, 255)',
        ease: 'power1.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
      }
    );

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className="w-full xsm:h-[98svh] tab:h-[90svh] sm:h-[90svh] relative px-4 md:px-8 xsm:py-2 flex flex-col items-center justify-center transition-all duration-700 overflow-hidden"
    >
      <h1 className="text-center xsm:text-[12vw] tab:text-[6vw] md:text-[3vw] sm:text-[7vw] xsm:mt-2 tab:mt-[5vh] sm:mt-[2vh] tracking-widest font-medium">
        GET IN TOUCH
      </h1>
      <a
        className="mt-4 font-poppins xsm:text-[4vw] tab:text-[3vw] md:text-[2vw] flex gap-2 items-center"
        href="mailto:rishabhsrivastava7777@gmail.com?subject=Contact%20Request&body=Hi%20Rishabh,%20I%20would%20like%20to%20connect%20with%20you."
        target="_blank"
      >
        <i className="ri-mail-send-line xsm:text-[5vw] tab:text-[2vw] md:text-[3vw]"></i>
        rishabhsrivastava7777@gmail.com
      </a>
      <h2 className="mt-4 font-poppins text-center xsm:text-[9vw] sm:text-[5vw] tab:text-[3vw] md:text-[2vw] font-medium tracking-wider">
        Connect with<br />Social
      </h2>
      <div className="w-full flex flex-col gap-6 mt-8 p-4 md:p-2 xsm:text-[5vw] tab:text-[2vw] md:text-[1vw] sm:text-[3vw] font-poppins font-medium tracking-wider">
        {[
          { icon: 'ri-github-fill', text: 'Github', link: 'https://github.com/rishabh0777' },
          { icon: 'ri-linkedin-box-fill', text: 'Linkedin', link: 'https://www.linkedin.com/in/rishabh-srivastava-1b17461b0' },
          { icon: 'ri-instagram-fill', text: 'Instagram', link: 'https://www.instagram.com/rishabhsrivastava07' },
        ].map(({ icon, text, link }, index) => (
          <a
            key={index}
            href={link}
            target='_blank'
            className="flex justify-between items-center border-b-2 border-zinc-500 pb-2"
          >
            <h3 className="flex gap-2">
              <i className={icon}></i> {text}
            </h3>
            <i className="ri-arrow-right-up-line"></i>
          </a>
        ))}
      </div>
      <div className="xsm:text-[3vw] md:text-[1vw] tab:text-[2vw] sm:text-[2vw] absolute bottom-5 left-0 px-8 flex justify-between w-full items-center">
        <p>&copy; {new Date().getFullYear()} Rishabh Srivastava. All rights reserved.</p>
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="xsm:text-[5vw] tab:w-[4vw] tab:h-[4vw] tab:text-[2vw] md:text-[2vw] xsm:w-[7vw] xsm:h-[7vw] md:w-[2vw] md:h-[2vw] sm:w-[6vw] sm:h-[6vw] sm:text-[3vw] bg-zinc-700 rounded-full flex justify-center items-center text-white cursor-pointer"
        >
          <i className="ri-arrow-up-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
