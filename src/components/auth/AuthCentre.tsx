import * as React from 'react'
import { useState } from 'react'
import { auth } from '../../Firebase'
import { DiYeoman } from 'react-icons/di'
import SignIn from './SignIn';
import Register from './Register';

const AuthCentre = props => {

    const { user, setUser, authHandler } = props
    
    const [ error, foundError ] = useState(false)

    const registerAnon = () => {
        auth.signInAnonymously()
            .catch(e => foundError(true))
    }

    const showSection = selection => {
        document.querySelectorAll('.authenication .visible')
            .forEach(element => {
                element.classList.remove('visible')
            })
        document.getElementById(selection)
            .classList.add('visible')
    }

    return (
        <section className="authentication">
            { error ? (
                <div>
                    <p>An error occurred logging in...</p>
                    <p>Try Again</p>
                </div>
            ) : (
                <div>
                    <button 
                        onClick={() => showSection('login')}>
                            Ventured this way before
                    </button>
                    <button 
                        onClick={() => showSection('register')}>
                            Brand new first timer
                    </button>

                    <SignIn 
                        setUser={setUser}
                        foundError={foundError}/>
                    <Register
                        setUser={setUser}
                        foundError={foundError} />
                </div>
            )}

            <div className="anon">
                <DiYeoman />
                <p>Prefer to be anon?</p>
                <button 
                    onClick={() => registerAnon()}>
                        Anoonamoose</button>
            </div>
        </section>
    )
}

export default AuthCentre