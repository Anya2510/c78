import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCMbq2zV_OnrTsF7pStNULK9JMZ8yVRLbQ",
    authDomain: "barter-system-d5d82.firebaseapp.com",
    databaseURL: "https://barter-system-d5d82.firebaseio.com",
    projectId: "barter-system-d5d82",
    storageBucket: "barter-system-d5d82.appspot.com",
    messagingSenderId: "215883699286",
    appId: "1:215883699286:web:4a8cc1fce8c07ef6aed7f7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()