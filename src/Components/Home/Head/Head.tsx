import React, { FC, useState } from 'react'
import classes from './Head.module.css'
import TextInfo from '../../Fregments/TextInfo/TextInfo'
import AButton from '../../Fregments/A_Button/A_Button'
import Video from '../../Fregments/Video/Video'
import Home from '../Home'

const Head: FC = () => {

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
                <Video video='' />
            </div>
        </div>
    )
}

export default Head