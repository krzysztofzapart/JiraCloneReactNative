// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKA-t5WBzjQRinrl6EQmMe_1FASSFF8w0",
  authDomain: "amproject-8ebbc.firebaseapp.com",
  projectId: "amproject-8ebbc",
  storageBucket: "amproject-8ebbc.appspot.com",
  messagingSenderId: "715460288117",
  appId: "1:715460288117:web:91af81197ab6786ff9623c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth()
export default getFirestore();
export { auth };