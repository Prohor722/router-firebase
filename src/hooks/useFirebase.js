import { useEffect, useState } from 'react';
import app from '../firebase.init'
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const useFirebase = () => {
    const [ user , setUser ] = useState({});
    
    const signInWithGoogle = () =>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user);
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{})
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user);
        })
    },[])
    return {
        user,
        signInWithGoogle,
        handleSignOut
    }
};

export default useFirebase;