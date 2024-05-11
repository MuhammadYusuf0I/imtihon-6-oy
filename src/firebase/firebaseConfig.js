import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmlIFX6ldMLdZ4d9KQidH-nJlXGbyUuXE",
  authDomain: "mykichen-aa490.firebaseapp.com",
  projectId: "mykichen-aa490",
  storageBucket: "mykichen-aa490.appspot.com",
  messagingSenderId: "482059183066",
  appId: "1:482059183066:web:0d36910366443556b616e3",
  measurementId: "G-4WEV4BB29P",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
