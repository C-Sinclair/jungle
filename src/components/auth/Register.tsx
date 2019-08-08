import * as React from 'react'
import { useState } from 'react'
import { auth } from '../../Firebase'

const Register = props => {

    const { setUser, foundError } = props

    const [ userInput, editInput ] = useState({
        email: '',
        password: ''
    })

    const register = () => {
        auth.createUserWithEmailAndPassword(userInput.email, userInput.password)
            .then(user => setUser(user))
            .catch(e => foundError(true))
    }

    return (
        <form id="register">
            <input 
                placeholder="Mail Address"
                onChange={e => editInput(Object.assign(userInput, e.target.value))} />
            <input
                placeholder="Passing Word"
                onChange={e => editInput(Object.assign(userInput, e.target.value))} />
            <button
                onClick={() => register()}>
                    Join the ranks
                </button>
        </form>
    )
}

export default Register