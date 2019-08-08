import * as React from 'react'
import { useState } from 'react'
import './App.sass'
import Header from './Header'
import Canvas from './Canvas'
import { firestore, loggedIn$ } from '../Firebase'
import AuthCentre from './auth/AuthCentre'

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
          { !user && (
              <AuthCentre
                user={user}
                setUser={setUser}
                authHandler={authHandler} />
          )}
          <Canvas />
        </main>
    )
}

export default App