import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBvfVpZ622CFDRQ3oM7HXy6ZemwbtDkdz4',
  authDomain: 'chat-web-app-f9a09.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-f9a09-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'chat-web-app-f9a09',
  storageBucket: 'chat-web-app-f9a09.appspot.com',
  messagingSenderId: '134917093955',
  appId: '1:134917093955:web:acb6be328f6cbbca7af2f6',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
