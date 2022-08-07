import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
     apiKey: "AIzaSyAA2zitlQFd2lVxoEA2H-oDwwupWU1H084",
     authDomain: "appreact-58377.firebaseapp.com",
     projectId: "appreact-58377",
     storageBucket: "appreact-58377.appspot.com",
     messagingSenderId: "832368292851",
     appId: "1:832368292851:web:75012b035ce3ea2c4c5886",
     measurementId: "G-HZJKQ9WLEE"
};

if (!firebase.apps.length) {
     //Abrir Conexao
     firebase.initializeApp(firebaseConfig);
}

export default firebase;