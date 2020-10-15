import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQNrkyhn6aGa7PpZmoccFpgWjPQlqHC3s",
  authDomain: "whatsapp-4324d.firebaseapp.com",
  databaseURL: "https://whatsapp-4324d.firebaseio.com",
  projectId: "whatsapp-4324d",
  storageBucket: "whatsapp-4324d.appspot.com",
  messagingSenderId: "781753404530",
  appId: "1:781753404530:web:bb3ecff7666d71c117c6eb",
  measurementId: "G-MSF97TZ08D",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
