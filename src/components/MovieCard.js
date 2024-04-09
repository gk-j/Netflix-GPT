import { IMAGE_CDN_URL } from "../utils/constant";

export default function MovieCard({posterPath}){
    return(
        <div className="w-32 px-4 md:px-0 cursor-pointer hover:opacity-70">
            <img className="px-2" alt="Movie Card" src={IMAGE_CDN_URL+posterPath}/>
        </div>
    )
}