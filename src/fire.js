import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCq06PEgsV2Py_6WqIWJoke8JYEDwJhLrM",
    authDomain: "login-ae8a8.firebaseapp.com",
    projectId: "login-ae8a8",
    storageBucket: "login-ae8a8.appspot.com",
    messagingSenderId: "411117146564",
    appId: "1:411117146564:web:36dff3c3c47098872f5491"
  };
 const fire = firebase.initializeApp(firebaseConfig);
 export default fire;