import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4odqdj16PN6iErHa7OuGbpjadsxZDc60",
  authDomain: "slack-clone-66fbd.firebaseapp.com",
  projectId: "slack-clone-66fbd",
  storageBucket: "slack-clone-66fbd.appspot.com",
  messagingSenderId: "367622699876",
  appId: "1:367622699876:web:64227bffc2cbec36ded871",
  measurementId: "G-0G17V634BR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
