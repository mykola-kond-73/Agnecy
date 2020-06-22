import React, { FC, useState } from 'react'
import classes from './Persons.module.css'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../../Redux/reduxStore'
import { getPerson } from '../../../Redux/selector'
import TextInfo from '../../Fregments/TextInfo/TextInfo'
import Image from '../../Fregments/Image/Image'
import { NavLink } from 'react-router-dom'

const Persons: FC<Props> = props => {
    const [title, setTitle] = useState('MEET OUR TEAM')
    const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui/Ux, print template.')
    const [personIndex, setPersonIndex] = useState(0)
    const personData = props.persons![personIndex]
    return (
        <div>
            <div>
                <TextInfo title={title} text={text} />
            </div>
            <div>
                <div>
                    <Image src={personData.photo} alt={personData.name} />
                </div>
                <div>
                    <TextInfo title={personData.name} text={personData.information} />
                </div>
                <div>
                    <div>
                        <a href={personData.contact.facebook}>Facebook</a>
                    </div>
                    <div>
                        <a href={personData.contact.dribble}>Dribble</a>
                    </div>
                    <div>
                        <a href={personData.contact.behance}>Behance</a>
                    </div>
                    <div>
                        <a href={personData.contact.twitter}> Twitter</a>
                    </div>
                </div>
            </div>
            <div>
                {props.persons!.map((elem, index) => {
                    return (
                        <div onClick={() => setPersonIndex(index)}>
                            {elem.photo
                                ?
                                <div>
                                    <Image src={elem.photo} alt={`${elem.name}`} />
                                </div>
                                : <div></div>
                            }
                            <div>
                                {elem.name}
                            </div>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )

}

const mapStateToProps = (state: AppStateType) => {
    return {
        persons: getPerson(state)
    }
}

const connector = connect(mapStateToProps, {})

export default connector(Persons)

type Props = ConnectedProps<typeof connector>