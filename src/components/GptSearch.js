import { BG_IMG } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

export default function GptSearch(){
    return(
        <div>
            <div className="absolute -z-10">
                <img src={BG_IMG} alt="bg"/>
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    )
}