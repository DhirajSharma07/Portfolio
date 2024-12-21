
import React from 'react';
import { FaArrowDownLong } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion'; // Importing framer-motion

function Home() {
    // Animation settings
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 10, transition: { duration: 1 } },
    };

    const fadeInUp = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.6 } },
    };

    return (
        <div className="home relative  pt-24" id="home">
            <div className="w-full h-[65vh] md:h-[88vh] flex items-center">
                <div className="bg-white text-orange-600 hidden lg:block shadow-2xl">
                    <ul className="flex flex-col pb-2 space-y-5">
                        <li className="flex items-center justify-center p-2 hover:rounded-md hover:bg-orange-600 hover:text-white m-2">
                            <a href="/"><FaLinkedinIn className="text-2xl" /></a>
                        </li>
                        <li className="flex items-center justify-center p-2 hover:rounded-md hover:bg-orange-600 hover:text-white m-2">
                            <a href="https://www.instagram.com/iamdhiraj_09"><FaInstagram className="text-2xl" /></a>
                        </li>
                        <li className="flex items-center justify-center p-2 hover:rounded-md hover:bg-orange-600 hover:text-white m-2">
                            <a href="https://wa.me/"><FaWhatsapp className="text-2xl" /></a>
                        </li>
                        <li className="flex items-center justify-center p-2 hover:rounded-md hover:bg-orange-600 hover:text-white m-2">
                            <a href="/"><FaGithub className="text-2xl" /></a>
                        </li>
                    </ul>
                </div>
                <div className="appear absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[90%]">
                    <motion.h1
                        className="uppercase text-4xl lg:text-6xl font-extrabold tracking-wider text-center"
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                    >
                        Hyy, I'm Dhiraj Sharma
                    </motion.h1>
                    <motion.div
                        className="flex flex-col items-center justify-center"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <strong className="text-orange-600 text-3xl mt-6">Frontend Developer.</strong>
                        <motion.p
                            className="text-center mt-6 lg:mx-16 max-w-[800px] text-md"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                        >
                            I'm a passionate and motivated frontend developer on a mission to turn creative ideas into functional, interactive web experiences.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="mt-16"
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                    >
                        <a
                            className="py-3 px-14 rounded-md bg-orange-600 text-white font-bold uppercase tracking-wider text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                            href = "/#project" >
                          
                          project
                        </a>
                    </motion.div>
                </div>
                <div className="absolute item-center justify-center bottom-10 flex w-full">
                    <span className="relative flex items-center justify-center">
                        <FaArrowDownLong className="animate-bounce text-6xl absolute  text-orange-600" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
