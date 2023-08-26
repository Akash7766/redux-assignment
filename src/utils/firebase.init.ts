// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBekDGiahhwxi8O7Xsqq4Gh18qnKBFVers",
  authDomain: "books-5241c.firebaseapp.com",
  projectId: "books-5241c",
  storageBucket: "books-5241c.appspot.com",
  messagingSenderId: "675820936250",
  appId: "1:675820936250:web:66236266f019c12eb32903",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
