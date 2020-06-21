import React, { FC } from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header: FC = () => {
    return (
        <header>
            <div>
                <NavLink to='/home'>HOME</NavLink>
            </div>
            <div>
                <NavLink to='/portfolio'>PORTFOLIO</NavLink>
            </div>
            <div>
                <NavLink to='/about'>ABOUT US</NavLink>
            </div>
            <div>
                <NavLink to='/contact'>CONTACT</NavLink>
            </div>
        </header>
    )
}

export default Header