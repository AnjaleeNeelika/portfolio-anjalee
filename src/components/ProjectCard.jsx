import React from 'react'

const ProjectCard = ( props ) => {
    return (
        <div className='bg-[#070F2B] max-w-[400px] w-full p-10 shadow-2xl/50 shadow-[#8255b6] rounded-lg border border-gray-800 hover:border-[#8255b6] hover:scale-105 transition-all duration-200'>
            <p className='text-center text-xl font-semibold'>{props.projectName}</p>
            <img src={props.image} alt='' className='w-full h-[200px] object-cover object-top mt-5' />
            <p className='mt-5 text-sm text-justify'>{props.description}</p>
            <div className='mt-5 w-fit'>
                {props.links.map((link, index) => (
                    <a key={index} href={link.link} className='text-3xl text-[#fff] hover:cursor-pointer hover:text-[#a035d1] duration-200'>
                        {link.icon}
                    </a>
                ))}
            </div>
            <div className='flex gap-3 mt-5 flex-wrap'>
                {props.skills.map((skill, index) => (
                    <span key={index} className='border-2 px-3 py-1 text-xs rounded-md border-[#5d0a83] text-[#a035d1]'>{skill}</span>
                ))}
            </div>
            
        </div>
    )
}

export default ProjectCard