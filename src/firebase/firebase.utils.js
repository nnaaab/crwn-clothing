import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
      apiKey: "AIzaSyADBNjkXYlTwzDvK1DMitI-kEWrxUspH_M",
      authDomain: "crwn-db-4ec1f.firebaseapp.com",
      projectId: "crwn-db-4ec1f",
      storageBucket: "crwn-db-4ec1f.appspot.com",
      messagingSenderId: "612604851951",
      appId: "1:612604851951:web:a1a3e06640853bb4eb0d1a",
      measurementId: "G-YKC8CZN9NQ"
    };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select_acount'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;