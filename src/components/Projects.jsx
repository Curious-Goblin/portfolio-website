import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
    const [show, setShow] = useState("");

    const handleMouseEnter = (title) => setShow(title);
    const handleMouseLeave = (title) => setShow(title);

    return (
        <div id="projects" className="bg-gradient-to-r from-black to-indigo-950 pt-36 p-5">
            <div className="text-2xl lg:text-5xl mb-10 text-white flex justify-center items-center lg:pb-20">
                My Projects
            </div>
            <div className="grid grid-cols-1 gap-3 pl-20 sm:grid-cols-2 lg:grid-cols-2 overflow-hidden bg-gradient-to-r from-black to-indigo-950">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "easeInOut", duration: 0.2 }}
                    className="pb-3 w-full"
                    >
                    <div

                        className="lg:w-11/12 h-80 bg-cover bg-left-top rounded-lg relative"
                        style={{ backgroundImage: "url('https://res.cloudinary.com/dfyusbisg/image/upload/v1713355426/Screenshot_from_2024-04-17_17-27-57_f0fpti.png')" }}
                        onMouseEnter={() => { handleMouseEnter("Paytm WebApp") }}
                        onMouseLeave={() => { handleMouseLeave("") }}
                    >
                        <div className={`h-full rounded-lg bg-black bg-opacity-70 ${show == "Paytm WebApp" ? 'block' : 'hidden'}`}>
                            <motion.div
                                className="p-4 md:p-8"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: show == "Paytm WebApp" ? 1 : 0, y: show == "Paytm WebApp" ? 0 : 50 }}
                                transition={{ duration: 0.4, type: "easeOutIn" }}
                            >
                                <div className="flex justify-between pb-5 md:pb-10">
                                    <div className="text-white text-lg md:text-2xl underline underline-offset-8">
                                        Payments WebApp
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex justify-center items-center text-white bg-gray-500 hover:bg-gray-700 rounded-md pl-2 pr-2">
                                            <a href="https://github.com/Curious-Goblin/paytm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="flex justify-center items-center text-white bg-gray-500 hover:bg-gray-700 rounded-md pl-2 pr-2">
                                            <a href="https://subtle-zuccutto-4084b8.netlify.app/">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white text-base md:text-lg">
                                    It is a simple virtual wallet application that allows users to sign up, sign in, and perform transactions with virtual money. Users can send money to other registered users through the dashboard.
                                </div>
                                <div className="flex flex-wrap text-white gap-2 pt-4 md:pt-10 pb-10">
                                    <div className="bg-gray-900 rounded-full pl-4 pr-4 p-1">React</div>
                                    <div className="bg-gray-900 rounded-full pl-4 pr-4 p-1">Express</div>
                                    <div className="bg-gray-900 rounded-full pl-4 pr-4 p-1">MongoDB</div>
                                    <div className="bg-gray-900 rounded-full pl-4 pr-4 p-1">Tailwind</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "easeInOut", delay: 0.3, duration: 0.2 }}
                    className="pb-3 w-full"
                    >
                    <div
                        className="lg:w-11/12 h-80 bg-cover bg-left-top rounded-lg relative"
                        style={{ backgroundImage: "url('https://res.cloudinary.com/dfyusbisg/image/upload/v1713436844/dukanScr_mmimwt.png')" }}
                        onMouseEnter={() => { handleMouseEnter("Dukan UI") }}
                        onMouseLeave={() => { handleMouseLeave("") }}
                    >
                        <div
                            className={`h-full rounded-lg bg-black bg-opacity-70 ${show == "Dukan UI" ? 'block' : 'hidden'}`}

                        >
                            <motion.div
                                className="p-4 md:p-8"
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: show == "Dukan UI" ? 1 : 0, y: show == "Dukan UI" ? 0 : 100 }}
                                transition={{ duration: 0.4, type: "easeInOut" }}
                            >
                                <div className="flex justify-between pb-5 md:pb-10">
                                    <div className="text-white text-lg md:text-2xl underline underline-offset-8">
                                        Dukan UI
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex justify-center items-center text-white bg-gray-500 hover:bg-gray-700 rounded-md pl-2 pr-2">
                                            <a href="https://github.com/Curious-Goblin/dukan_UI">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="flex justify-center items-center text-white bg-gray-500 hover:bg-gray-700 rounded-md pl-2 pr-2">
                                            <a href="https://dukan-ui.netlify.app/">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white text-base md:text-lg">
                                    This project is the frontend implementation of the UI design shared by Dukan Company's CTO, Shubash Choudhary, on Twitter. The Dukan App FrontEnd is designed to provide a comprehensive dashboard for tracking transactions, revenue, and payout details efficiently.
                                </div>
                                <div className="flex text-white gap-2 pt-4 md:pt-10">
                                    <div className="bg-gray-900 rounded-full pl-4 pr-4 p-1">React</div>
                                    <div className="bg-gray-900 rounded-full pl-4 pr-4 p-1">Tailwind</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "easeInOut",delay:0.4, duration: 0.2 }}
                    className="pb-3 w-full">
                    <div

                        className="lg:w-11/12 h-80 bg-cover bg-left-top rounded-lg relative"
                        style={{ backgroundImage: "url('https://res.cloudinary.com/dfyusbisg/image/upload/v1713355426/Screenshot_from_2024-04-17_17-27-57_f0fpti.png')" }}
                        onMouseEnter={() => { handleMouseEnter("Paytm") }}
                        onMouseLeave={() => { handleMouseLeave("") }}
                    >
                        <div className={`h-full rounded-lg bg-black bg-opacity-70 ${show == "Paytm" ? 'block' : 'hidden'}`}>
                            <motion.div
                                className="p-4 md:p-8"
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: show == "Paytm" ? 1 : 0, y: show == "Paytm" ? 0 : 100 }}
                                transition={{ duration: 0.4, type: "easeInOut" }}
                            >
                                <div className="flex justify-between pb-5 md:pb-10">
                                    <div className="text-white text-lg md:text-2xl underline underline-offset-8">
                                        Payments WebApp
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex justify-center items-center text-white bg-gray-500 hover:bg-gray-700 rounded-md pl-2 pr-2">
                                            <a href="https://github.com/Curious-Goblin/paytm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="flex justify-center items-center text-white bg-gray-500 hover:bg-gray-700 rounded-md pl-2 pr-2">
                                            <a href="https://subtle-zuccutto-4084b8.netlify.app/">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white text-base md:text-lg">
                                    It is a simple virtual wallet application that allows users to sign up, sign in, and perform transactions with virtual money. Users can send money to other registered users through the dashboard.
                                </div>
                                <div className="flex flex-wrap text-white gap-2 pt-5 md:pt-10">
                                    <div className="bg-gray-900 rounded-full pl-4 pr-4 p-1">React</div>
                                    <div className="bg-gray-900 rounded-full pl-4 pr-4 p-1">Express</div>
                                    <div className="bg-gray-900 rounded-full pl-4 pr-4 p-1">MongoDB</div>
                                    <div className="bg-gray-900 rounded-full pl-4 pr-4 p-1">Tailwind</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
