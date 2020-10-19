import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyD1GSb9ynSIg8vv__eRBbomgte2HjgEp0s",
  authDomain: "clone-5a923.firebaseapp.com",
  databaseURL: "https://clone-5a923.firebaseio.com",
  projectId: "clone-5a923",
  storageBucket: "clone-5a923.appspot.com",
  messagingSenderId: "1012375773072",
  appId: "1:1012375773072:web:c732553f2fd2fec3c85d15",
  measurementId: "G-8TL1Y3966T"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };