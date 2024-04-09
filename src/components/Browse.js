import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import GptSearch from "./GptSearch"
import { useSelector } from "react-redux"
import useUpComingMovies from "../hooks/useUpComingMovies"
import useTrendingOfTheDayMovies from "../hooks/useTrendingOfTheDayMovies"
import useTrendingOfTheWeekMovies from "../hooks/useTrendingOfTheWeek"
const Browse = () =>{
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpComingMovies()
    useTrendingOfTheDayMovies()
    useTrendingOfTheWeekMovies()
    return(
        <div>
            <Header/>
            { showGptSearch ?<GptSearch/>:<><MainContainer/>
            <SecondaryContainer/></>}
            
            
            {/* 
                MainContainer
                    - VideoBackGround
                    - VideoTitle
                Secondary Container
                    - MovieList *n
                        - cards *n
            */}
        </div>
    )
}

export default Browse