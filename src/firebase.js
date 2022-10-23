import firebase from "firebase/app"
import "firebase/auth"



export const auth = firebase.initializeApp({
  apiKey: "AIzaSyABVK-liaHRQmOVg-NCHaxVN2_6A3hrfRw",
  authDomain: "dm-ddc67.firebaseapp.com",
  projectId: "dm-ddc67",
  storageBucket: "dm-ddc67.appspot.com",
  messagingSenderId: "554798280210",
  appId: "1:554798280210:web:3d4e890111f14792e132cb",
}).auth();