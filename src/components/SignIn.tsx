import * as React from 'react'
import firebase, { app } from '../Firebase'

const SignIn = props => {
    const { user, setUser, authHandler } = props

    const signIn = () => {
        const authProvider = new firebase.auth.GoogleAuthProvider()
        app
            .auth()
            .signInWithPopup(authProvider)
            .then(authHandler)
    }

    const signOut = async () => {
        await firebase.auth().signOut()
        setUser(null)
    }

    return (
        <section className="login">
            { user ? (
                <button onClick={signIn}>Sign In</button>
            ) : (
                <button onClick={signOut}>Sign Out</button>
            )}
        </section>
    )
}

export default SignIn