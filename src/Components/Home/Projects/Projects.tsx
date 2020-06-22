import React, { FC, useState } from 'react'
import classes from './Projects.module.css'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../../Redux/reduxStore'
import { getProjects, getIsGetProject } from '../../../Redux/selector'
import TextInfo from '../../Fregments/TextInfo/TextInfo'
import Image from '../../Fregments/Image/Image'
import { getProjects as getProjectsThunk, actions } from '../../../Redux/reducer'
import Preloader from '../../Fregments/Preloader/Preloader'

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

    const projectsFunction = (pageSize: number, title: string) => {
        props.getProjectsThunk(pageSize, title)
        props.updateisGetProject(false)
    }

    return (
        <div>
            <div>
                <TextInfo title={title} text={text} />
            </div>
            <div>
                {filters.map(elem => {
                    return (
                        <div onClick={() => projectsFunction(8, elem.content)}>
                            {elem.content}
                        </div>
                    )
                })

                }
            </div>
            {!props.isGetProject ?
                <div>
                    {props.project!.map(elem => {
                        return (
                            <div>
                                {
                                    elem.photo
                                        ?
                                        <div>
                                            <Image src={elem.photo} alt={`project ${elem.id}`} />
                                        </div>
                                        : <div></div>

                                }
                            </div>
                        )
                    })
                    }
                </div>
                : <div>
                    <Preloader img='' />
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        project: getProjects(state),
        isGetProject: getIsGetProject(state)
    }
}

const updateisGetProject = actions.updateisGetProject
const connector = connect(mapStateToProps, { getProjectsThunk, updateisGetProject })

export default connector(Project)

type Props = ConnectedProps<typeof connector>