import firebase from "firebase";
  
const firebaseConfig = {
    apiKey: "AIzaSyDoWFT0sXEqeUzl6J05CshbC1gvsgusPeE",
    authDomain: "leadzen-7f69d.firebaseapp.com",
    databaseURL: "https://leadzen-7f69d-default-rtdb.firebaseio.com",
    projectId: "leadzen-7f69d",
    storageBucket: "leadzen-7f69d.appspot.com",
    messagingSenderId: "1095316203564",
    appId: "1:1095316203564:web:95544ce4f5d144ab9a8989",
    measurementId: "G-9K07JYS246"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;