import React, { FC, useState } from 'react'
import classes from './Servises.module.css'
import TextInfo from '../../Fregments/TextInfo/TextInfo'
import AButton from '../../Fregments/A_Button/A_Button'
import Image from '../../Fregments/Image/Image'

const Servises: FC = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [servise, setServise] = useState([{
        img: '',
        title: 'Management',
        text: 'Lorem ipsum dolor sitea amet, zixf conseit adipi cing elit, seddi do eius-mod btdempor in didunt utlae ore etioe. Lorem ipsum new idolor'
    },
    {
        img: '',
        title: 'UI/UX Design',
        text: 'Lorem ipsum dolor sitea amet, zixf conseit adipi cing elit, seddi do eius-mod btdempor in didunt utlae ore etioe. Lorem ipsum new idolor sit amet.'
    },
    {
        img: '',
        title: 'Logo/Branding',
        text: 'Lorem ipsum dolor sitea amet, zixf conseit adipi cing elit, seddi do eius-mod btdempor in didunt utlae ore etioeew idolor sit amet.'
    },
    {
        img: '',
        title: 'Animation',
        text: 'Lorem ipsum dolor sitea amet, zixf conseit adipi cing elit, seddi do eius-mod btdempor in didnut utlae ore etioe. Lorem ipsum new idolor sit armet.'
    },
    ])

    return (
        <div>
            <div>
                <div>
                    <TextInfo title={title} text={text} />
                </div>
                <div>
                    <AButton textButton='Learn More' />
                </div>
            </div>
            <div>
                {servise.map(elem => {
                    return (
                        <div>
                            <div>
                                <Image src={elem.img} alt='***' />
                            </div>
                            <div>
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