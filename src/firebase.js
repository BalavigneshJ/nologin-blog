import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCv6_tcN4TodELSqzYS8BtmTRB5IETV_xQ",
    authDomain: "nologin-b63d9.firebaseapp.com",
    databaseURL: "https://nologin-b63d9.firebaseio.com",
    projectId: "nologin-b63d9",
    storageBucket: "nologin-b63d9.appspot.com",
    messagingSenderId: "52455322162",
    appId: "1:52455322162:web:3621b47df9447b6008c22b",
    measurementId: "G-TSYZZ937EK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const databaseRef = firebase.database().ref();
export const NoLoginRef = databaseRef.child("NoLogin")