// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0hH5xI3sv1xYQ3YYY6P2QetqTTmGMeyA",
  authDomain: "toylandcars.firebaseapp.com",
  projectId: "toylandcars",
  storageBucket: "toylandcars.appspot.com",
  messagingSenderId: "498522976250",
  appId: "1:498522976250:web:6f82c4726a2a732fb8be43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;