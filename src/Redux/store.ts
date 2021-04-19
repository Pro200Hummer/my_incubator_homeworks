import {applyMiddleware, combineReducers, createStore} from "redux";
import {simpleCounterReducer} from "./Simple-counter-reducer/simple-counter-reducer";
import {customizableCounterReducer} from "./Customizable-Counter-reducer/customizable-counter-reducer";
import thunk from "redux-thunk";




let reducers = combineReducers({
    simpleCounter: simpleCounterReducer,
    customizableCounter: customizableCounterReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

/*
store.subscribe(() => {
    localStorage.setItem("startCount", JSON.stringify(store.getState().customizableCounter.startCount))
    localStorage.setItem("maxCount", JSON.stringify(store.getState().customizableCounter.maxCount))
})
*/

export type CounterStateType = ReturnType<typeof reducers>
export interface AppStateType extends CounterStateType{}