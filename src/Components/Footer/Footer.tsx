import React, { FC } from 'react'
import classes from './Footer.module.css'
import Image from '../Fregments/Image/Image'
import src1 from '../../media/img/png/006-twitter.png'
import src2 from '../../media/img/png/005-linkedin.png'
import src3 from '../../media/img/png/007-instagram-sketched.png'
import src4 from '../../media/img/png/004-facebook.png'

const Footer: FC = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.text}>
                &copy; Copyright @junaed 2016, All rights reserved.
            </div>
            <div className={classes.sotialNetwork}>
                <div>
                    <Image src={src1} alt='twitter' />
                </div>
                <div>
                    <Image src={src2} alt='linkedin' />
                </div>
                <div>
                    <Image src={src3} alt='instagram' />
                </div>
                <div>
                    <Image src={src4} alt='facebook' />
                </div>
            </div>
        </footer>
    )
}

export default Footer