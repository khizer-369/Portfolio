import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const Cursor = () => {
    const [postion, setPostion] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const cursorMove = (e) => {
            setPostion({
                x: e.clientX,
                y: e.clientY
            });
        }
        const cursorLeave = () => {
            setPostion({ x: 0, y: 0 });
        }
        window.addEventListener("mousemove", cursorMove);
        window.addEventListener("mouseout", cursorLeave);
        return () => {
            window.removeEventListener("mousemove", cursorMove);
            window.removeEventListener("mouseout", cursorLeave);
        }
    }, [])
    return (
        <motion.div animate={{ x: postion.x - 15, y: postion.y - 15 }} className={`fixed top-0 left-0 h-8 w-8 rounded-full bg-[#00bf8f]/20 z-30 pointer-events-none ${(postion.x === 0 && postion.y === 0) && "hidden"}`} />
    )
}

export default Cursor
