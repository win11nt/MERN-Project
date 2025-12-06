import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig ={ 
  apiKey:"AIzaSyBs0Tzjg_10epR0uxE7yYS5FEGXobkKl1w", 
  authDomain:"ecommerce-cc3f3.firebaseapp.com", 
  projectId:"ecommerce-cc3f3", 
  storageBucket:"ecommerce-cc3f3.appspot.com", 
  messagingSenderId:"212186369843", 
  appId:"1:212186369843:web:3da7f302727962c1cc3846", 
  measurementId:"G-KV2C75GEYC" 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
