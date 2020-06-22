import React, { FC, useState } from 'react'
import classes from './Head.module.css'
import TextInfo from '../../Fregments/TextInfo/TextInfo'
import AButton from '../../Fregments/A_Button/A_Button'
import Video from '../../Fregments/Video/Video'
import Home from '../Home'
import { AppStateType } from '../../../Redux/reduxStore'
import { getVideo } from '../../../Redux/selector'
import { connect, ConnectedProps } from 'react-redux'

const Head: FC<Props> = props => {

    const [title, setTitle] = useState('OUR STRONG ORGANAISATION')
    const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eius-mod tempor incididunt ut labore et. ectetur adig ipis cing elit, sed do eiusmod tempor incididunt.')

    return (
        <div>
            <div>
                <div>
                    <TextInfo title={title} text={text} />
                </div>
                <div>
                    <AButton textButton='Contact Us' />
                </div>
            </div>
            <div>
                <Video video={props.video!} />
            </div>
        </div>
    )
}
const mapStateToProps=(state:AppStateType)=>{
    return{
        video:getVideo(state)
    }
}

const connector=connect(mapStateToProps,{})

export default connector(Head)

type Props=ConnectedProps<typeof connector>