import "firebase/auth";
import "firebase/firestore"

import firebase from 'firebase/app'
import { authState } from 'rxfire/auth'
import { collectionData } from 'rxfire/firestore'
import { filter } from 'rxjs/operators'


const app = firebase.initializeApp({

})

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