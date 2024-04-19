import { useEffect, useState } from 'react';
import { motion } from "framer-motion";


export default function Navbar() {
    const [activeButton, setActiveButton] = useState('Home');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

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
        <div className="sticky top-0 z-20 pt-5 w-full bg-gradient-to-r from-black to-indigo-950 bg-opacity-30">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "easeOut", duration: 1 }}
            >
                <div className="flex gap-4 md:gap-8 justify-center">
                    <a href='#home' className={`text-lg md:text-xl ${activeButton === 'Home' ? 'text-blue-800' : 'text-white'} hover:text-blue-300 font-medium`}>
                        <button onClick={() => handleButtonClick('Home')}>Home</button>
                    </a>
                    <a href="#about" className={`text-lg md:text-xl ${activeButton === 'About' ? 'text-blue-800' : 'text-white'} hover:text-blue-300 font-medium`}>
                        <button onClick={() => handleButtonClick('About')}>About</button>
                    </a>
                    <a href='#skills' className={`text-lg md:text-xl ${activeButton === 'Skills' ? 'text-blue-800' : 'text-white'} hover:text-blue-300 font-medium`}>
                        <button onClick={() => handleButtonClick('Skills')}>Skills</button>
                    </a>
                    <a href='#projects' className={`text-lg md:text-xl ${activeButton === 'Experience' ? 'text-blue-800' : 'text-white'} hover:text-blue-300 font-medium`}>
                        <button onClick={() => handleButtonClick('Experience')}>Projects</button>
                    </a>
                    <a href='#contact' className={`text-lg md:text-xl ${activeButton === 'Contact' ? 'text-blue-800' : 'text-white'} hover:text-blue-300 font-medium`}>
                        <button onClick={() => handleButtonClick('Contact')}>Contact</button>
                    </a>
                </div>
                <div className="border mt-4 ml-4 mr-4"></div>
            </motion.div>
        </div>
    );
}
