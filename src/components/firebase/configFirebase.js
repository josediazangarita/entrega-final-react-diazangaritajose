// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgMz5oY_qe5ZKKPJ22bEbx0MC8nyVJvEQ",
    authDomain: "videolandpost-347.firebaseapp.com",
    projectId: "videolandpost-347",
    storageBucket: "videolandpost-347.appspot.com",
    messagingSenderId: "409846422762",
    appId: "1:409846422762:web:d4f964157bef60615b0b93",
    measurementId: "G-4SJ8YXN410"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseConnect = () => app