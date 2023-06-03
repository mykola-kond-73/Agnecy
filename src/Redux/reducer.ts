import { InfinitActionsCreatorType, BaseThunkType } from "../Types/Types"
import { API, ResultCodeEnum } from "../API/api"
import { Dispatch } from "react"

const initialState = {
    video: null as string | null,
    // projects: null as Array<projectType> | null,
    // person: null as Array<personType> | null,
    projects: [
        {
            id: '1',
            title: '',
            photo: ''
        },
        {
            id: '2',
            title: '',
            photo: ''
        },
        {
            id: '3',
            title: '',
            photo: ''
        },
        {
            id: '4',
            title: '',
            photo: ''
        },
        {
            id: '5',
            title: '',
            photo: ''
        },
        {
            id: '6',
            title: '',
            photo: ''
        },
        {
            id: '7',
            title: '',
            photo: ''
        },
        {
            id: '8',
            title: '',
            photo: ''
        },
    ],
    person: [
        {
        id: '1',
        name: 'MARK WAUGH',
        information: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui/Ux, print template.',
        photo: '',
        contact: {
            facebook: '',
            dribble: '',
            behance: '',
            twitter: ''
        }
    },
    {
        id: '2',
        name: 'MARK JONSON',
        information: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui/Ux, print template.',
        photo: '',
        contact: {
            facebook: '',
            dribble: '',
            behance: '',
            twitter: ''
        }
    },
    {
        id: '3',
        name: 'BILL MUREY',
        information: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui/Ux, print template.',
        photo: '',
        contact: {
            facebook: '',
            dribble: '',
            behance: '',
            twitter: ''
        }
    },
    {
        id: '4',
        name: 'ALLIS WOTSON',
        information: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui/Ux, print template.',
        photo: '',
        contact: {
            facebook: '',
            dribble: '',
            behance: '',
            twitter: ''
        }
    },
    {
        id: '5',
        name: 'MARK TWEN',
        information: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui/Ux, print template.',
        photo: '',
        contact: {
            facebook: '',
            dribble: '',
            behance: '',
            twitter: ''
        }
    },
],
    isFetching: false,
    isGoodMessage: false,
    isGoodSubscribe: false,
    isGetProject: false,
}

export const rootReducer = (state = initialState, actions: actionsType) => {
    switch (actions.type) {

        case 'ADD_VIDEO':
            return {
                ...state,
                video: actions.video
            }

        case 'ADD_PROJECT':
            return {
                ...state,
                projects: actions.projects
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
                isGoodMessage: actions.isGoodMessage
            }

        case 'UP_DATE_IS_SUBSCRIBE':
            return {
                ...state,
                isGoodSubscribe: actions.isGoodSubscribe
            }

        case 'UP_DATE_IS_GET_PROJECT':
            return {
                ...state,
                isGetProject: actions.isGetProject
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
    updateIsGoodMessage: (isGoodMessage: boolean) => ({ type: 'UP_DATE_IS_MESSAGE', isGoodMessage } as const),
    updateIsGoodSubscribe: (isGoodSubscribe: boolean) => ({ type: 'UP_DATE_IS_SUBSCRIBE', isGoodSubscribe } as const),
    updateisGetProject: (isGetProject: boolean) => ({ type: 'UP_DATE_IS_GET_PROJECT', isGetProject } as const),
}

const createThunk = async (dispatch: dispatch, APIMethod: (APIparam: any) => any, ActionsCreator: (actionParam: any) => actionsType, APIparam?: any) => {
    const responce:ResponseType = await APIMethod(APIparam)

    if (responce.resultCode === ResultCodeEnum.Succes) {
        dispatch(ActionsCreator(responce.data))
    } else {
        // alert(responce.data?.message)
    }
}

const getVideo = (): thunkType => async (dispatch) => {
    createThunk(dispatch, API.getVideo, actions.addVideo)
}

const getProjects = (pageSize = 8, title = ''): thunkType => async (dispatch) => {
    // createThunk(dispatch, null, API.getProject.bind(API), actions.addProjects)
    const responce = await API.getProject(pageSize, title)
    if (responce.resultCode === ResultCodeEnum.Succes) {
        dispatch(actions.addProjects(responce.data))
        dispatch(actions.updateisGetProject(true))
    }
}

const getPersons = (): thunkType => async (dispatch) => {
    createThunk(dispatch, API.getPerson.bind(API), actions.addPerson)
}
//* >>>
//* >>>   там де "await" треба додати обробку помилок 
//* >>>
const postMessage = (messageContent: messageContentType): thunkType => async (dispatch) => {
    await createThunk(dispatch, API.postMessage.bind(API), actions.updateIsGoodMessage, messageContent)
    dispatch(actions.updateIsGoodMessage(false))
}

const postSubscribe = (subscribeContent: string): thunkType => async (dispatch) => {
    await createThunk(dispatch, API.postSubscribe.bind(API), actions.updateIsGoodSubscribe, subscribeContent)
    dispatch(actions.updateIsGoodSubscribe(false))
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

export type initialStateType = typeof initialState
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

type ResponseType={
    resultCode?:number
    data?:{
        message?:string
    }
}