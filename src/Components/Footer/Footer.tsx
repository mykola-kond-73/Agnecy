import React, { FC } from 'react'
import classes from './Footer.module.css'
import Image from '../Fregments/Image/Image'

const Footer: FC = () => {
    return (
        <footer>
            <div>
                &copy; Copyright @junaed 2016, All rights reserved.
            </div>
            <div>
                <div>
                    <Image src='' alt='twitter' />
                </div>
                <div>
                    <Image src='' alt='***' />
                </div>
                <div>
                    <Image src='' alt='google' />
                </div>
                <div>
                    <Image src='' alt='facebook' />
                </div>
            </div>
        </footer>
    )
}

export default Footer