import React, { lazy, Suspense } from 'react'
import Blank from './components/Blank';
const NavBar = lazy(() => import("./components/NavBar"));
const Home = lazy(() => import("./sections/Home"));
const Cursor = lazy(() => import("./components/Cursor"));
const AboutMe = lazy(() => import("./sections/AboutMe"));
const Skills = lazy(() => import("./sections/Skills"));
const ScrollProgressBar = lazy(() => import("./components/ScrollProgressBar"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <Suspense fallback={<Blank />}>
      <div className='bg-black text-white'>
        <Cursor />
        <ScrollProgressBar />
        <div className='relative z-20'>
          <NavBar />
        </div>
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Suspense>
  )
}

export default App
