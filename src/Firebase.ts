import "firebase/auth";
import "firebase/firestore"

import firebase from 'firebase/app'
import { authState } from 'rxfire/auth'
import { collectionData } from 'rxfire/firestore'
import { filter } from 'rxjs/operators'

const firebaseConfig = {
    apiKey: "AIzaSyCp_dq88Im5iPI9wIw56-LsuTrlgVwqWZ4",
    authDomain: "jungle-1e2f7.firebaseapp.com",
    databaseURL: "https://jungle-1e2f7.firebaseio.com",
    projectId: "jungle-1e2f7",
    storageBucket: "jungle-1e2f7.appspot.com",
    messagingSenderId: "703196937195",
    appId: "1:703196937195:web:ba0a39b01395df9d"
}

const app = firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore(app)
const auth = firebase.auth(app)
const loggedIn$ = authState(auth).pipe(filter(user => !!user))

export { 
    app, 
    auth, 
    firestore, 
    collectionData,
    loggedIn$
}

export default firebase