import React from 'react'
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SocialIcons = () => {
    return (
        <div className='flex gap-3 justify-center lg:justify-start'>
            <a className='text-3xl transition-transform hover:scale-120' href="https://x.com/KhizerWork10089/" target='_blank'><RiTwitterXLine /></a>
            <a className='text-3xl transition-transform hover:scale-120' href="https://www.linkedin.com/in/web-khizer/" target='_blank'><FaLinkedinIn /></a>
            <a className='text-3xl transition-transform hover:scale-120' href="https://github.com/khizer-369" target='_blank'><FaGithub /></a>
        </div>
    )
}

export default SocialIcons
