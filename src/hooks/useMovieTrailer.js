import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constant"

const useMovieTrailer=(movie_id)=>{
    const dispatch = useDispatch()
    const getMovieVideos = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, options)
            const jsonData = await data.json()
            const trailersAndTeasers =jsonData.results.filter((video)=>video.type==="Trailer" || video.type==="Teaser")
            const random = Math.floor(Math.random()*trailersAndTeasers.length)
            const video = trailersAndTeasers.length?trailersAndTeasers[random]:jsonData.results[0]; 
            // setVideo(video)
            dispatch(addTrailerVideo(video))
            // console.log(video)
    }
    useEffect(()=>{
        getMovieVideos()
    },[])

}

export default useMovieTrailer