import {API,ResultCodeEnum} from '../API/api' 
import { getVideo, actions,getProjects } from './reducer'

jest.mock('../API/api')
const dispatchMock=jest.fn()
const getStateMock=jest.fn()
const APIMock=API as jest.Mocked<typeof API>

beforeEach(()=>{
    dispatchMock.mockClear()
    getStateMock.mockClear()
    APIMock.getVideo.mockClear()
})

const data={
    getVideo:{
        data:'url',
        massages:[],
        resultCode:0
    }
}

APIMock.getVideo.mockReturnValue(Promise.resolve(data.getVideo))

test('get video',async()=>{
    let thunk=getVideo()

    await thunk(dispatchMock,getStateMock,{})

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1,actions.addVideo(data.getVideo.data))
})

test('get projects',async()=>{
    let thunk=getProjects()
    await thunk(dispatchMock,getStateMock,{})
    expect(dispatchMock).toBeCalledTimes(2)
    expect(dispatchMock).toHaveBeenNthCalledWith(1,actions.addProjects)
    expect(dispatchMock).toHaveBeenNthCalledWith(2,actions.updateisGetProject)
})

