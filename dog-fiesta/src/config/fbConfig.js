import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyB2bat9DH3-7iP20haMAd_1vuR7n63trVc",
  authDomain: "dogfiesta-779d4.firebaseapp.com",
  databaseURL: "https://dogfiesta-779d4.firebaseio.com",
  projectId: "dogfiesta-779d4",
  storageBucket: "dogfiesta-779d4.appspot.com",
  messagingSenderId: "333881126885",
  appId: "1:333881126885:web:f95ba9f17f08833e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage, firebase as default
}