import {AiOutlineLinkedin} from "react-icons/ai";
import {FaGithub, FaLinkedin, FaLinkedinIn, FaMailchimp} from "react-icons/fa6";
import {IoMailSharp} from "react-icons/io5";

export default function ContactMe(){

    return (
        <div className="grid" >
            <div className="bg-base-200 text-base-content min-h-screen snap-start gap-4 justify-center flex items-center" id="contactme">
                <div className="grid grid-cols-1 min-h-screen w-128 flex items-center justify-center">
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <div className="flex flex-col items-center pb-10">
                            <img className="w-24 h-24 my-3 rounded-full shadow-lg"
                                 src="https://media.licdn.com/dms/image/D5635AQFYugXPBxlfIQ/profile-framedphoto-shrink_400_400/0/1687393304089?e=1690794000&v=beta&t=woFfKf4s0H-QnVbTUVk755pb2Tdl3CggTss5zpQfsO0" alt="Bonnie image"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Paco Au-Yeung</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Software Developer</span>
                            <div className="grid grid-cols-3 mt-3 gap-4">

                                  <a href="https://www.linkedin.com/in/paco-au-yeung/"><FaLinkedin size="24" className="h-12 text-black"/></a>

                                <a href="mailto:paco20071001@gmail.com"><IoMailSharp size="24" className="h-12 text-black"/></a>
                                <a href="https://www.github.com/ce1011"><FaGithub size="24" className="h-12 text-black"/></a>

                            </div>
                            {/*<div className="flex mt-4 space-x-3 md:mt-6">*/}
                            {/*    <a href="#"*/}
                            {/*       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add*/}
                            {/*        friend</a>*/}
                            {/*    <a href="#"*/}
                            {/*       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
