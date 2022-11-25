import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB6EzCENIBR-FX7HLw34qGejzQB9oR5lzk",
  authDomain: "linkedin-clone-314ae.firebaseapp.com",
  projectId: "linkedin-clone-314ae",
  storageBucket: "linkedin-clone-314ae.appspot.com",
  messagingSenderId: "838766351787",
  appId: "1:838766351787:web:5e1e029e0f14ec297a6eee"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  const auth = firebase.auth();

  export { db, auth };
