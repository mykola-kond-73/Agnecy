import axios from 'axios'
import { projectType, personType, messageContentType } from '../Redux/reducer'

const instance = axios.create({
    baseURL: '',
    headers: {}
})

const API = {
    getVideo() {
        return instance.get<ResponceType<string>>('').then(responce => responce.data)
    },

    getProject() {
        return instance.get<ResponceType<Array<projectType>>>('').then(responce => responce.data)
    },

    getPerson() {
        return instance.get<ResponceType<Array<personType>>>('').then(responce => responce.data)
    },

    postMessage(messaageContent: messageContentType) {
        return instance.post<ResponceType>('', messaageContent).then(responce => responce.data)
    },

    postSubscribe(subscribeContent: string) {
        return instance.post<ResponceType>('', { subscribe: subscribeContent }).then(responce => responce.data)
    }
}

export {
    API,
    ResultCodeEnum
}

enum ResultCodeEnum {
    Succes = 0,
    Error = 1
}

type ResponceType<D = {}, RC = ResultCodeEnum> = {
    data: D
    massages: Array<string>
    resultCode: RC
}