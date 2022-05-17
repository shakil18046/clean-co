// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKhCC1J0ZocIqsJa4pCEq3FuLAvk8F7VY",
  authDomain: "clean-co-5321d.firebaseapp.com",
  projectId: "clean-co-5321d",
  storageBucket: "clean-co-5321d.appspot.com",
  messagingSenderId: "771089246497",
  appId: "1:771089246497:web:c7d12d1eb0235f6f583660",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
