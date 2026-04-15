import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const Projects = () => {
  const startRef = useRef();
  const [range, setRange] = useState(["0%", "-70%"]);
  const { scrollYProgress } = useScroll({ target: startRef });
  const x = useTransform(scrollYProgress, [0, 1], range);

  useEffect(() => {
    const updateRange = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRange(["0%", "-250%"]);
      }
      else if (width < 768) {
        setRange(["0%", "-100%"]);
      }
      else {
        setRange(["0%", "-40%"]);
      }
    }
    updateRange();
  }, [])
  return (
    <section id='projects' className='h-[200vh] flex flex-col' ref={startRef}>
      <div className='sticky top-0 h-screen flex flex-col gap-10 overflow-hidden'>
        <div className='h-[13vh] w-full flex justify-center items-center pt-5'>
          <h1 className='text-5xl font-bold bg-linear-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] text-transparent bg-clip-text pb-1.5 opacity-85'>Projects</h1>
        </div>
        <motion.div style={{ x }} className='flex flex-1 gap-10 items-center pl-5 md:pl-10'>
          <div className='relative h-122 md:h-125 w-[95%] sm:w-[55%] md:w-[35%] shrink-0 rounded-lg overflow-hidden flex justify-center items-end'>
            <img src="/chat-app-image.png" alt="chat app image" className='absolute h-full w-full duration-250 hover:scale-102 z-0' />
            <a href="https://quick-chat-pink.vercel.app/" target='_blank' className='h-10 w-30 absolute mb-2 bg-white text-black rounded-md text-center font-medium pt-2 duration-300 hover:bg-white/85'>View Project</a>
          </div>
          <div className='relative h-122 md:h-125 w-[95%] sm:w-[55%] md:w-[35%] shrink-0 rounded-lg overflow-hidden flex justify-center items-end'>
            <img src="/airbnb-image.png" alt="airbnb image" className='absolute h-full w-full duration-250 hover:scale-102 z-0' />
            <a href="https://mern-airbnb-frontend.vercel.app/" target='_blank' className='h-10 w-30 absolute mb-2 bg-white text-black rounded-md text-center font-medium pt-2 duration-300 hover:bg-white/85'>View Project</a>
          </div>
          <div className='relative h-122 md:h-125 w-[95%] sm:w-[55%] md:w-[35%] shrink-0 rounded-lg overflow-hidden flex justify-center items-end'>
            <img src="/portfolio-image.jpg" alt="portfolio image" className='absolute h-full w-full duration-250 hover:scale-102 z-0' />
            <a href="https://khizer.dev/" target='_blank' className='h-10 w-30 absolute mb-2 bg-white text-black rounded-md text-center font-medium pt-2 duration-300 hover:bg-white/85'>View Project</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
