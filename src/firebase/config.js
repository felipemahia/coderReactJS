// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAL0wRdoQ9QpMRYQeCz8NAB6hG6oiaOdY",
  authDomain: "coder-reactjs-felipemahia.firebaseapp.com",
  projectId: "coder-reactjs-felipemahia",
  storageBucket: "coder-reactjs-felipemahia.appspot.com",
  messagingSenderId: "417864978021",
  appId: "1:417864978021:web:531c4286b70e2e280d408c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export default database

