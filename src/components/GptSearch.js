import { BG_IMG } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

export default function GptSearch(){
    return(
        <>
        <div className="fixed -z-10">
                <img className="h-screen object-cover w-screen" src={BG_IMG} alt="bg"/>
            </div>
        <div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
        </>
    )
}