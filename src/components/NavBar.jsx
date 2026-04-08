import React, { useEffect, useRef, useState } from 'react'
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [navShow, setNavShow] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const yLastPostion = useRef(0);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > yLastPostion.current) {
        setNavShow(false);
      }
      else {
        setNavShow(true);
      }
      yLastPostion.current = window.scrollY;
    }
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }
  }, [])
  return (
    <div>
      <nav className={`h-[10vh] w-full fixed flex justify-between items-center px-6 transition-transform duration-300 ${navShow ? "translate-y-0" : "-translate-y-full"}`}>
        <div className='flex items-center'>
          <img src="./logo.png" alt="logo" className='h-10' />
          <p className='text-xl font-bold tracking-wide hidden md:block'>Khizer</p>
        </div>
        <RxHamburgerMenu className='text-2xl' onClick={() => { setShowMenu(true) }} />
      </nav>
      <div className={`fixed h-screen w-full bg-black/95 flex flex-col transition-transform duration-300 ${showMenu ? "translate-x-0" : "translate-x-full -translate-y-full"}`}>
        <div className='flex justify-end items-center pt-5 pr-5'>
          <RxCross2 className='text-2xl' onClick={() => { setShowMenu(false) }} />
        </div>
        <div className='flex-1 flex flex-col justify-center items-center gap-7'>
          <a href='#home' className='text-3xl font-semibold cursor-pointer hover:text-[#00bf8f] duration-300' onClick={() => { setShowMenu(false) }}>Home</a>
          <a href='#about' className='text-3xl font-semibold cursor-pointer hover:text-[#00bf8f] duration-300' onClick={() => { setShowMenu(false) }}>About</a>
          <a href='#skills' className='text-3xl font-semibold cursor-pointer hover:text-[#00bf8f] duration-300' onClick={() => { setShowMenu(false) }}>Skills</a>
          <a href='#projects' className='text-3xl font-semibold cursor-pointer hover:text-[#00bf8f] duration-300' onClick={() => { setShowMenu(false) }}>Project</a>
          <a href='#contact' className='text-3xl font-semibold cursor-pointer hover:text-[#00bf8f] duration-300' onClick={() => { setShowMenu(false) }}>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
