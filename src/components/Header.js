import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = ()=>{

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store=>store.user)
    const showGptSearch = useSelector(store =>store.gpt.showGptSearch)
    // console.log(user)
    const handleSignOut = () =>{
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error")
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });
    
        // Unsubscribe when component unmounts
        return () => unsubscribe();
      }, []);
    
    const handleGptSearchClick = () =>{
      dispatch(toggleGptSearchView());
    }  

    const handleLanguageChange = (e)=>{
      dispatch(changeLanguage(e.target.value ))
    }

    return(
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
           <Link to="/"><img 
            className="w-20 mx-auto md:mx-0"
            src={LOGO} alt="logo"/></Link>
            {user && <div className="flex p-2">
                {showGptSearch?<select className="px-4 bg-gray-900 text-white rounded-md" onChange={handleLanguageChange}>
                  {SUPPORTED_LANGUAGES.map((lang)=>{
                    return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                  })}
                </select>:""}
                
                <button onClick={handleGptSearchClick} className="py-2 px-4 m-2 bg-purple-800 text-white rounded-md">{showGptSearch?"Home":"GPT Search"}</button>
                <img className="hidden md:block w-10 h-10 mt-2 " src={user.photoURL} alt="usericon"/>
                <button onClick={handleSignOut} className="mx-2 hover:bg-red-500 hover:p-2 rounded-md font-bold text-white">(Sign Out)</button>
            </div>}
        </div>
    )
}

export default Header