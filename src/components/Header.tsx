import * as React from 'react'
import { useState } from 'react'
import { IoMdMenu as MenuIcon } from 'react-icons/io'
import ProfileImage from './ProfileImage'
import Timer from './Timer'

const Header = () => (
        <header>
            <MenuIcon />
            <ProfileImage />
            <Timer />
        </header>
)

export default Header