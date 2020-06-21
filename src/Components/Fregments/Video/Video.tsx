import React,{FC} from 'react'

const Video:FC<propsType>=props=>{
    return(
        <div>
            <video src={props.video}/>
        </div>
    )
}

export default Video

type propsType={
    video:string
}