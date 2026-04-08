import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from 'motion/react';
import Marquee from 'react-fast-marquee';

const Skills = () => {
    const skills = [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Nodejs" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
        { icon: <TbBrandFramerMotion />, name: "Motion" }
    ];
    return (
        <section id='skills' className='relative h-60'>
            <div className='absolute h-full w-full z-0 overflow-hidden'>
                <div className='absolute left-0 -top-5 h-65 w-65 bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] rounded-full opacity-10 blur-3xl animate-pulse'></div>
                <div className='absolute right-0 -bottom-5 h-65 w-65 bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] rounded-full opacity-10 blur-3xl animate-pulse'></div>
            </div>
            <div className='flex  flex-col relative h-full overflow-hidden'>
                <div className='h-[45%] w-full flex flex-col justify-center items-center gap-1'>
                    <motion.h1 initial={{ y: -15, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, ease: "linear" }} className='relative text-5xl bg-linear-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] text-transparent bg-clip-text opacity-85 font-bold'>My Skills</motion.h1>
                    <motion.p initial={{ y: 15, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, ease: "linear" }} className='relative tracking-tighter'>Modern Applications | Modern Technologies</motion.p>
                </div>
                <Marquee direction='right' className='flex-1 flex justify-evenly items-center'>
                    {skills.map((skill, i) => (
                        <div key={i} className='flex flex-col gap-2 items-center text-[#1cd8d2] mx-15'>
                            <div className='text-6xl cursor-pointer hover:scale-120 duration-300'>{skill.icon}</div>
                            <p className='text-sm'>{skill.name}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

export default Skills
