// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCC1AarcKuolxlTiw4QSPqydKbMkF4ls8",
    authDomain: "react-firebase-b2ae5.firebaseapp.com",
    projectId: "react-firebase-b2ae5",
    storageBucket: "react-firebase-b2ae5.appspot.com",
    messagingSenderId: "984930768958",
    appId: "1:984930768958:web:5544014a654183b018996f",
    measurementId: "G-5396CSR2DF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);