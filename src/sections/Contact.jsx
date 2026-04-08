import React, { useState } from 'react'
import Particles from '../components/Particles'
import { motion } from 'motion/react';
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(true);
    const [response, setResponse] = useState(null);

    const submitHandler = async (e) => {
        setStatus(false);
        e.preventDefault();
        await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            { name, email, message },
            PUBLIC_KEY
        ).then(() => {
            setResponse("Message sent successfully");
        }).catch(() => {
            setResponse("Failed to send message");
        });
        setTimeout(() => {
            setResponse(null);
        }, 3000);
        setName("");
        setEmail("");
        setMessage("");
        setStatus(true);
    }

    return (
        <section id='contact' className='relative h-[200vh] lg:h-screen'>
            <div className='absolute h-full w-full z-0'>
                <Particles
                    particleColors={["#ffffff"]}
                    particleCount={150}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    alphaParticles={false}
                    disableRotation={false}
                    pixelRatio={1}
                />
            </div>
            <div className='relative h-full flex flex-col lg:flex-row justify-evenly items-center z-10'>
                <motion.img animate={{ y: [0, -15, 0] }} transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }} src="/contact-image.png" alt="image" className='h-130' />
                <form onSubmit={submitHandler} className='bg-white/5 h-140 w-[90%] sm:w-125 flex flex-col justify-evenly items-center border border-white/10 rounded-lg'>
                    <h2 className='w-[90%] text-2xl md:text-3xl font-bold'>Let's Work Together</h2>
                    <div className='w-[90%]'>
                        <p className='text-sm mb-1'>Name</p>
                        <input type="text" className='h-11 w-full bg-white/3 border border-white/40 rounded-md outline-none pl-2' value={name} onChange={(e) => { setName(e.target.value); }} required />
                    </div>
                    <div className='w-[90%]'>
                        <p className='mb-1'>Email</p>
                        <input type="email" className='h-11 w-full bg-white/3 border border-white/40 rounded-md outline-none pl-2' value={email} onChange={(e) => { setEmail(e.target.value); }} required />
                    </div>
                    <div className='w-[90%]'>
                        <p className='mb-1'>Message</p>
                        <textarea className='h-33 w-full bg-white/3 border border-white/40 rounded-md outline-none p-2 resize-none' value={message} onChange={(e) => { setMessage(e.target.value); }} required ></textarea>
                    </div>
                    <div className='w-[90%]'>
                        <div className='h-5 w-full mb-1 text-sm'>
                            {response && <p className={`${response === "Message sent successfully" ? "text-green-400" : "text-red-400"}`}>{response}</p>}
                        </div>
                        <button className='h-12 w-full bg-blue-600 hover:bg-blue-600/95 rounded-md cursor-pointer flex justify-center items-center'>
                            {status ? <span>Send Message</span> : <div className="flex flex-row gap-2">
                                <div className="h-2.5 w-2.5 rounded-full bg-white animate-bounce [animation-delay:.7s]"></div>
                                <div className="h-2.5 w-2.5 rounded-full bg-white animate-bounce [animation-delay:.3s]"></div>
                                <div className="h-2.5 w-2.5 rounded-full bg-white animate-bounce [animation-delay:.7s]"></div>
                            </div>}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
