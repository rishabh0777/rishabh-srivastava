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
        { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
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
    <div className="xsm:w-full h-[100svh] relative px-4 flex justify-center text-zinc-900">
      <h1 ref={heroTextRef} className="text-[15vw] z-[10] tracking-wide text-black font-poppins absolute top-[30%]">
        {txtArr[currentTextIndex]}
      </h1>
      <p
        ref={paraRef}
        className="text-[4vw] tracking-wide z-[11] text-center text-zinc-900 font-inter absolute top-[45%]"
      >
        Turning ideas into stunning, interactive <br /> web solutions.
      </p>
      <div className="xsm:w-full xsm:h-[10svh] absolute bottom-[13svh] flex justify-between items-center p-4 text-2xl font-poppins">
        <i ref={scrollIconRef} className="ri-arrow-down-line text-3xl"></i>
        <h3 ref={scrollTextRef}>ScrollDown</h3>
      </div>
    </div>
  );
};

export default Hero;
