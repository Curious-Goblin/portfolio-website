import { motion } from "framer-motion"

export default function Contact() {
    return (
        <div className="bg-gradient-to-r from-black to-indigo-950">
            <div id="contact" className="sticky bg-opacity-100 z-20 bottom-0 bg-stone-900 h-48">
                <div className="flex text-white justify-center pt-2 gap-1">
                    <a href="mailto:poddarsourabh9939@gmail.com"><div className="underline hover:text-gray-400">podddarsourabh9939@gmail.com</div></a>
                </div>
                <div className=" flex justify-center items-center pt-4 gap-2">
                    <div className="w-8 h-8 p-2 rounded-lg bg-gray-300 hover:bg-gray-600">
                        <a href="https://www.linkedin.com/in/sourabh-poddar-3bbb75262/"><img src="https://res.cloudinary.com/dfyusbisg/image/upload/v1713450148/linkedin-svgrepo-com_evrivi.svg"></img></a>
                    </div>
                    <div className="w-8 h-8 p-1 rounded-lg bg-gray-300 hover:bg-gray-600">
                        <a href="https://github.com/Curious-Goblin"><img src="https://res.cloudinary.com/dfyusbisg/image/upload/v1713459985/github-svgrepo-com_dsuew6.svg"></img></a>
                    </div>
                    <div className="w-8 h-8 p-1 rounded-lg bg-gray-300 hover:bg-gray-600">
                        <a href="https://www.instagram.com/sourabhpoddar83/?hl=en"><img src="https://res.cloudinary.com/dfyusbisg/image/upload/v1713450777/instagram-svgrepo-com_eivltx.svg"></img></a>
                    </div>
                    <div className="w-8 h-8 p-1 rounded-lg bg-gray-300 hover:bg-gray-600">
                        <a href="https://twitter.com/Sourabh__Poddar"><img src="https://res.cloudinary.com/dfyusbisg/image/upload/v1713457472/twitter-154-svgrepo-com_f9u9wi.svg"></img></a>
                    </div>
                </div>
                <div className=" text-center flex justify-center items-center pt-4 text-gray-400">
                    © 2024 Sourabh. Made with ❤️ and protected by copyright.
                </div>
                <div className=" text-center flex justify-center items-center text-gray-400">
                About this website: built with React, Tailwind CSS, Framer Moition, Netlify hosting.
                </div>
            </div>
        </div>
    )
}