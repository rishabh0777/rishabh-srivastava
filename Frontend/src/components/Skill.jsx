import React from 'react';


const Skill = () => {

  return (
    <>
      <div className='w-full h-[100svh] relative px-4 flex flex-col items-center justify-between'>
        <div className='w-full h-[40vh] relative text-5xl'>
          <i className="devicon-html5-plain colored absolute top-[20%] left-[35%] text-red-500"></i>
          <i className="devicon-css3-plain colored absolute top-[40%] left-[80%] text-blue-500"></i>
          <i className="devicon-javascript-plain colored absolute top-[60%] left-[10%] text-yellow-500"></i>
          <i className="devicon-tailwindcss-original coloured absolute top-[70%] left-[50%] text-blue-500"></i>
        </div>
        <p className='xsm:text-[3.4vw] w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-900 px-4'>
          Combining creativity and technical expertise, I specialize in building interactive and visually stunning web applications. With a strong command of modern technologies, I deliver scalable and seamless solutions tailored to user needs.
        </p>
        <div className='w-full h-[40vh] relative text-5xl'>
          <i className="devicon-nodejs-plain-wordmark colored absolute top-[50%] text-green-500 left-[10%]"></i>
          <i className="devicon-mongodb-plain colored absolute top-[40%] left-[80%] text-blue-500"></i>
          <i className="devicon-express-original colored absolute top-[65%] left-[50%] text-red-500"></i>
          <i className="devicon-react-original colored absolute top-[20%] left-[40%] text-yellow-500"></i>
        </div>
      </div>
    </>
  )
}

export default Skill;