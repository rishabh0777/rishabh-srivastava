import React, {useState} from 'react';
import SkillCard from './SkillCard';

const Skill = () => {
  const [count, setCount] = useState(0);


  const skillData = [
    {
      id: 1,
      icon: "devicon-html5-plain",
      title: "HTML5",
      description:
        "The foundation of web pages, providing structure and meaning to web content with semantic elements.",
      className: count===6?"rotate-[0deg] z-10 translate-x-[-50%] translate-y-[-4%]":"rotate-[-2deg] z-2", // Custom style for position/rotation
    },
    {
      id: 2,
      icon: "devicon-css3-plain",
      title: "CSS3",
      description:
        "A stylesheet language used to create visually engaging and responsive layouts for web applications.",
      className: count===5?"rotate-[0deg] z-10 translate-x-[-50%] translate-y-[-4%]":"rotate-[3deg] z-3",
    },
    {
      id: 3,
      icon: "devicon-javascript-plain",
      title: "JavaScript",
      description:
        "A versatile programming language for adding interactivity and dynamic behavior to web pages.",
      className: count===4?"rotate-[0deg] z-10 translate-x-[-50%] translate-y-[-4%]":"rotate-[-4deg] z-4",
    },
    {
      id: 4,
      icon: "devicon-nodejs-plain",
      title: "Node.js",
      description:
        "A JavaScript runtime built on Chrome's V8 engine, used for building scalable server-side applications.",
      className: count===3?"rotate-[0deg] z-10 translate-x-[-50%] translate-y-[-4%]":"rotate-[2deg] z-5",
    },
    {
      id: 5,
      icon: "devicon-express-original",
      title: "Express.js",
      description:
        "A minimal and flexible Node.js web application framework for building APIs and web apps.",
      className: count===2?"rotate-[0deg] z-10 translate-x-[-50%] translate-y-[-4%]":"rotate-[6deg] translate-x-[-45%] translate-y-[-6%] z-6",
    },
    {
      id: 6,
      icon: "devicon-mongodb-plain",
      title: "MongoDB",
      description:
        "A NoSQL database program known for its scalability, flexibility, and JSON-like document structure.",
      className: count===1?"rotate-[0deg] z-10 translate-x-[-50%] translate-y-[-4%]":"rotate-[-6deg] translate-x-[-55%] translate-y-[-10%] z-8",
    },
    {
      id: 7,
      icon: "devicon-react-original",
      title: "React",
      description:
        "A JavaScript library for building user interfaces with a component-based architecture and fast rendering.",
      className: count===0?"rotate-[0deg] z-10 translate-x-[-50%] translate-y-[-4%]":"rotate-[-6deg] translate-x-[-55%] translate-y-[-10%] z-8",
    },
  ];

  const inceaseIndex = ()=>{
    if(count === 0 ){
      setCount(1)
    }else if(count === 1){
      setCount(2)
    }else if(count === 2){
      setCount(3)
    }else if(count === 3){
      setCount(4)
    }else if(count === 4){
      setCount(5)
    }else if(count === 5){
      setCount(6)
    }
    else if(count === 6){
      setCount(0)
    }
    
  }

  return (
    <div className="w-full h-[100svh] relative overflow-hidden flex flex-col items-center">
      <h1 className="text-center text-4xl mt-10 text-zinc-900 tracking-wide font-poppins absolute left-1/2 top-[10] translate-x-[-50%] whitespace-nowrap">
        Code Toolkit
      </h1>
      <p className="text-center mt-4 text-lg absolute top-[8vh] -translate-y-[-8vh] text-zinc-700 px-6">
        Unlock the power of coding with a robust toolkit designed to simplify development, improve productivity, and create stunning user interfaces.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 px-4">
        {skillData.map((item) => (
          <SkillCard
            key={item.id}
            desc={item.description}
            icon={item.icon}
            title={item.title}
            className={item.className}
            click={inceaseIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
