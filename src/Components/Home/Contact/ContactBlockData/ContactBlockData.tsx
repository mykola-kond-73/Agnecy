import React, { FC, useState } from 'react'
import classes from './ContactBlockData.module.css'

const ContactBlockData: FC = () => {
    const [strit] = useState('jalalabad 24/A, Ambaarkhana, Sylhet, Bangladesh')
    const [email] = useState('redwan@deviserwed.com')
    const [tel] = useState('(+88) 017 617 46373')
    return (
        <div className={classes.container}>
            <h4>
                CONTACT INFO
            </h4>
            <div>
                {strit}
            </div>
            <div>
                {email}
            </div>
            <div>
                {tel}
            </div>
        </div>
    )
}

export default ContactBlockData