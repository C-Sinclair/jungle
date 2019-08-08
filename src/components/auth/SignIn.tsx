import * as React from 'react'
import { useState } from 'react'
import { auth } from '../../Firebase'
import { from } from 'rxjs';
import { map, delay } from 'rxjs/operators';

const SignIn = props => {

    const { setUser, foundError, authHandler } = props

    const [ isLoading, setLoading ] = useState(false)

    const [ userInput, editInput ] = useState({
        email: '',
        password: ''
    })

    const signIn = () => {
        const observable = from(
            auth.signInWithEmailAndPassword(userInput.email, userInput.password)
        )
        observable
            .subscribe(
                
                user => {

                },
                err => foundError(true)
            )
    }

    return (
        <form id="login">
            <input 
                placeholder="Mail Address"
                onChange={e => editInput(Object.assign(userInput, e.target.value))} />
            <input
                placeholder="Passing Word"
                onChange={e => editInput(Object.assign(userInput, e.target.value))} />
            <button 
                onClick={signIn}>
                    Sign Language
            </button>
        </form>
    )
}

export default SignIn