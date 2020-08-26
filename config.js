import * as firebase from 'firebase'
require ('@firebase/firestore')
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCPWCURRBoYc_ILrwG6wdT4RWC0r3Tv1ho",
  authDomain: "barter-syste.firebaseapp.com",
  databaseURL: "https://barter-syste.firebaseio.com",
  projectId: "barter-syste",
  storageBucket: "barter-syste.appspot.com",
  messagingSenderId: "426258893322",
  appId: "1:426258893322:web:707921e024f30a0f8c6df3"
};
// Initialize Firebase
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
export default firebase.firestore();