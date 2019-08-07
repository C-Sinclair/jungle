import firebase from 'firebase/app'

const app = firebase.app()
const auth = firebase.auth(app)
// const db = firebase.database()
// const messaging = firebase.messaging()
// const storage = firebase.storage()

export { 
    app, 
    auth, 
    // db, 
    // messaging, 
    // storage 
}

export default firebase