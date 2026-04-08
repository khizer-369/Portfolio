import React from 'react'
import { motion, useScroll } from 'motion/react'

const ScrollProgressBar = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div className='z-20' style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            originX: 0,
            height: 7,
            backgroundColor: "#1cd8d2"
        }} />
    )
}

export default ScrollProgressBar
