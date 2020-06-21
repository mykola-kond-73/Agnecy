import React, { FC } from 'react'
import classes from './Prelosder.module.css'
import Image from '../Image/Image'

const Preloader: FC<propsType> = props => {
    return (
        <div className={classes.div}>
            <Image src={props.img} alt="***" />
        </div>
    )
}

export default Preloader

type propsType = {
    img: string
}