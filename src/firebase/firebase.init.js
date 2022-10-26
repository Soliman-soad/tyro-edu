// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUe2gtpD7JB9waTXupJVX2AzWy5vZpTQI",
  authDomain: "tyro-edu.firebaseapp.com",
  projectId: "tyro-edu",
  storageBucket: "tyro-edu.appspot.com",
  messagingSenderId: "682157546295",
  appId: "1:682157546295:web:5641f3deb0202d232118b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;