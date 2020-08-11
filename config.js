import * as firebase from 'firebase'
require ('@firebase/firestore')
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCcNVAgXr97XAfAZs1-HHkx0JScNdPLdMk",
  authDomain: "barter-system-2895d.firebaseapp.com",
  databaseURL: "https://barter-system-2895d.firebaseio.com",
  projectId: "barter-system-2895d",
  storageBucket: "barter-system-2895d.appspot.com",
  messagingSenderId: "1064876771250",
  appId: "1:1064876771250:web:ee89f9d569c9595d5f46ab"
};
// Initialize Firebase
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
export default firebase.firestore();