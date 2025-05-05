import { motion } from "motion/react"

const Projects = () => {
    return (
        <div className="w-full bg-black">
            <div className="max-w-screen-xl mx-auto min-h-screen p-4 flex items-center justify-between relative overflow-hidden">

                <div>
                    <h2 className="text-5xl text-white font-bold underline decoration-emerald-600">
                    Projects
                    </h2>
                    
                    <br/>
                    <br/>

                    {/* Experiences */}
                    <div className="flex flex-row min-w-full justify-between space-x-4">
                        
                    {/* Proj1 */}
                    <motion.div whileHover={{ y: -7 }} className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg p-7 min-w-[32%]">

                        <div className="flex flex-row">
                        <div>
                            <h3 className="text-3xl text-white font-bold">
                            Project 1
                            </h3>

                        
                        </div>  

                        </div>
                        <br/>
                        
                        <div className="px-8">
                        <ul className="list-disc">
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                        </ul>
                        </div>

                    </motion.div>

                    {/* Dynamixware */}
                    <motion.div whileHover={{ y: -7 }} className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-7 min-w-[32%]">
                        <div className="flex flex-row">
                        <div>
                            <h3 className="text-3xl text-white font-bold">
                            Project 2
                            </h3>

                        </div> 

                        </div>
                        
                        
                        <br/>
                        
                        <div className="px-8">
                        <ul className="list-disc">
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                        </ul>
                        </div>
                    </motion.div>

                    {/* Project 3 */}
                    <motion.div whileHover={{ y: -7 }} className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-7 min-w-[32%]">
                        <div className="flex flex-row">
                        <div>
                            <h3 className="text-3xl text-white font-bold">
                            Project 2
                            </h3>

                        </div> 

                        </div>
                        
                        
                        <br/>
                        
                        <div className="px-8">
                        <ul className="list-disc">
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                            <li className="text-md text-white">
                            Did this and that and this and that and this and that and this and that and this and that and this and that and
                            </li>
                        </ul>
                        </div>
                    </motion.div>
                        
                    </div>

                </div>

            </div>


      </div>
    )
}

export default Projects;

