import { Action } from "redux"
import { ThunkAction } from "redux-thunk"
import { AppStateType } from "../Redux/reduxStore"

export type InfinitActionsCreatorType<T>=T extends {[key:string]:(...args:any[])=>infer U}?U:never
 
export type BaseThunkType<A extends Action ,R=void>=ThunkAction<R,AppStateType,unknown,A>