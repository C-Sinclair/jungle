import * as React from 'react'
import { useState } from 'react'
import './App.sass'
import Header from './Header'
import SignIn from './SignIn'
import Canvas from './Canvas'
import { firestore, loggedIn$ } from '../Firebase'

const App = () => {
    const [ user, setUser ] = useState({})

    const authHandler = async authData => {
      setUser(authData.user)
    }

    loggedIn$.subscribe(user => {
      authHandler({ user })
      const { name } = user 
      firestore
        .collection('users')
        .doc(user.uuid)
        .set({ name, lastLogin: new Date() })
    })
    
    return (
        <main>
          <Header />
          <SignIn 
            user={user}
            setUser={setUser}
            authHandler={authHandler} />
          <Canvas />
        </main>
    )
}

export default App