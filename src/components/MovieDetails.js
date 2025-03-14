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
            {!video?
            <div className="h-screen w-screen flex justify-center items-center" role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only ">Loading...</span>
                <h1 className="m-5">Sorry for the interruptions please go back as movie is removed from our database</h1>
            </div>
            :<div>
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