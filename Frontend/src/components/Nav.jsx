import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const Nav = ({ scrollToSection }) => {
  const [show, setShow] = useState(false);
  const [splittedText, setSplittedText] = useState("");
  const [active, setActive] = useState("Home");
  const navRef = useRef(null);
  const h3Ref = useRef(null);

  const TxtAnim = () => {
    const h3Txt = "Rishabh Srivastava";
    const splTxt = h3Txt.split("").map((letter, index) => (
      <span key={index} className="inline-block">
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
    setSplittedText(splTxt);
  };

  useEffect(() => {
    TxtAnim();
  }, []);

 

  const toggleNav = () => {
    if (!show) {
      gsap.to(navRef.current, { left: 0, duration: 0.8, ease: "power3.inOut" });
      setShow(true);
    } else {
      gsap.to(navRef.current, { left: "100%", duration: 0.8, ease: "power3.inOut" });
      setShow(false);
      
      
    }}
    useEffect(()=>{
      if(show){
        gsap.from(".navOptions a", {
          x: 300,
          opacity: 0,
          duration: 1,
          stagger: 0.2
        }
        )
      }
        
      
    },[show, setShow])


    
    
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.from(".navOptions a", {
        y: -100,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
      });

      gsap.fromTo(
        "#name span",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2, stagger: 0.09 }
      );
    });

    return () => mm.revert();
  }, [splittedText]);

  return (
    <>
      {/* Mobile Nav */}
      <nav
      onClick={toggleNav}
        ref={navRef}
        className="overflow-hidden tab:hidden xsm:w-full xsm:h-[100vh] bg-zinc-900 text-white font-poppins fixed top-0 left-[100%] z-[100]"
      >
        <div className="w-full h-[10svh] text-3xl flex items-center px-5">
          <i onClick={toggleNav} className="ri-close-line cursor-pointer"></i>
        </div>

        <div className="w-full h-[90svh] flex flex-col items-center justify-center">
        <ul className="navOptions flex flex-col gap-[15vw] font-inter text-2xl">
            {[
              { name: "Home", ref: "hero" },
              { name: "Skills", ref: "skill" },
              { name: "Work", ref: "work" },
              { name: "About", ref: "about" },
            ].map((item) => (
              <a
                key={item.name}
                className="navOption mix-blend-difference group xsm:text-[8vw] sm:text-[5vw] md:text-[2vw] flex flex-col text-white cursor-pointer"
                onClick={() => scrollToSection(item.ref)}
              >
                <li>{item.name}</li>
                <div className="h-[0.4vh] w-0 rounded-full bg-zinc-700 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </ul>
        </div>
      </nav>

      {/* Desktop Nav */}
      <nav className={`w-full xsm:h-[10svh] bg-white/10 backdrop-blur-lg text-zinc-900 font-poppins flex items-center justify-between px-5 fixed top-0 left-0 z-50 ${show?"hidden":"flex"}`}>
        <h3 id="name" ref={h3Ref} className="text-md tab:text-[1.9vw] md:text-[1.3vw] font-medium tracking-wider">
          {splittedText}
        </h3>
        <i onClick={toggleNav} className={`ri-menu-4-fill text-2xl tab:hidden cursor-pointer`}></i>

        {/* Navigation Links */}
        <nav className="xsm:hidden tab:flex md:gap-14 px-4">
          <ul className="navOptions flex gap-[6vw] font-inter">
            {[
              { name: "Home", ref: "hero" },
              { name: "Skills", ref: "skill" },
              { name: "Work", ref: "work" },
              { name: "About", ref: "about" },
            ].map((item) => (
              <a
                key={item.name}
                className="group md:text-[1vw] tab:text-[1.4vw] flex flex-col text-zinc-900 cursor-pointer"
                onClick={() => scrollToSection(item.ref)}
              >
                <li>{item.name}</li>
                <div className="h-[0.4vh] w-0 rounded-full bg-zinc-700 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </ul>
        </nav>
      </nav>
    </>
  );
};

export default Nav;
