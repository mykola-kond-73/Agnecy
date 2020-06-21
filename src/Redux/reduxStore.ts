import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import rootReducer from './reducer'

export type AppStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    rootReducer: rootReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store