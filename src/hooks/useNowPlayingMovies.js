import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constant"

export default function useNowPlayingMovies(){
    const dispatch = useDispatch()
    
    const getNowPlayingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        const jsonData = await  data.json()
        console.log("Browse",jsonData)
        dispatch(addNowPlayingMovies(jsonData.results))
    }
    useEffect(()=>{
        getNowPlayingMovies()
    },[])
}