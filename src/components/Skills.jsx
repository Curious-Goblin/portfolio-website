import { motion } from "framer-motion";

export default function Skills() {
    return (
        <div id="skills" className="flex justify-center items-center bg-gradient-to-r from-black to-indigo-950 pt-20 lg:pt-72">
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "easeIn", duration: 0.2 }}
                viewport={{ once: false }}
                className="text-white text-center px-4 lg:px-10">
                <div className="text-2xl lg:text-5xl mb-10">My Skills</div>
                <div className="flex flex-wrap justify-center gap-2">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0, y: 100 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: "easeInOut", delay:index % 2 == 0 ? 0.2 : 0, duration: 0.5 }}
                            className="rounded-md pl-4 pr-4 p-2 bg-gray-700 text-xl">
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

// Array of skills
const skills = [
    "C/C++",
    "HTML",
    "CSS",
    "JavaScript",
    "Express",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Recoil",
    "React",
    "Framer-motion"
];
