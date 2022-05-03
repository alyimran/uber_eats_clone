import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdIo57xYKJKk6QhzT0OeTNi8D0bx0vv0k",
    authDomain: "react-native-uber-eats-c-3836a.firebaseapp.com",
    projectId: "react-native-uber-eats-c-3836a",
    storageBucket: "react-native-uber-eats-c-3836a.appspot.com",
    messagingSenderId: "10152966442",
    appId: "1:10152966442:web:5620f05382575db0b30653"
  };
  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }
  
  const db = app.firestore();
  const auth = firebase.auth();
  
  export { db, auth };