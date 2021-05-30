// apiimport firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useReducer } from 'react';


const config = {
//       api
    };

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
      if(!userAuth) return;
      
      const userRef= firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if(!snapShot.exists) {
            const {displayName, email} = userAuth;
            const createdAt = new Date();

            try {
                  await userRef.set(
                        {
                              displayName,
                              email,
                              createdAt,
                              ...additionalData
                        }
                  )
            }
            catch (error) {
                  console.log('error creating user', error.message);
            }
      }
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select_acount'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
