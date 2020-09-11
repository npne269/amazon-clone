import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDHuhTLeNgeoTUJd7czO42ZOadiOxzrD6I",
    authDomain: "challenge-e7d26.firebaseapp.com",
    databaseURL: "https://challenge-e7d26.firebaseio.com",
    projectId: "challenge-e7d26",
    storageBucket: "challenge-e7d26.appspot.com",
    messagingSenderId: "824119327256",
    appId: "1:824119327256:web:7ce72236e819417895616d",
    measurementId: "G-2TPTXZTW4Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth =  firebaseApp.auth();

  export {db,auth};