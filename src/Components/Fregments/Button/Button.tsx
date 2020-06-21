import React,{FC} from 'react'
import classes from './Button.module.css'

const Button:FC<propsType>=props=>{
    return(
        <div className={classes.button}>
            <button disabled={props.disabled}>
                {props.inscription}
            </button>
        </div>
    )
}

export default Button

type propsType={
    inscription:string
    disabled:boolean
}