import { InfinitActionsCreatorType, BaseThunkType } from "../Types/Types"
import { API, ResultCodeEnum } from "../API/api"
import { Dispatch } from "react"

const initialState = {
    video: null as string | null,
    projects: null as Array<projectType> | null,
    person: null as Array<personType> | null,
    isFetching: false,
    isMessage: false,
    isSubscribe: false
}

const rootReducer = (state = initialState, actions: actionsType) => {
    switch (actions.type) {

        case 'ADD_VIDEO':
            return {
                ...state,
                video: actions.video
            }

        case 'ADD_PROJECT':
            return {
                ...state,
                project:  actions.projects
            }

        case 'ADD_PERSOM':
            return {
                ...state,
                person: actions.person
            }

        case 'UP_DATE_IS_FETCHING':
            return {
                ...state,
                isFetching: actions.isFetching
            }

        case 'UP_DATE_IS_MESSAGE':
            return {
                ...state,
                isMessage: actions.isMessage
            }

        case 'UP_DATE_IS_SUBSCRIBE':
            return {
                ...state,
                isSubscribe: actions.isSubscribe
            }

        default:
            return state
    }
}

const actions = {
    addVideo: (video: string) => ({ type: 'ADD_VIDEO', video } as const),
    addProjects: (projects: Array<projectType>) => ({ type: 'ADD_PROJECT', projects } as const),
    addPerson: (person: Array<personType>) => ({ type: 'ADD_PERSOM', person } as const),
    updateIsFetchin: (isFetching: boolean) => ({ type: 'UP_DATE_IS_FETCHING', isFetching } as const),
    updateisMessage: (isMessage: boolean) => ({ type: 'UP_DATE_IS_MESSAGE', isMessage } as const),
    updateIsSubscribe: (isSubscribe: boolean) => ({ type: 'UP_DATE_IS_SUBSCRIBE', isSubscribe } as const)
}

const createThunk = async (dispatch: dispatch, APIparam: any, APIMethod: (APIparam: any) => any, ActionsCreator: (actionParam: any) => actionsType) => {
    const responce = await APIMethod(APIparam)

    if (responce.data.resultCode === ResultCodeEnum.Succes) {
        dispatch(ActionsCreator(responce.data.data))
    } else {
        alert(responce.data.message)
    }
}

const getVideo = (): thunkType => async (dispatch) => {
    createThunk(dispatch, null, API.getVideo.bind(API), actions.addVideo)
}

const getProjects = (): thunkType => async (dispatch) => {
    createThunk(dispatch, null, API.getProject.bind(API), actions.addProjects)
}

const getPersons = (): thunkType => async (dispatch) => {
    createThunk(dispatch, null, API.getPerson.bind(API), actions.addPerson)
}

const postMessage = (messageContent: messageContentType): thunkType => async (dispatch) => {
    createThunk(dispatch, messageContent, API.postMessage.bind(API), actions.updateisMessage)
}

const postSubscribe = (subscribeContent: string): thunkType => async (dispatch) => {
    createThunk(dispatch, subscribeContent, API.postSubscribe.bind(API), actions.updateIsSubscribe)
}

export {
    actions,
    getVideo,
    getProjects,
    getPersons,
    postMessage,
    postSubscribe
}

export default rootReducer

type initialStateType = typeof initialState
type actionsType = InfinitActionsCreatorType<typeof actions>
type thunkType = BaseThunkType<actionsType>
type dispatch = Dispatch<actionsType>

export type messageContentType = {
    name: string
    email: string
    message: string
}

export type projectType = {
    id: string
    title: string
    photo: string
}

export type personType = {
    id: string
    name: string
    information: string
    photo: string
    contact: contactType
}

export type contactType = {
    facebook: string
    dribble: string
    behance: string
    twitter: string
}