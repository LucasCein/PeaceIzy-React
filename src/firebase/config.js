// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyA4AonExZ3MecdJmZN9ssOSpXVYsTSShQA",
    authDomain: "peaceizy-react.firebaseapp.com",
    projectId: "peaceizy-react",
    storageBucket: "peaceizy-react.appspot.com",
    messagingSenderId: "260296536862",
    appId: "1:260296536862:web:5d3452457c3ddf67588f0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const initFirebase=()=>app