import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzijD1v6A_NHcv2w5lzVrMrToMDkZClak",
  authDomain: "chat20210105.firebaseapp.com",
  projectId: "chat20210105",
  storageBucket: "chat20210105.appspot.com",
  messagingSenderId: "177321437703",
  appId: "1:177321437703:web:98db02450c2043603718a2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
