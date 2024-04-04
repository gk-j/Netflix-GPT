import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () =>{
    const movies = useSelector(store=>store.movies)
    console.log(movies)
    return(
        movies.nowPlayingMovies&&
        <div className="bg-black">
            {/* 
            Movielist-based on genre
                MovieCards*n    
            */}
            <div className="-mt-52 relative pl-12 z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            </div>
            
            
        </div>
    )
}

export default SecondaryContainer