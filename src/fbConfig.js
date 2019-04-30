import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBoRqaIq9c1Q_kk6sGJCcPDu_K7wfnSDvE",
    authDomain: "reidvr-mario-plan.firebaseapp.com",
    databaseURL: "https://reidvr-mario-plan.firebaseio.com",
    projectId: "reidvr-mario-plan",
    storageBucket: "reidvr-mario-plan.appspot.com",
    messagingSenderId: "848455364193"
};
firebase.initializeApp(config);

//firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;