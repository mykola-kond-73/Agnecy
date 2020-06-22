import React, { FC, useEffect } from 'react'
import classes from './HomeContainer.module.css'
import Head from './Head/Head'
import Servises from './Servises/Servises'
import Projects from './Projects/Projects'
import Persons from './Persons/Persons'
import Subscribe from './Subscribe/Subscribe'
import Contact from './Contact/Contact'
import { connect, ConnectedProps } from 'react-redux'
import { getVideo, getProjects, getPersons, actions } from './../../Redux/reducer'

const Home: FC<Props> = props => {
    useEffect(() => {
        const promise = Promise.all(
            [props.getPersons(),
            props.getProjects(),
            props.getVideo()
            ]).then(() => {
                props.updateIsFetchin(true)
            })
    },[])

    return (
        <div>
            <div>
                <Head />
            </div>
            <div>
                <Servises />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Persons />
            </div>
            <div>
                <Subscribe />
            </div>
            <div>
                <Contact />
            </div>
        </div>
    )
}

const updateIsFetchin = actions.updateIsFetchin

const connector = connect(null, { getVideo, getProjects, getPersons, updateIsFetchin })

export default connector(Home)

type Props = ConnectedProps<typeof connector>