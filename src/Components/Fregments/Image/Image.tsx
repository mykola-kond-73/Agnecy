import React, { FC } from 'react'

const Image: FC<propsType> = props => {
    return (
        <div>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default Image

type propsType={
    src:string
    alt:string
}