import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // Animation for footer elements
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="xsm:w-full bg-zinc-900 text-zinc-200 py-6 px-4 flex flex-col items-center gap-4 text-center"
    >
      <h2 className="text-2xl font-poppins font-semibold">Connect with Me</h2>
      <div className="flex gap-6">
        <a
          href="https://github.com/rishabh0777"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="ri-github-fill text-3xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rishabh-srivastava-1b17461b0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="ri-linkedin-fill text-3xl"></i>
        </a>
        <a
          href="mailto:your-email@example.com"
          className="hover:text-white transition"
        >
          <i className="ri-mail-fill text-3xl"></i>
        </a>
      </div>
      <p className="text-sm text-zinc-400 font-inter">
        &copy; {new Date().getFullYear()} Rishabh Srivastava. All rights reserved.
      </p>
      <button
        className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg font-poppins transition text-sm mt-4"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to Top
      </button>
    </footer>
  );
};

export default Footer;
