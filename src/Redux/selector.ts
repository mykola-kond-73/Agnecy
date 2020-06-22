import { AppStateType } from './reduxStore'

const getVideo = (state: AppStateType) => {
    return state.rootReducer.video
}

const getProjects = (state: AppStateType) => {
    return state.rootReducer.projects
}

const getPerson = (state: AppStateType) => {
    return state.rootReducer.person
}

const getIsFetching = (state: AppStateType) => {
    return state.rootReducer.isFetching
}

const getIsGoodMessage = (state: AppStateType) => {
    return state.rootReducer.isGoodMessage
}

const getIsGoodSubscribe = (state: AppStateType) => {
    return state.rootReducer.isGoodSubscribe
}

const getIsGetProject = (state: AppStateType) => {
    return state.rootReducer.isGetProject
}

export {
    getVideo,
    getProjects,
    getPerson,
    getIsFetching,
    getIsGoodMessage,
    getIsGoodSubscribe,
    getIsGetProject,
}