import React, { FC, useState } from 'react'
import classes from './Persons.module.css'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../../Redux/reduxStore'
import { getPerson } from '../../../Redux/selector'
import TextInfo from '../../Fregments/TextInfo/TextInfo'
import Image from '../../Fregments/Image/Image'
import { NavLink } from 'react-router-dom'
import HR from '../../Fregments/Hr/Hr'
import FalsePhoto from '../../Fregments/FalsePhoto/FalsePhoto'

const Persons: FC<Props> = props => {
    const [title, setTitle] = useState('MEET OUR TEAM')
    const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui/Ux, print template.')
    const [personIndex, setPersonIndex] = useState(0)
    const personData = props.persons![personIndex]
    return (
        <div className={classes.container}>
            <div className={classes.information}>
                <TextInfo title={title} text={text} />
                <HR />
            </div>
            <div className={classes.personsContent}>
                <div className={classes.photo}>
                    {personData.photo
                        ? <div>
                            <Image src={personData.photo} alt={personData.name} />
                        </div>
                        : <div className={classes.falsePhoto}>
                            <FalsePhoto />
                        </div>
                    }
                </div>
                <div className={classes.personInformation_RestPersons}>
                    <div className={classes.personInformation}>
                        <div className={classes.personData}>
                            <TextInfo title={personData.name} text={personData.information} />
                        </div>
                        <div className={classes.sotialNetwork}>
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
                    <div className={classes.RestPersons}>
                        {props.persons!.map((elem, index) => {
                            if (index != personIndex) {
                                return (
                                    <div onClick={() => {setPersonIndex(index)}} >
                                        <div className={classes.personPhoto}>
                                            {elem.photo
                                                ?
                                                <div>
                                                    <Image src={elem.photo} alt={`${elem.name}`} />
                                                </div>
                                                : <div className={classes.falsePersonsPhoto}>
                                                    <FalsePhoto />
                                                </div>
                                            }
                                        </div>
                                        <div className={classes.personName}>
                                            {elem.name}
                                        </div>
                                    </div>
                                )
                            }
                        })

                        }
                    </div>
                </div>
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