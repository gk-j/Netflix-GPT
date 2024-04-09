import { useDispatch,useSelector } from "react-redux"
import { addUpComingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constant"

export default function useUpComingMovies(){
    const dispatch = useDispatch()
    
    const upComingMovies = useSelector(store=>store.movies.upComingMovies)

    const getUpComingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const jsonData = await  data.json()
        // console.log("Browse",jsonData)
        dispatch(addUpComingMovies(jsonData.results))
    }
    useEffect(()=>{
        (!upComingMovies)&&getUpComingMovies()
    },[])
}