import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBnAtPj7YTRGzbVBw3B2U0XAEWARqtPU4w",
  authDomain: "techqueryhub.firebaseapp.com",
  projectId: "techqueryhub",
  storageBucket: "techqueryhub.appspot.com",
  messagingSenderId: "783022501756",
  appId: "1:783022501756:web:9314ed556add656eaf3ef9"
};

export  const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);
export  const auth = getAuth(app);
export  const storage = getStorage(app);
