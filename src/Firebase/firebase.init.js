// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtsqAU61oTFtRsVWgERMnTcN6X7fa3zl0",
  authDomain: "the-dentist-33b3e.firebaseapp.com",
  projectId: "the-dentist-33b3e",
  storageBucket: "the-dentist-33b3e.appspot.com",
  messagingSenderId: "172019554488",
  appId: "1:172019554488:web:5ec02efafbc9937953fc4d"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 
export default auth;


