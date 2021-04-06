//<script type="module" src="/main.js"></script>
import './style.css';

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCihp4yCU_bwR9JHpj6vXZz2l-LrpD_D9U",
    authDomain: "bookit-306702.firebaseapp.com",
    databaseURL: "https://bookit-306702-default-rtdb.firebaseio.com",
    projectId: "bookit-306702",
    storageBucket: "bookit-306702.appspot.com",
    messagingSenderId: "324418107653",
    appId: "1:324418107653:web:cbce2fbfbfa0fab82f5f6c",
    measurementId: "G-BQBRD5WEJX"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

const showSessNotes = document.getElementById('showSessNotes');

showSessNotes.onclick = async() => {
    const sessID = document.getElementById('enterSess').value;
    var docRef = firestore.collection("DoctorNotes").doc(sessID);

    let tableNote = document.getElementById('tableNote');

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            tableNote.innerHTML = JSON.stringify(doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}
