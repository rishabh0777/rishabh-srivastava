import React from 'react';

const ProjectCard = React.memo(({ project }) => {
  return (
    <div 
    onClick={() => window.open(project.link, "_blank")}
    className='project-card w-[90%] min-h-[300px] text-white rounded-lg  p-4 relative mt-8'>
      <div className='flex flex-col justify-between'>
        <img src={project.img} className='xsm:w-full xsm:h-[60%] md:hover:scale-[1.01] object-cover rounded-lg border-[0.2em]' alt={project.title} />
      </div>
      <h2 className='text-lg font-bold mb-2 mt-2'>{project.title}</h2>
      <p className='mb-4 text-sm'>{project.description}</p>
    </div>
  );
});


export default ProjectCard;