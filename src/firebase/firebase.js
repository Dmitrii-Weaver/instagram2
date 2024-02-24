import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyBL54vqP_YkZ2PsNyFZLfBovlnHQmcV2Gw",
  authDomain: "insta-clone-76ea9.firebaseapp.com",
  projectId: "insta-clone-76ea9",
  storageBucket: "insta-clone-76ea9.appspot.com",
  messagingSenderId: "1043098052901",
  appId: "1:1043098052901:web:2b84256cbec5332df9d2cc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, auth, firestore, storage}