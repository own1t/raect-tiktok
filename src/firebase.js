import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGYZLJH1eJseK03Nsicz6z2J-TNeZjSZA",
  authDomain: "react-tiktok-3b0ee.firebaseapp.com",
  databaseURL: "https://react-tiktok-3b0ee.firebaseio.com",
  projectId: "react-tiktok-3b0ee",
  storageBucket: "react-tiktok-3b0ee.appspot.com",
  messagingSenderId: "930038604400",
  appId: "1:930038604400:web:44965a62011e2e01dc4ab5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
