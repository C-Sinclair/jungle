import * as React from 'react'
import { useState } from 'react'
import { IoMdMenu as MenuIcon } from 'react-icons/io'
import ProfileImage from './ProfileImage'
import Timer from './Timer'

const Header = () => {
    const [ elapsed, setElapsed ] = useState(0)
    return (
        <header>
            <MenuIcon />
            <ProfileImage />
            <Timer elapsed={elapsed}/>
        </header>
    )
}

export default Header