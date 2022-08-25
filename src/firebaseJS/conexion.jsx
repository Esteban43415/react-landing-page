// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPTInnQyMGEEuhi0tT4DLix-3NUfLqNEI",
    authDomain: "bocapezweb.firebaseapp.com",
    projectId: "bocapezweb",
    storageBucket: "bocapezweb.appspot.com",
    messagingSenderId: "1068908586568",
    appId: "1:1068908586568:web:7ceff74c90a8e4173bda7d",
    measurementId: "G-E22B4TZH6B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
