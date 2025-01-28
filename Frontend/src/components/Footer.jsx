import React from 'react'

const Footer = () => {
  return (
    <div className='xsm:w-full h-[100svh] relative px-4 flex text-zinc-900 flex-col'>
      <h1 className='font-poppins text-[9vw] mt-14 tracking-widest font-medium'>GET IN TOUCH</h1>
      <a
        className='mt-8 font-poppins text-[4vw] flex gap-1 font-medium tracking-wider text-zinc-600 justify-center items-center'
        href="mailto:rishabhsrivastava7777@gmail.com?subject=Contact%20Request&body=Hi%20Rishabh,%20I%20would%20like%20to%20connect%20with%20you."
        target="_blank"
      >
        <i className="ri-mail-send-line text-zinc-900 text-[5vw]"></i>
        rishabhsrivastava7777@gmail.com
      </a>
      <h2 className='mt-12 font-poppins text-[9vw] font-medium tracking-wider text-zinc-900'>Connect with <br /> Social</h2>
      <div className='w-full flex flex-col gap-8 mt-8 p-4 text-[5vw]'>
      <div className='flex gap-4 border-b-2 border-zinc-500 justify-between'>
      <h3 className='flex gap-1'>
      <i class="ri-github-fill"></i>
        Github</h3>
        <i class="ri-arrow-right-up-line"></i>
      </div>
      <div className='flex gap-4 border-b-2 border-zinc-500 justify-between'>
      <h3 className='flex gap-1'>
      <i class="ri-linkedin-box-fill"></i>
        Linkedin</h3>
        <i class="ri-arrow-right-up-line"></i>
      </div>
      <div className='flex gap-4 border-b-2 border-zinc-500 justify-between'>
      <h3 className='flex gap-1'>
      <i class="ri-instagram-fill"></i>
        Instagram</h3>
        <i class="ri-arrow-right-up-line"></i>
      </div>
      </div>
      <div className="text-[3vw] text-zinc-700 font-inter absolute bottom-5 left-0 px-4 flex justify-between w-full items-center">
      <p>
        &copy; {new Date().getFullYear()} Rishabh Srivastava. All rights reserved.
      </p>
      <div 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='text-[8vw] w-[10vw] h-[10vw] bg-zinc-700 rounded-full flex justify-center items-center text-white'>
      <i class="ri-arrow-up-line"></i>
      </div>
      </div>

    </div>
  )
}

export default Footer