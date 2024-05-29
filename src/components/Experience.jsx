import {EXPERIENCES} from "../constants/index.jsx"
import {motion} from "framer-motion";

const Experience = () => {
    return (
        <>
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 whileInView={{opacity: 1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 0.5}} className="text-center text-4xl my-20">Experience</motion.h2>
            <div>
                {EXPERIENCES.map((exp, index) => (
                    <div key={index} className="flex flex-wrap mb-8 lg: justify-center">
                        <motion.div whileInView={{opacity:1, x: 0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className="w-full lg:w-1/4">
                            <p className="text-sm text-neutral-400 mb-2">{exp.year}</p>
                        </motion.div>
                        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x: 100}} transition={{duration: 1}} className="w-full max-w-xl lg: w-3/4">
                            <h6 className="font-semibold mb-2">{exp.role} - <span className="text-sm text-purple-200">{exp.company}</span></h6>
                            <p className="text-neutral-400 mb-4">{exp.description}</p>
                            {exp.technologies.map((tech, index) =>(
                                <span key={index} className="bg-neutral-900 rounded mr-2 mt-4 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )

}

export default Experience