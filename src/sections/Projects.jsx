import React from 'react'
import ProjectCard from '../components/ProjectCard'
import VoguePawn from '../assets/images/VoguePawn_Home.png'
import PropertyPulse from '../assets/images/PropertyPulse_Home.png'
import Levone from '../assets/images/Levone_Home.png'
import { IoLogoGithub} from 'react-icons/io5'

const Projects = () => {
    const projectsList = [
        {
            id: 1,
            projectName: "Vogue Pawn",
            image: VoguePawn,
            description: "Gold pawning management system that helps the customers and the employees of a gold pawning center to experience smooth pawing process.",
            skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            links: [
                {
                    "name": 'GitHub',
                    "link": 'https://github.com/SandalikaSC/Vogue',
                    "icon": <IoLogoGithub />,
                }
            ]
        }, {
            id: 2,
            projectName: "Property Pulse",
            image: PropertyPulse,
            description: "Property management system that helps the property owners to manage their properties remotely and ensure the safety.",
            skills: ["React JS", "Spring Boot", "Tailwind CSS", "Postgre SQL"],
            links: [
                {
                    "name": 'GitHub',
                    "link": 'https://github.com/PropertyPulse',
                    "icon": <IoLogoGithub />,
                }
            ]
        }, {
            id: 3,
            projectName: "Levone",
            image: Levone,
            description: "An e-commerce web application for clothing. Has different categories to choose from, order and make payments for them.",
            skills: ["React JS", "Spring Boot", "Tailwind CSS", "Postgre SQL"],
            links: [
                {
                    "name": 'GitHub',
                    "link": 'https://github.com/AnjaleeNeelika/Levone',
                    "icon": <IoLogoGithub />,
                }
            ]
        },
    ]

    return (
        <section id='projects' className='lg:px-40 px-20 py-20 scroll-mt-24'>
            <p className='w-fit text-5xl font-medium bg-gradient-to-r from-[#F806CC] via-[#D10BA2] to-[#7900B9] pb-3 text-transparent bg-clip-text'>
                Projects
            </p>

            <div className='mt-20 text-white flex justify-center gap-20 flex-wrap'>
                {projectsList.slice().reverse().map((project, index) => (
                    <ProjectCard key={project?.id + '_' + index} {...project} />
                )) }
                {/* <ProjectCard /> */}
            </div>
        </section>
    )
}

export default Projects