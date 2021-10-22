import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAK60QnepwTRGyrvG4jn8spZb7ouVK1X8U",
    authDomain: "crud-react-125b9.firebaseapp.com",
    projectId: "crud-react-125b9",
    storageBucket: "crud-react-125b9.appspot.com",
    messagingSenderId: "448310274667",
    appId: "1:448310274667:web:ef939d36ba7dc2b820df2e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}