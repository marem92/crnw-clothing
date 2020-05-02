import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCrNERy6znmKBXWxclkdIA7YyHp1mfi284',
  authDomain: 'crwn-db-37237.firebaseapp.com',
  databaseURL: 'https://crwn-db-37237.firebaseio.com',
  projectId: 'crwn-db-37237',
  storageBucket: 'crwn-db-37237.appspot.com',
  messagingSenderId: '968836397442',
  appId: '1:968836397442:web:ce64fd47c8fc6c7ae7379b',
  measurementId: 'G-6MY6Z3YF6R',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
