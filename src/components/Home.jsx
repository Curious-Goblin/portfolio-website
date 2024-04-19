import { motion } from "framer-motion";
import { Particle } from "./Particle";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }, []);

    return (
        <div className="relative pt-36 pb-20 bg-gradient-to-r from-black to-indigo-950 ">
            <Particle />
            <div id="home" className="bg-gradient-to-r from-black to-indigo-950 pt-28">
                <div className="sticky z-10 flex justify-center items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "easeOut", duration: 0.5 }}
                        >
                            <div className="flex justify-center items-center">
                                <img className="rounded-full w-40 h-40 lg:w-96 lg:h-96 object-cover border-8 " src="https://res.cloudinary.com/dfyusbisg/image/upload/v1713342636/20240415_170929_c3vabt.jpg" alt="Smile"></img>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, y: 500 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: "easeOut", duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex justify-center items-center text-white text-xl md:text-2xl lg:text-4xl pt-10">
                                Hi 👋 I'm Sourabh from India
                            </div>
                            <div>
                                <a href="#contact" className="sticky z-10 flex justify-center items-center">
                                    <div className="flex justify-center items-center gap-2 p-4 text-white md:text-xl bg-blue-950  p-3 rounded-full mt-5">
                                        <div className="">Contact me here </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
