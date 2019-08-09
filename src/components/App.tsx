import * as React from 'react'
import { useState } from 'react'
import { Router } from '@reach/router'
import './App.sass'
import Header from './Header'
import Hallway from '../rooms/Hallway'
import MoonRoom from '../rooms/moon'
import SoilRoom from '../rooms/soil'
import { db, loggedIn$ } from '../Firebase'
import AuthCentre from './auth/AuthCentre'

const App = () => {
    const [ user, setUser ] = useState({})

    const authHandler = async authData => {
      setUser(authData.user)
    }

    loggedIn$.subscribe(user => {
      authHandler({ user })
      const { name } = user 
      db.collection('users')
        .doc(user.uuid)
        .set({ name, lastLogin: new Date() })
    })
    
    return (
        <main>
          {/* <Header /> */}

          { !user ? (
              <AuthCentre
                user={user}
                setUser={setUser}
                authHandler={authHandler} />
          ) : (
            <Router>
              <Hallway path="/" />
              <MoonRoom path="/moon" />
              <SoilRoom path="/soil" />
            </Router>
          )}
        </main>
    )
}

export default App