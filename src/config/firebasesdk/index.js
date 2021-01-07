import firebase from 'firebase';

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: 'AIzaSyA8Dp8yInWfJV_qUQdgZfknhZXDeeENFzg',
        authDomain: 'naxechat.firebaseapp.com',
        databaseURL: 'https://naxechat-default-rtdb.firebaseio.com',
        projectId: 'naxechat',
        storageBucket: 'naxechat.appspot.com',
        messagingSenderId: '23143048525',
        appId: "1:23143048525:web:3b9d70f2db9de05796c304",
        measurementId: "G-TTQSG6KSY3"
      });
    }
  }
  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };
}
const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;