import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBXG26wWvyAqo0oqid98DOFT1nVxg1Jf00",
  authDomain: "portfolio-mail-service.firebaseapp.com",
  databaseURL: "https://portfolio-mail-service.firebaseio.com",
  projectId: "portfolio-mail-service",
  storageBucket: "portfolio-mail-service.appspot.com",
  messagingSenderId: "608661835814",
  appId: "1:608661835814:web:61ad9c1ac82a3a5f4956e7",
  measurementId: "G-LRQLTV9GJK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseFirestore = firebaseApp.firestore();
const firebaseDB = firebaseApp.database();

// export firestore database
export { firebaseApp, firebaseFirestore, firebaseDB };
