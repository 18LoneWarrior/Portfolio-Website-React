import {HERO_CONTENT} from "../constants/index.jsx";
import {motion} from "framer-motion"
import image from "../assets/Image-1.png"

const container = (delay) =>({
    hidden: {x:-100, opacity:0},
    visible : {x:0, opacity:1, transition: {duration:0.5, delay:delay}}
})
const Hero = () => {
    return (
        <>
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 mb-32 mt-20 mx-10" >
            <div className="flex flex-wrap mx-4">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="font-thin tracking-tight pb-16 text-6xl lg:mt-16 lg:text-8xl">Abhilash Shakya</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visible" className="font-light my-2 py-2 max-w-xl tracking-tighter">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center mt-1">
                        <motion.img  initial={{x:100, opacity:0}} animate={{x:0, opacity:1 }} transition={{duration:1, delay:1.2}} className="rounded-2xl" src={image} height={500} width={400} alt="Abhilash"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero