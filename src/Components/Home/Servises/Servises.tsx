import React, { FC, useState } from 'react'
import classes from './Servises.module.css'
import TextInfo from '../../Fregments/TextInfo/TextInfo'
import AButton from '../../Fregments/A_Button/A_Button'
import Image from '../../Fregments/Image/Image'
import src1 from '../../../media/img/png/002-gear.png'
import src2 from '../../../media/img/png/001-pencil.png'
import src3 from '../../../media/img/png/004-diamond.png'
import src4 from '../../../media/img/png/003-truck-front-view.png'

const Servises: FC = () => {
    const [title, setTitle] = useState('DO YOU KNOW WE CAN PROVIDE FOR YOU ?')
    const [text, setText] = useState('Lorem ipsum dolor sit amet consectetur adipis cing elit, sed do eius-mod tempor incididunt ut labore et. Lorem ni ipsum dolor sit amet, consectetur adipis cing elit, ed doi eiusmod tempor incididunt ut labore et.')
    const [servise, setServise] = useState([{
        img: src1,
        title: 'Management',
        text: 'Lorem ipsum dolor sitea amet, zixf conseit adipi cing elit, seddi do eius-mod btdempor in didunt utlae ore etioe. Lorem ipsum new idolor'
    },
    {
        img: src2,
        title: 'UI/UX Design',
        text: 'Lorem ipsum dolor sitea amet, zixf conseit adipi cing elit, seddi do eius-mod btdempor in didunt utlae ore etioe. Lorem ipsum new idolor sit amet.'
    },
    {
        img: src3,
        title: 'Logo/Branding',
        text: 'Lorem ipsum dolor sitea amet, zixf conseit adipi cing elit, seddi do eius-mod btdempor in didunt utlae ore etioeew idolor sit amet.'
    },
    {
        img: src4,
        title: 'Animation',
        text: 'Lorem ipsum dolor sitea amet, zixf conseit adipi cing elit, seddi do eius-mod btdempor in didnut utlae ore etioe. Lorem ipsum new idolor sit armet.'
    },
    ])

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div>
                    <TextInfo title={title} text={text} />
                </div>
                <div className={classes.button}>
                    <AButton textButton='Learn More' />
                </div>
            </div>
            <div className={classes.services}>
                {servise.map(elem => {
                    return (
                        <div key={elem.title} className={classes.item}>
                            <div>
                                <Image src={elem.img} alt='***' />
                            </div>
                            <div className={classes.itemText}>
                                <TextInfo title={elem.title} text={elem.text} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Servises