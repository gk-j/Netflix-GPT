import { IoPlay } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
const VideoTitle = ({title,overview}) =>{
    return(
        <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-3/4">{overview}</p>
            <div className="my-1 flex">
                <button className="flex mx-3  bg-white text-black p-4 px-16 rounded-lg  text-xl hover:bg-opacity-80"><IoPlay className="mt-1"/>Play</button>
                <button className="flex mx-3 bg-gray-500 text-white p-4 px-12 rounded-lg bg-opacity-40 text-xl hover:bg-red-500"><FaInfoCircle className="mt-1 mx-2"/>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle