import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"

const Browse = () =>{
    useNowPlayingMovies()
    return(
        <div>
            <Header/>
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