import React, { FC } from 'react'
import classes from './TextInfo.module.css'

const TextInfo: FC<propsType> = props => {
    return (
        <div className={classes.textInfo}>
            <div >{props.title}</div>
            <p >{props.text} </p>
        </div>
    )
}

export default TextInfo

type propsType = {
    title: string
    text: string
}