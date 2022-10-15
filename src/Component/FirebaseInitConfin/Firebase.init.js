import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const useAuth = () => {
   initializeApp(firebaseConfig);
}


export default useAuth;