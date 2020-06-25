import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header: FC = () => {
    return (
        <header className={classes.header}>
            <div>
                <div>
                    <div className={classes.item}>
                        <NavLink to='/home'>HOME</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to='/portfolio'>PORTFOLIO</NavLink>
                    </div>
                </div>
                <div>
                    <div className={classes.item}>
                        <NavLink to='/about'>ABOUT US</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to='/contact'>CONTACT</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header