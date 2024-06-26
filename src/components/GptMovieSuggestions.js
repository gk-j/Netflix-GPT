import {useSelector} from "react-redux"
import MovieList from "../components/MovieList"
export default function GptMovieSuggestions(){
    const gpt = useSelector(store=>store.gpt)
    const {movieNames,movieResults} = gpt
    if(!movieNames)return null
    return(
        <div className="my-4 text-white bg-black bg-opacity-90">
            <div>
                {movieNames.map((movie,index)=><MovieList key={movie} title={movie} movies={movieResults[index]}/>)}
                
            </div>
            <h1 className="text-center text-white text-2xl font-bold mb-2">The End</h1>
        </div>
    )
}