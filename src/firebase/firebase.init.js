// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV3mLyIUfmbGY3r-hVZI0uH2H5ElSv-e8",
  authDomain: "curiosity-education-17eeb.firebaseapp.com",
  projectId: "curiosity-education-17eeb",
  storageBucket: "curiosity-education-17eeb.appspot.com",
  messagingSenderId: "1051704042362",
  appId: "1:1051704042362:web:d2aa83e0067db17ca9acc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;