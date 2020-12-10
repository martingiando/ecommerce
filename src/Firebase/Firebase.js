import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    
        apiKey: "AIzaSyA_1YyJH8j81FpbtofPC6IBma9Fsd8xOIQ",
        authDomain: "mg-ecommerce-b06b9.firebaseapp.com",
        projectId: "mg-ecommerce-b06b9",
        storageBucket: "mg-ecommerce-b06b9.appspot.com",
        messagingSenderId: "250174292361",
        appId: "1:250174292361:web:bfb18315834f4864782158"
});

export const getFirebase = () => {
    return app;
}

// Para llamar a la base de datos
export const getFirestore = () => {
    return firebase.firestore();
}