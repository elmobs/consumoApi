import firebase from "firebase";
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCVoGKGtd6qwEkd3XQm0hfCqgmwHBfhlLw",
    authDomain: "testeblue-ec423.firebaseapp.com",
    projectId: "testeblue-ec423",
    storageBucket: "testeblue-ec423.appspot.com",
    messagingSenderId: "1096332826994",
    appId: "1:1096332826994:web:28db020ae09caaf9bb25eb",
    measurementId: "G-KV2BFZ1FTG"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;