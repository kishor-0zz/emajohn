import useAuth from "../FirebaseInitConfin/Firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const UseFirebase = () => {
   const [data, setData] = useState({});
   const [error, setError] = useState("");


   useAuth();
   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();

   const googleSignin = () => {
      return signInWithPopup(auth, googleProvider)

         .catch((error => {
            setError(error.message)
         }))
   }

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            setData(user)
         }
      })

   }, [])
   const signOutUser = () => {
      signOut(auth).then(() => {

         setData({})
      }).catch((error) => {
         setError(error.message)
      });
   }







   return {
      signOutUser,
      data,
      error,
      googleSignin,
   }


}
export default UseFirebase;