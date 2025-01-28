import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const textTimeline = gsap.timeline(); // Separate timeline for text animation
  const introTimeline = gsap.timeline(); // Separate timeline for initial animations

  const heroTextRef = useRef(null);
  const scrollTextRef = useRef(null);
  const scrollIconRef = useRef(null);
  const paraRef = useRef(null);
  const txtArr = ['Minimal.', 'Functional.', 'Impactful.'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

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
    // Initial animations for paragraph and scroll elements
    introTimeline
      .fromTo(
        paraRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' },
        'a'
      )
      .fromTo(
        scrollTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', delay: 0.7 },
        'a'
      )
      .fromTo(
        scrollIconRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', delay: 0.7 },
        'a'
      );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      animateText();
    }, 6000); // Change text every 6 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="xsm:w-full h-[100svh] relative xsm:px-4 md:px-8 flex justify-center text-zinc-900">
      <h1 ref={heroTextRef} className="xsm:text-[15vw] md:text-[9vw] z-[10] tracking-wide text-black font-poppins absolute xsm:top-[30%] md:top-[29%]">
        {txtArr[currentTextIndex]}
      </h1>
      <p
        ref={paraRef}
        className="xsm:text-[4vw] md:text-[1.4vw] xsm:tracking-wide md:tracking-wider tracking-wider z-[11] text-center text-zinc-900 font-inter absolute xsm:top-[45%] md:top-[55%] md:mt-4"
      >
        Turning ideas into stunning, interactive <br /> web solutions.
      </p>
      <div className="xsm:w-full xsm:h-[10svh] absolute bottom-[13svh] flex justify-between items-center xsm:p-4 p-4 md:px-10 xsm:text-2xl md:text-lg font-poppins">
        <i ref={scrollIconRef} className="ri-arrow-down-line xsm:text-3xl"></i>
        <h3 ref={scrollTextRef}>ScrollDown</h3>
      </div>
    </div>
  );
};

export default Hero;
