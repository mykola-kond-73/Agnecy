import React, { FC, useEffect } from 'react'
import classes from './Home.module.css'
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
        Promise.all(
            [
                props.getPersons(),
                props.getProjects(),
                props.getVideo()
            ]).then(() => {
                props.updateIsFetchin(true)
            })
    }, [])

    return (
        <div className={classes.container}>
            <div className={`${classes.homeHead} ${classes.items}`}>
                <Head />
            </div>
            <div className={classes.items}>
                <Servises />
            </div>
            <div className={classes.items}>
                <Projects />
            </div>
            <div className={classes.items}>
                <Persons />
            </div>
            <div className={classes.items}>
                <Subscribe />
            </div>
            <div className={classes.items}>
                <Contact />
            </div>
        </div>
    )
}

const updateIsFetchin = actions.updateIsFetchin

const connector = connect(null, { getVideo, getProjects, getPersons, updateIsFetchin })

export default connector(Home)

type Props = ConnectedProps<typeof connector>