// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvU_Gt2YwNHQNa_Cz1wBdg5KgremIBxxs",
    authDomain: "find-the-dentist-9c2dc.firebaseapp.com",
    projectId: "find-the-dentist-9c2dc",
    storageBucket: "find-the-dentist-9c2dc.appspot.com",
    messagingSenderId: "892206481622",
    appId: "1:892206481622:web:753e9c2b538f8384a68977"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 
export default auth;


