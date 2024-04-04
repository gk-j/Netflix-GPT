import { IMAGE_CDN_URL } from "../utils/constant";

export default function MovieCard({posterPath}){
    return(
        <div className="w-32 pr-4 cursor-pointer hover:opacity-70">
            <img alt="Movie Card" src={IMAGE_CDN_URL+posterPath}/>
        </div>
    )
}