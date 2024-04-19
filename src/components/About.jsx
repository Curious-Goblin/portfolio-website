import { motion } from "framer-motion"

export default function About() {

    return (
        <div id="about" className="bg-gradient-to-r from-black to-indigo-950 flex justify-center items-center pt-10 lg:pt-20">
            <motion.div
                className="text-white text-center lg:pl-28 lg:pr-28 2xl:pl-64 2xl:pr-64 p-10"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "easeInOut", duration: 0.4 }}
                viewport={{ once: false }}
            >
                <div className="2xl:pr-10 2xl:pl-10">
                    <div className="text-2xl lg:text-5xl pb-10">
                        About Me
                    </div>
                    <div className="text-lg lg:text-2xl font-light">
                        I'm currently pursuing my B.Tech degree and deeply
                        immersed in the world of programming. My journey began during my academic years,
                        sparked by curiosity and a hunger for knowledge. I found my niche in frontend
                        development, particularly with React, where I've polished my skills and built
                        dynamic applications.
                        <br></br><br></br>
                        Transitioning into full-stack development, I've dedicated myself to mastering the
                        MERN stack (MongoDB, Express.js, React, Node.js), constantly seeking challenges
                        to further my growth. When I'm not coding, you'll likely find me on the badminton
                        court or enjoying the latest movies.
                        <br></br><br></br>
                        Looking ahead, I'm eager to expand my expertise in DevOps and system design.
                        My passion for programming is fueled by a thirst for continuous learning and
                        a drive to remain at the forefront of technology.
                    </div>
                </div>
            </motion.div>
        </div>
    )
}