// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA612tvnd8saDj9wr7rD_J-OojXo5oYok8",
  authDomain: "pantry-tracker-65205.firebaseapp.com",
  projectId: "pantry-tracker-65205",
  storageBucket: "pantry-tracker-65205.appspot.com",
  messagingSenderId: "423454182519",
  appId: "1:423454182519:web:2528ca605f87f6379c4a72",
  measurementId: "G-G2Y20WCTNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };