import React from "react";


const About = () => {
    return(
      <div className="relative w-full xsm:min-h-[100svh] h-[100svh] pb-8 flex flex-col items-center px-2 py-2">
        <h2 className="text-[5vw] text-center text-zinc-500 font-inter tracking-wider">
        <span className="text-zinc-900 font-bold font-poppins tracking-widest">The most </span> passionate, dedicated, aspiring, innovative <span className="text-zinc-900 font-bold font-poppins tracking-widest">full-stack developer</span>.
        </h2>
        <h2 className="item-start text-[10vw] w-full px-8 text-zinc-500 font-inter tracking-wider mt-12">Hii I'm</h2>
        <h1 className="text-[18vw] font-poppins tracking-wider">Rishabh</h1>
        <p className="px-8 text-[4.3vw] text-zinc-500 font-inter tracking-wider mt-2">
        ✨ Specializing in HTML, CSS, JavaScript, and modern frameworks like React ⚛️ and Tailwind CSS 🎨, I craft seamless, user-centric interfaces with clean, maintainable code.

        💻 On the backend, I utilize Node.js ⚡, Express.js 🌐, and MongoDB 🍃 to develop scalable, robust, and efficient server-side solutions. With a focus on bridging design and functionality, I aim to deliver high-quality, impactful digital experiences. 🚀
        </p>
        
      </div>
    )
}

export default About;