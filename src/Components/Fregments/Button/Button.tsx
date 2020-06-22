import React,{FC} from 'react'

const Button:FC<propsType>=props=>{
    return(
        <div>
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