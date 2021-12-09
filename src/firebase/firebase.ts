import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Firebase = firebase.initializeApp({
    apiKey: "AIzaSyAksedi5SsEX90iI97If1sAQogVm54mfJ4",
    authDomain: "react-aa753.firebaseapp.com",
    projectId: "react-aa753",
    storageBucket: "react-aa753.appspot.com",
    messagingSenderId: "669278566077",
    appId: "1:669278566077:web:d834319bfa8dffe40529d4"
});

export const Providers = {
    google: new firebase.auth.GoogleAuthProvider()
}

export const auth = firebase.auth();
export default Firebase;
