import React from 'react'

const Contact = () => {
  return (
    <div className="relative w-full xsm:min-h-[100svh] h-[100svh] pb-8 flex flex-col items-center px-2 py-2">
      <h1 className="text-5xl text-center font-poppins">Let's</h1>
      <h1 className='text-[35vw] text-center tracking-wider font-poppins'>Talk</h1>
      <div className='w-[90%] min-h-[30svh]'>
        <form 
        className='w-full h-full flex flex-col items-center px-2 py-4 gap-[6vh] text-zinc-900'
        action="">
            <input 
            className='w-[90%] h-[15%] outline-none border-b-2 border-zinc-500 bg-transparent px-2 py-2'
            placeholder='Enter your name'
            name='name'
            type="text" />
            <input
            className='w-[90%] h-[15%] outline-none border-b-2 border-zinc-500 bg-transparent px-2 py-2'
            placeholder='Enter your email'
            name='email'
            type="email" />
            <textarea
            className='w-[90%] h-[15%] outline-none border-b-2 border-zinc-500 bg-transparent px-2 py-2'
            placeholder='Enter your message'
            name="message" id="" cols="30" rows="10"></textarea>
            <div className='bg-zinc-900 text-white w-[25vw] h-[7vh] rounded-full flex justify-center items-center'>
            <i class="ri-arrow-right-line text-[2rem] text-center"></i>
            </div>
        </form>

      </div>
    </div>
  )
}

export default Contact