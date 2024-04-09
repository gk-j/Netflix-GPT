import { IoPlay } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
const VideoTitle = ({title,overview}) =>{
    return(
        <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
            <p className="hidden md:block py-6 text-lg w-3/4">{overview}</p>
            <div className="my-1 flex">
                <button className="flex md:mx-3  bg-white text-black py-2 px-7  md:py-4 md:px-16 rounded-lg text-sm md:text-xl hover:bg-opacity-80"><IoPlay className="mt-1"/>Play</button>
                <button className="hidden  md:flex md:mx-3 bg-gray-500 text-white  md:mt-0 md:w-1/4 md:py-4 md:px-12 rounded-lg bg-opacity-40 text-sm md:text-xl hover:bg-red-500"><FaInfoCircle className="mt-1 mx-2"/>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle