import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyD7PsGalLpLDTvoYOCyrIvb_Pmrv4b92c0",
  authDomain: "amz-1cl.firebaseapp.com",
  projectId: "amz-1cl",
  storageBucket: "amz-1cl.appspot.com",
  messagingSenderId: "592925602057",
  appId: "1:592925602057:web:a95f3200c5c9fa1698e3d8"
};
  let firebase=initializeApp(firebaseConfig);
  export let auth=getAuth(firebase);
  export let db=getDatabase(firebase);
  export let storage=getStorage(firebase);
