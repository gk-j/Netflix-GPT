import { useRef } from "react";
import lang from "../utils/languageconstants";
import { useSelector } from "react-redux";
import { openai } from "../utils/openai";
export default function GptSearchBar(){
    const langKey = useSelector((store)=>store.config.lang)
    const searchText = useRef(null)
    const handleGPTSearchClick =async () =>{
        // Make an API call to get movie results from openapi
        const gptQuery ="Act as a Movie Recommendation system nad suggest some movies for the query"+searchText.current.value+". only give me names of 5 movies with their cast,seperated like the example result given ahead.Example Result:[Bahubali:{Hero:Prabhas,Heroine:Anushka,Director:Rajamouli},RRR:{Hero:RAMCHARAN,Heroine:,Director:Rajamouli},...]"
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: {gptQuery}}],
            model: 'gpt-3.5-turbo',
        });
          
          console.log(gptResults.choices)
          console.log(searchText.current.value)
        
    }
    return(
        <div className="pt-[10%] flex justify-center ">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchText} type="text" className="p-4 m-6 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder}/>
                <button className="py-2 px-4 m-4 col-span-3  bg-red-700 text-white rounded" onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
            </form>
        </div>
    )
}