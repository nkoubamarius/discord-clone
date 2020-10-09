import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwmF_v7pqJYXQSAWvSO1pUp0pz_B3y5Us",
    authDomain: "discord-clone-c6a9b.firebaseapp.com",
    databaseURL: "https://discord-clone-c6a9b.firebaseio.com",
    projectId: "discord-clone-c6a9b",
    storageBucket: "discord-clone-c6a9b.appspot.com",
    messagingSenderId: "275959219052",
    appId: "1:275959219052:web:fa108f61eaa194e55da949",
    measurementId: "G-6XEQQKX4EX"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebase.auth();

  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;

