// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAiqgw7eQ3o14GDPlJL1egWdPcTnQThVA",
  authDomain: "fitness-tracking-703fb.firebaseapp.com",
  projectId: "fitness-tracking-703fb",
  storageBucket: "fitness-tracking-703fb.appspot.com",
  messagingSenderId: "476925776129",
  appId: "1:476925776129:web:91eadbc9dabe62be9c0b00",
  measurementId: "G-BJK1H8EP0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };