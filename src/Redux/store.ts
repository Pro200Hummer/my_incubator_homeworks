import {combineReducers, createStore} from "redux";
import {simpleCounterReducer} from "./Simple-counter-reducer/simple-counter-reducer";



let reducers = combineReducers({
    simpleCounter: simpleCounterReducer
})



export let store = createStore(reducers)



export type AppStoreType = typeof store;
export type CounterStateType = ReturnType<typeof reducers>