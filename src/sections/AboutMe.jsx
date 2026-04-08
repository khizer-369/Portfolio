import React from 'react'
import { motion } from 'motion/react'

const AboutMe = () => {
  return (
    <section id='about' className='relative min-h-screen overflow-hidden'>
      <div className='absolute min-h-screen w-full z-0'>
        <div className='absolute top-0 left-0 h-90 w-90 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-3xl animate-pulse'></div>
        <div className='absolute right-0 bottom-0 h-90 w-90 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-3xl animate-pulse'></div>
      </div>
      <div className='relative h-screen flex justify-center items-center'>
        <div className=' md:h-110 md:w-[94%] lg:h-100 lg:w-250 flex flex-col md:flex-row gap-7'>
          <div className='relative flex justify-center'>
            <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.35, ease: "linear" }} className='bg-linear-to-br from-[#2b7a78] via-[#3aafa9] to-[#def2f1] h-45 w-45 rounded-xl'>
              <img src="/profile-image.png" alt="profile photo" className='h-full w-full' />
            </motion.div>
          </div>
          <div className='flex flex-col items-center md:items-start gap-5'>
            <motion.h2 initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.35, ease: "linear" }} className='relative text-center md:text-start text-4xl font-extrabold tracking-tight bg-linear-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] text-transparent bg-clip-text'>Muhammad Khizer</motion.h2>
            <motion.h5 initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.35, ease: "linear" }} className='relative text-center md:text-start'>Full Stack Web Developer</motion.h5>
            <motion.p initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.35, ease: "linear" }} className='relative text-gray-300 tracking-wide leading-relaxed text-center md:text-start hidden md:block'>I'm a MERN Stack Developer who builds simple, useful web apps. Experienced with MongoDB, Express, React, and Node.js, I focus on clean, easy-to-understand code. I'm enhancing my frontend skills to create attractive, user-friendly websites and enjoy learning to grow as a developer daily.</motion.p>
            <motion.p initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.35, ease: "linear" }} className='relative w-[95%] text-gray-300 tracking-wide leading-relaxed text-center md:text-start md:hidden'>I'm a MERN Stack Developer creating simple, user-friendly web apps. Experienced with MongoDB, Express, React, and Node.js, I focus on clean code and improving my frontend skills to build better websites.</motion.p>
            <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.35, ease: "linear" }} className='relaitve flex justify-center items-center md:justify-start gap-3'>
              <div className='h-12 w-28 md:h-15 md:w-40 lg:h-17 lg:w-45 bg-white/10 rounded-lg border border-white/20 flex flex-col justify-center items-center gap-0.5'>
                <p className='text-gray-400 text-xs'>Domain</p>
                <p>Full Stack</p>
              </div>
              <div className='h-12 w-28 md:h-15 md:w-40 lg:h-17 lg:w-45 bg-white/10 rounded-lg border border-white/20 flex flex-col justify-center items-center gap-0.5'>
                <p className='text-gray-400 text-xs'>Specialty</p>
                <p>MERN STACK</p>
              </div>
              <div className='h-12 w-28 md:h-15 md:w-40 lg:h-17 lg:w-45 bg-white/10 rounded-lg border border-white/20 flex flex-col justify-center items-center gap-0.5'>
                <p className='text-gray-400 text-xs'>Improving</p>
                <p>Frontend</p>
              </div>
            </motion.div>
            <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.35, ease: "linear" }} className='relative flex justify-center md:justify-start gap-3'>
              <a href='#projects' className='bg-white h-12 w-35 text-black rounded-lg font-semibold cursor-pointer hover:bg-white/90 text-center pt-3'>View Project</a>
              <a href='#contact' className='bg-white/10 border border-white/20 h-12 w-35 rounded-lg cursor-pointer hover:bg-white/15 text-center pt-3'>Get in Touch</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
