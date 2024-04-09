import { useDispatch,useSelector } from "react-redux"
import { addTrendingOfTheDay } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constant"

export default function useTrendingOfTheDayMovies(){
    const dispatch = useDispatch()
    
    const trendingOfTheDay = useSelector(store=>store.movies.trendingOfTheDay)

    const getTrendingOfTheDay = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        const jsonData = await  data.json()
        // console.log("Browse",jsonData)
        dispatch(addTrendingOfTheDay(jsonData.results))
    }
    useEffect(()=>{
        (!trendingOfTheDay)&&getTrendingOfTheDay()
    },[])
}