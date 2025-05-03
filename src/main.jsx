import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router'
import Hero from './sections/Hero.jsx'
import Experience from './sections/Experience.jsx'
import Education from './sections/Education.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import AboutMe from './sections/AboutMe.jsx'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
    <HashRouter>    
        {/* <Route index element={<App />} /> */}
        <Routes>
            {/* <Route path='/' element={<Hero />} />
            <Route path='/about-me' element={<AboutMe />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/education' element={<Education />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} /> */}
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </HashRouter>,
)
