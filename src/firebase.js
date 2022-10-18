// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyALHEhDiWj2JCbBNXn8Rxh8jAj8I-YVN88",
  authDomain: "clone-6f9dc.firebaseapp.com",
  projectId: "clone-6f9dc",
  storageBucket: "clone-6f9dc.appspot.com",
  messagingSenderId: "121377179512",
  appId: "1:121377179512:web:bba62904ec5e19fac3aa8d",
  measurementId: "G-QD10XFEVE6",
};

// firebase=> Firebase is a set of hosting services for any type of application.
//  It offers NoSQL and real-time hosting of databases, content, social authentication,
//  and notifications, or services, such as a real-time communication server.


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // this application can access database of firebase(NoSQL)
const auth = firebase.auth(); // there are various options throug which firebase can provide authentication
// (eg: via email,facebook,google etc)
export { db, auth };
