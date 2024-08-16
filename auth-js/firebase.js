// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk_-TzbJucdAMXgZn9BQ_RfmGvti1rOec",
  authDomain: "food-app-baff2.firebaseapp.com",
  projectId: "food-app-baff2",
  storageBucket: "food-app-baff2.appspot.com",
  messagingSenderId: "812957396548",
  appId: "1:812957396548:web:ea2979ddda670497005611",
  measurementId: "G-XH74ECVYEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const analytics = getAnalytics(app);

export { auth }
