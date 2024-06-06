import {motion} from "framer-motion";
import {PROJECTS} from "../constants/index.jsx";

const Projects = () => {
    return (
        <>
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 0.6}} className="text-center text-4xl my-10 ">Projects</motion.h2>
            <div>{PROJECTS.map((project, index) => (
                <div key={index} className="flex flex-wrap lg:justify-center mb-8">
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1}} className="w-full lg:w-1/4">
                        <img className="mb-6 rounded" src={project.image} width={200} height={200} alt={project.title}/>
                    </motion.div>

                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration: 1}} className="w-full max-w-xl lg:w-3/4">
                        <div className="flex flex-row justify-between lg:items-start">
                        <h6 className="font-semibold mb-2">{project.title}</h6>
                        <a className="text-sm font-medium text-purple-800 bg-neutral-900 rounded mr-2 px-2 py-1" href={project.source}>Source code</a>
                        </div>
                        <p className="text-neutral-400 mb-4">{project.description}</p>
                        {project.technologies.map((tech, index)=>(
                            <span key={index} className="text-sm font-medium text-purple-800 bg-neutral-900 rounded mr-2 px-2 py-1">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))}</div>
        </div>
        </>
    )
}

export default Projects;