import {AppStateType} from './reduxStore'

const getVideo=(state:AppStateType)=>{
    return state.rootReducer.video
}

const getProjects=(state:AppStateType)=>{
    return state.rootReducer.projects
}

const getPerson=(state:AppStateType)=>{
    return state.rootReducer.person
}

const getIsFetching=(state:AppStateType)=>{
    return state.rootReducer.isFetching
}

const getIsMessage=(state:AppStateType)=>{
    return state.rootReducer.isMessage
}

const getIsSubscribe=(state:AppStateType)=>{
    return state.rootReducer.isSubscribe
}

export{
    getVideo,
getProjects,
getPerson,
getIsFetching,
getIsMessage,
getIsSubscribe
}