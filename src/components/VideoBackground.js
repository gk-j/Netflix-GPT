import { useEffect, useState } from "react";
import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movie_id}) =>{
    //fetch trailer && updating the store with trailer data
        // const [video,setVideo] = useState(null)
        const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
        useMovieTrailer(movie_id)
    return(<div>
        <iframe 
            className="w-screen aspect-video"
            
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>    
        </iframe>
    </div>)
}

export default VideoBackground;