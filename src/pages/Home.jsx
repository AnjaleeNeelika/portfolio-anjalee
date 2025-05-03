import React from 'react'
import Hero from '../sections/Hero'
import AboutMe from '../sections/AboutMe'
import Experience from '../sections/Experience'
import Education from '../sections/Education'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'

const Home = () => {
    return (
        <>
            <section id='hero'>
                <Hero />
            </section>
            <section id='about-me'  className='mt-10 scroll-mt-20'>
                <AboutMe />
            </section>
            <section id='experience'  className='mt-10 scroll-mt-20'>
                <Experience />
            </section>
            <section id='education'  className='mt-10 scroll-mt-20'>
                <Education />
            </section>
            <section id='skills'  className='mt-10 scroll-mt-20'>
                <Skills />
            </section>
            <section id='projects'  className='mt-10 scroll-mt-20'>
                <Projects />
            </section>
            <section id='contact'  className='mt-10 scroll-mt-20'>
                <Contact />
            </section>
        </>
    )
}

export default Home