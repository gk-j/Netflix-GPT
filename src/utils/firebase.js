// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8FM1DjOOHRmVqxmmud4QxjyrH3O6ARyQ",
  authDomain: "netflix-gpt-dd806.firebaseapp.com",
  projectId: "netflix-gpt-dd806",
  storageBucket: "netflix-gpt-dd806.appspot.com",
  messagingSenderId: "1056825195168",
  appId: "1:1056825195168:web:0a16783659d4b8d30567c5",
  measurementId: "G-6JTZWBMFBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()