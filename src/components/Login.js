import { useState,useRef } from "react";
import Header from "./Header";
import checkValidateData from "../utils/validate"
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice"

const Login = () =>{

    const [isLoginForm,setIsSignForm] = useState(true);
    const [errMsg,setErrMsg] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const toggleForm = () =>{
        setIsSignForm(!isLoginForm)
    }
    const handleButtonClick = ()=>{
        const message = checkValidateData(name?.current?.value,email.current.value,password.current.value)
        setErrMsg(message)
        if(message){
            return;
        }
        if(!isLoginForm){
            //Signup Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/59047943?v=4"
                      }).then(() => {
                        const {uid,email,displayName,photoURL}= user
                        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))

                        navigate("/browse")
                      }).catch((error) => {
                        setErrMsg(error.message)
                      });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorCode+"-"+errorMessage)
                    // ..
                });
        }else{
            //Signin logic
            signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/browse")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMsg(errorCode+"-"+errorMessage)
            });
        }
    }
    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="absolute my-36 p-12 bg-black w-4/12 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-sm">
                <h1 className="font-bold text-3xl py-4">{isLoginForm?"Sign In":"Sign Up"}</h1>
                {!isLoginForm?<input 
                  ref={name}  
                  type="text" 
                  placeholder="Full Name" 
                  className="p-4 my-2 w-full bg-gray-700 rounded-sm"/>:""}
                <input 
                  ref={email}  
                  type="text" 
                  placeholder="Email Address" 
                  className="p-4 my-2 w-full bg-gray-700 rounded-sm"/>
                <input 
                  ref={password}
                  type="password" 
                  placeholder="Password" 
                  className="p-4 my-2 w-full bg-gray-700 rounded-sm "/>
                <p className="text-red-900">{errMsg}</p>
                <button className="p-4 my-4 bg-red-600 w-full rounded-md" onClick={handleButtonClick}> {isLoginForm?"Signin":"Signup"}</button>
                {!isLoginForm?<p>Already Registered? <span onClick={toggleForm} className="cursor-pointer">Sign In Now</span></p>:<p>New to Netflix? <span onClick={toggleForm} className="cursor-pointer">Sign Up Now</span></p>}
            </form> 
        </div>
    )
}

export default Login;