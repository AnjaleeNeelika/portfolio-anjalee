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
            <section id='about-me'>
                <AboutMe />
            </section>
            <section id='experience'>
                <Experience />
            </section>
            <section id='education'>
                <Education />
            </section>
            <section id='skills'>
                <Skills />
            </section>
            <section id='projects'>
                <Projects />
            </section>
            <section id='contact'>
                <Contact />
            </section>
        </>
    )
}

export default Home