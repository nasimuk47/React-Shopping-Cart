import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP-jSEXGusdsNiy4mzvFEzDI6mhfGsY54",
  authDomain: "react-ecommerce-web-288f6.firebaseapp.com",
  projectId: "react-ecommerce-web-288f6",
  storageBucket: "react-ecommerce-web-288f6.appspot.com",
  messagingSenderId: "784706557337",
  appId: "1:784706557337:web:c77f9af79994135329af08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
