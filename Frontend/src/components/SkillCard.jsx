import React from 'react';

const SkillCard = ({ className, desc, title, icon, click }) => {
  return (
    <div
      onClick={click}
      className={`${className} all ease duration-700 w-[80vw] h-[49vh] bg-zinc-800 rounded-2xl absolute bottom-0 flex flex-col items-center justify-center text-white p-2 py-4 left-1/2 transform translate-x-[-50%] shadow-sm border`}
    >
      <i className={`${icon} text-6xl mb-2`}></i>
      <h3 className="text-2xl font-bold tracking-widest">{title}</h3>
      <p className="description text-center mt-2 text-[4.5vw] tracking-widest px-5">
        {desc}
      </p>
    </div>
  );
};

export default SkillCard;
