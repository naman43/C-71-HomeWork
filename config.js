import firebase from "firebase";
require("@firebase/firestore");

/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA73ZWrHNjXdLmN2Tg0jdiWsAl4IlbxIvg",
  authDomain: "e-ride-4-and-5.firebaseapp.com",
  projectId: "e-ride-4-and-5",
  storageBucket: "e-ride-4-and-5.appspot.com",
  messagingSenderId: "996295810723",
  appId: "1:996295810723:web:b698890fbe36b9245d6916",
  measurementId: "G-1Y87THW7VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
