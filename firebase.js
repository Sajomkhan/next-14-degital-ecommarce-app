// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7sP6MrjVwCBglCn5q5UrwSAP2muMjzE8",
  authDomain: "stripe-payment-app-83b00.firebaseapp.com",
  projectId: "stripe-payment-app-83b00",
  storageBucket: "stripe-payment-app-83b00.appspot.com",
  messagingSenderId: "891148714117",
  appId: "1:891148714117:web:31f89b34f15054ac4ae9ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app
}