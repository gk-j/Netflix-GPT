import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constant"

export default function useTopRatedMovies(){
    const dispatch = useDispatch()
    
    const getTopRatedMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const jsonData = await  data.json()
        // console.log("Browse",jsonData)
        dispatch(addTopRatedMovies(jsonData.results))
    }
    useEffect(()=>{
        getTopRatedMovies()
    },[])
}