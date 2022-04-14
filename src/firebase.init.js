// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATCN8VKP7EQofR4WISZ8rVc4Gho7J3rws",
  authDomain: "ema-john-project-6f78c.firebaseapp.com",
  projectId: "ema-john-project-6f78c",
  storageBucket: "ema-john-project-6f78c.appspot.com",
  messagingSenderId: "661610658270",
  appId: "1:661610658270:web:d2a10266ee20b02ec3054f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;