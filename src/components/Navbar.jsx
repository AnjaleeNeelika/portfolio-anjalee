import React, { useState } from 'react'
import NameSignature from '../assets/images/name_signature.png'
import { HashLink } from 'react-router-hash-link'
import { IoClose, IoMenu } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!open);
    }

    return (
        <div className='w-full bg-[#070f2b]/10 flex justify-between items-center p-10 gap-10 top-0 left-0 z-50 fixed backdrop-blur-md border-b border-white/20'>
            <div className='div-signature'>
                <img src={NameSignature} alt='signature' className='h-8' />
            </div>

            <nav className={`text-white font-medium flex flex-wrap gap-10 uppercase lg:flex-row flex-col lg:opacity-100 opacity-0 not-lg:absolute ${open ? 'w-[200px] opacity-100 top-32 right-12 text-right bg-blue-950 p-10 rounded-md shadow-2xl/80 shadow-blue-800' : ''}`}>
                <HashLink
                    smooth
                    to='#about-me'
                    className='hover:underline underline-offset-4'
                >
                    About Me
                </HashLink>
                <HashLink
                    smooth
                    to='#experience'
                    className='hover:underline underline-offset-4'
                >
                    Experience
                </HashLink>
                <HashLink
                    smooth
                    to='#education'
                    className='hover:underline underline-offset-4'
                >
                    Education
                </HashLink>
                <HashLink
                    smooth
                    to='#skills'
                    className='hover:underline underline-offset-4'
                >
                    Skills
                </HashLink>
                <HashLink
                    smooth
                    to='#projects'
                    className='hover:underline underline-offset-4'
                >
                    Projects
                </HashLink>
                <HashLink
                    smooth
                    to='#contact'
                    className='hover:underline underline-offset-4'
                >
                    Contact Me
                </HashLink>
            </nav>

            <div className='lg:hidden'>
                <button onClick={handleMenu} className='hover:cursor-pointer text-white text-3xl'>
                    {open ? 
                        <IoClose />
                        :
                        <IoMenu />
                    }
                </button>                
            </div>
        </div>
    )
}

export default Navbar