import React,{FC} from 'react'
import { NavLink } from 'react-router-dom'

const AButton:FC<propsType>=props=>{
    return(
        <div>
            <div><NavLink to='/contact'><span>{props.textButton} </span></NavLink> </div>
        </div>
    )
}

type propsType={
    textButton:string
}

export default AButton