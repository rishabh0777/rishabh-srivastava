import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillCard = ({ className, desc, title, icon, click }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia(); // Corrected matchMedia usage
    const card = cardRef.current; // Get the card element

    mm.add('(min-width: 768px)', () => {
      gsap.fromTo(
        card,
        { scale: 1.6 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            marker: false,
            end: 'top 70%',
            scrub: true,
            onLeave: () => card.removeAttribute("style")
          }
        }
      );
    });
    mm.add('(max-width: 767px)', () => {
      gsap.fromTo(card, { scale: 1.6 }, { scale: 1,
         scrollTrigger: { 
          trigger: card,
           start: 'top 80%', 
           end: 'top 70%',
            scrub: true, 
            markers: false,
            onLeave: () => card.removeAttribute("style")
         }
      });
    });

    return () => mm.revert(); // Clean up GSAP matchMedia on unmount
  }, []);

 

  return (
    <div
      ref={cardRef}
      onClick={click}
      className={`${className} skill-card all-ease duration-700 xsm:w-[80vw] lg:w-[30vw] lg:h-[60vh] md:w-[35vw] md:h-[60vh] xsm:h-[49vh] sm:w-[48vw] sm:h-[55vh] bg-zinc-800 rounded-2xl absolute xsm:bottom-0 md:bottom-[4vh] sm:bottom-[5vh] left-1/2 transform translate-x-[-50%] shadow-sm border hover:shadow-lg hover:border-zinc-500 transition-all cursor-pointer`}
    >
      <div
        className='w-full h-full flex flex-col items-center justify-center text-white p-2 py-4'>
        <i className={`${icon} xsm:text-6xl md:text-6xl mb-2 hover:text-zinc-300 transition-all`}></i>
        <h3 className="xsm:text-2xl sm:text-[2.4vw] md:text-[1.8vw] lg:text-[1.5vw] font-bold tracking-widest hover:text-zinc-300 transition-all">
          {title}
        </h3>
        <p className="description text-center mt-2 xsm:text-[4.5vw] sm:text-[1.5vw] md:text-[1.4vw] lg:text-[1.2vw] tracking-widest px-5">
          {desc}
        </p>
      </div>

    </div>
  );
};

export default SkillCard;
