import {useRef, useState} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
const Nav = () => {
  const [show, setShow] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    if(!show){
      gsap.to(navRef.current, {left: 0, duration: 0.8, ease: 'power3.inOut'});
      setShow(true);
    }else{
      gsap.to(navRef.current, {left: '100%', duration: 0.8, ease: 'power3.inOut'});
      setShow(false);
    }
  }
  
  return (
    <>
    <nav ref={navRef} className="xsm:w-full xsm:h-[100svh] bg-white text-zinc-900 font-poppins overflow-y-hidden fixed top-0 left-[100%] z-50 shadow-md shadow-black">
        <div className="w-full h-[10svh] text-3xl flex items-center px-5">
        <i onClick={toggleNav} className="ri-close-line"></i>
        </div>
        
        <div className="w-full h-[90svh] flex flex-col items-center justify-center">
            <ul>
                <li className="text-2xl py-5">Home</li>
                <li className="text-2xl py-5">Work</li>
                <li className="text-2xl py-5">About</li>
                <li className="text-2xl py-5">Contact</li>
            </ul>
        </div>
    </nav>
    <nav className="w-full xsm:h-[10svh] text-zinc-900 font-poppins flex items-center justify-between px-5">
      <h3 className="text-md lg:text-2xl text-bold">Rishabh Srivastava</h3>
    <i onClick={toggleNav} className="ri-menu-4-fill text-2xl lg:hidden"></i>
    </nav>
    </>
  )
}

export default Nav