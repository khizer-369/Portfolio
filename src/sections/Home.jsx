import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Particles from '../components/Particles';
import SocialIcons from '../components/SocialIcons';

const Home = () => {
  console.log(Resume);
  return (
    <section id='home' className='relative h-[200vh] lg:h-screen'>
      <div className='absolute h-[200vh] lg:h-screen w-full z-0'>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={250}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className='absolute'>
        <div className='absolute h-75 w-75 sm:h-95 sm:w-95 md:h-120 md:w-120 -top-32 -left-32 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-3xl animate-pulse'></div>
      </div>
      <div className='relative h-[200vh] lg:h-screen w-full flex flex-col lg:flex-row justify-evenly lg:justify-between items-center px-10 pt-5 z-10'>
        <div className='h-[80vh] w-[90vw] sm:w-165 flex flex-col justify-evenly'>
          <div className='h-10 text-2xl tracking-wider text-center lg:text-start'>
            <Typewriter
              words={["Web Developer"]}
              loop={true}
              typeSpeed={75}
              deleteSpeed={45}
              delaySpeed={500}
              cursor
            />
          </div>
          <h1 className='text-[#00bf8f] text-4xl sm:text-5xl font-bold tracking-wide text-center lg:text-start'>Hello, I am <span className='text-white text-5xl sm:text-6xl mt-5'>Muhammad Khizer</span></h1>
          <p className='lg:w-[85%] text-gray-300 sm:text-lg text-center lg:text-start'>I'm a MERN stack developer who enjoys building clean and responsive web applications. I like turning ideas into real products with modern technologies.</p>
          <div className='flex gap-10 justify-center lg:justify-start'>
            <a href='#projects' className='Gradient h-13 w-38 rounded-full cursor-pointer text-lg font-medium hover:scale-105 transition-all text-center pt-3'>View My Work</a>
            <a href="/Resume.pdf" download className='bg-white text-black h-13 w-38 rounded-full cursor-pointer font-medium hover:scale-105 transition-all outline-none text-center pt-3.5'>My Resume</a>
          </div>
          <SocialIcons />
        </div>
        <div className='relative flex justify-center items-center'>
          <div className='absolute h-full w-full rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-3xl animate-pulse z-0'></div>
          <img src="./avator.png" alt="avator" className='relative h-[80vh] lg:h-135 z-10' />
        </div>
      </div>
    </section>
  )
}

export default Home
