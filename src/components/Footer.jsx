import React from 'react'
import SocialIcons from './SocialIcons'

const Footer = () => {
    return (
        <div className='h-[45vh] flex justify-center items-center'>
            <div className='h-[45vh] w-full absolute z-0 overflow-hidden'>
                <div className='absolute bg-blue-500 right-10 top-25 w-90 h-10 md:w-150 rounded-full opacity-85 blur-3xl'></div>
                <div className='absolute bg-[#1cd8d2] left-10 bottom-15 w-90 h-10 md:w-150 rounded-full opacity-85 blur-3xl'></div>
            </div>
            <div className='relative z-10 flex flex-col items-center'>
                <h1 className='text-4xl md:text-5xl font-semibold mb-4'>Muhammad Khizer</h1>
                <div className='h-0.75 w-33 Gradient mb-4'></div>
                <div className='mb-4'>
                    <SocialIcons />
                </div>
                <p className='urdu-font text-xs mb-1.5'>فکر کرتا ہے کیوں، فکر سے ہوتا ہے کیا؟</p>
                <p className='urdu-font text-xs'>اور کر لے آج خود پہ بھروسہ، پھر دیکھ ہوتا ہے کیا۔</p>
            </div>
        </div>
    )
}

export default Footer
