import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constant"

export default function usePopularMovies(){
    const dispatch = useDispatch()
    
    const getPopularMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options)
        const jsonData = await  data.json()
        // console.log("Browse",jsonData)
        dispatch(addPopularMovies(jsonData.results))
    }
    useEffect(()=>{
        getPopularMovies()
    },[])
}