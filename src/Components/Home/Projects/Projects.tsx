import React, { FC, useState } from 'react'
import classes from './Projects.module.css'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../../Redux/reduxStore'
import { getProjects } from '../../../Redux/selector'
import TextInfo from '../../Fregments/TextInfo/TextInfo'
import Image from '../../Fregments/Image/Image'

const Project: FC<Props> = props => {
    const [title, setTitle] = useState('FEATURE PRODUCTS')
    const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eius-mod tempor incididunt ut labore et.')
    const [filters, setFilters] = useState([
        { content: 'ALL' },
        { content: 'PRINT TEMPLATE' },
        { content: 'WEB TEMPLATE' },
        { content: 'USER INTERFACE' },
        { content: 'MOCK-UP' },
    ])
    return (
        <div>
            <div>
                <TextInfo title={title} text={text} />
            </div>
            <div>
                {filters.map(elem => {
                    return (
                        <div>
                            {elem.content}
                        </div>
                    )
                })

                }
            </div>
            <div>
                {props.project!.map(elem => {
                    {
                        elem.photo
                            ?
                            <div>
                                <Image src={elem.photo} alt={`project ${elem.id}`} />
                            </div>
                            : <div></div>

                    }
                })
                }
            </div>
        </div>
    )
}


const mapStateToProps = (state: AppStateType) => {
    return {
        project: getProjects(state)
    }
}

const connector = connect(mapStateToProps, {})

export default connector(Project)

type Props = ConnectedProps<typeof connector>