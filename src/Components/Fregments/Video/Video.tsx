import React, { FC } from 'react'

const Video: FC<propsType> = props => {
    return (
        <div>
            {props.video
                ? <div>
                    <video src={props.video} />
                </div>
                : <div></div>
            }
        </div>
    )
}

export default Video

type propsType = {
    video: string
}