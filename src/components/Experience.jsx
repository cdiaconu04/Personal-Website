import '../App.css';
import { motion } from "motion/react"
import IndosoftLogo from '../images/IndosoftLogo.jpg';
import DynamixwareLogo from '../images/DynamixwareLogo.jpg';

const Experience = () => {
    return (
        <div className="w-full bg-black">
            <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex items-center justify-between relative overflow-hidden" >
            
                <div >
                    <h2 className="text-5xl text-white font-bold underline decoration-emerald-600">
                    Experience
                    </h2>
                    
                    <br/>
                    <br/>

                    {/* Experiences */}
                    <div className="flex flex-row min-w-full justify-between space-x-4">
                        
                    {/* Indosoft */}
                    <motion.div whileHover={{ y: -7 }} className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg p-7 min-w-[50%]">

                        <div className="flex flex-row">
                        <div>
                            <h3 className="text-3xl text-white font-bold">
                            Indosoft Inc.
                            </h3>

                            <h3 className="text-xl text-white">
                            Software Developer Intern
                            </h3>
                        </div>  

                        <div className="flex flex-col ms-auto">
                            <img className="w-9 h-9 ms-auto rounded-full" src={IndosoftLogo} />
                            <p className="text-white"> May - August (2025)</p>
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
                    <motion.div whileHover={{ y: -7 }} className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-7 min-w-[50%]">
                        <div className="flex flex-row">
                        <div>
                            <h3 className="text-3xl text-white font-bold">
                            Dynamixware
                            </h3>

                            <h3 className="text-xl text-white">
                            Junior Developer
                            </h3>
                        </div> 

                        <div className="flex flex-col ms-auto">
                            <img className="w-9 h-9 ms-auto rounded-full" src={DynamixwareLogo} />
                            <p className="text-white"> May - August (2023)</p>
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

export default Experience
