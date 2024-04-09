import { useDispatch,useSelector } from "react-redux"
import { addTrendingOfTheWeek } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constant"

export default function useTrendingOfTheWeekMovies(){
    const dispatch = useDispatch()
    
    const trendingOfTheWeek = useSelector(store=>store.movies.trendingOfTheWeek)

    const getTrendingOfTheWeek = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
        const jsonData = await  data.json()
        // console.log("Browse",jsonData)
        dispatch(addTrendingOfTheWeek(jsonData.results))
    }
    useEffect(()=>{
        (!trendingOfTheWeek)&&getTrendingOfTheWeek()
    },[])
}