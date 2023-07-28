import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt5oiciFZGXH_r1hor4h77dbZTCAKt0jE",
  authDomain: "react-auth-96023.firebaseapp.com",
  projectId: "react-auth-96023",
  storageBucket: "react-auth-96023.appspot.com",
  messagingSenderId: "874475240264",
  appId: "1:874475240264:web:9070bb8c5004122de8917d",
  measurementId: "G-32CYCQ4BY4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();






