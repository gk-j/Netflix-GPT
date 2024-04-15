import { useParams } from "react-router-dom";
import { options } from "../utils/constant" 
import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import Header from "./Header";
export default function MovieDetails(){
    const {id} = useParams()
    const [video,setVideo]=useState(null);
    const [similarMovies,setSimilarMovies]=useState(null)
    
    const getHoverVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        const jsonData = await data.json()
        const videos =jsonData.results.filter((video)=>video.type==="Featurette")
        const random = Math.floor(Math.random()*videos.length)
        const video = videos.length?videos[random]:jsonData.results[0]; 
        setVideo(video)
        
        // console.log(video)
    }
    const getSimilarMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US`, options)
        const jsonData = await data.json()
        const movies =jsonData.results
        setSimilarMovies(movies)
        console.log(movies)
    }
    useEffect(()=>{
       getHoverVideo();
       getSimilarMovies() 
    },[id])
    return(
        <div className="items-center">
            {!video?<div>Loading..</div>:<div>
            <Header/>
        <iframe 
            className="w-full pt-20 rounded-lg ml-auto mr-auto aspect-video"
            src={`https://www.youtube.com/embed/${video?.key}?&autoplay=1&loop=1`}
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>    
        </iframe>
        {/* similar movies */}
        <MovieList title="Similar Movies" movies={similarMovies}/>
    </div>}
        </div>
    )
}