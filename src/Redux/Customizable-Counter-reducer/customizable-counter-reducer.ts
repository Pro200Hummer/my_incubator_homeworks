import {Dispatch} from "redux";

export enum ACTIONS_TYPE {
    INCREMENT_COUNT_TYPE = "INCREMENT_COUNT_TYPE",
    MAX_COUNT_CHANGER = "MAX_COUNT_CHANGER",
    START_COUNT_CHANGER = "START_COUNT_CHANGER",
    RESET_COUNT_CHANGER = "RESET_COUNT_CHANGER",
    BUTTON_SET_CLICK = "BUTTON_SET_CLICK",
    SET_COUNTER_VALUES = "SET_COUNTER_VALUES",
    CHANGE_CONTENT_MESSAGE = "CHANGE_CONTENT_MESSAGE"
}

export type CustomizableCounterStateType = {
    content: number | string
    startCount: number
    maxCount: number
    buttonSetDisable: boolean
    buttonIncDisable: boolean
    buttonResetDisable: boolean
}

export type ActionType = IncrementCountActionType
    | MaxCountActionType
    | StartCountActionType
    | ResetCounterActionType
    | ButtonSetClick
    | SetCounterValues
    | ChangeContentMessageType

const initialState: CustomizableCounterStateType = {
    content: "Enter a correct values and press set",
    startCount: 0,
    maxCount: 0,
    buttonIncDisable: false,
    buttonResetDisable: false,
    buttonSetDisable: true,
}

export const customizableCounterReducer = (state = initialState, action: ActionType): CustomizableCounterStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_COUNTER_VALUES:
            state.maxCount = action.maxCountStartValue
            state.startCount = action.startCountStartValue
            state.content = action.startCountStartValue
            return {...state}
        case ACTIONS_TYPE.MAX_COUNT_CHANGER:
        case ACTIONS_TYPE.START_COUNT_CHANGER:
            state.buttonIncDisable = true
            state.buttonResetDisable = true
            state.buttonSetDisable = false
            if (action.payload.trigger === "maxCountTrigger") {
                state.maxCount = action.countValue
                return {...state}
            }
            if (action.payload.trigger === "startCountTrigger") {
                state.startCount = action.countValue
                return {...state}
            }
            return {...state}
        case ACTIONS_TYPE.CHANGE_CONTENT_MESSAGE:
            if(state.maxCount > 0 || state.startCount > 0 || state.startCount === state.maxCount){
                if(state.maxCount < state.startCount){
                    state.content = "The max count value must be greater than the start count value"
                }else{
                    state.content = "Enter correct values and press set"
                }
            }
            if(state.maxCount < 0 || state.startCount < 0){
                state.content = "Incorrect value"
            }
            return {...state}
        case ACTIONS_TYPE.INCREMENT_COUNT_TYPE:
            if (typeof state.content === "number") {
                state.content !== state.maxCount ? state.content++ : state.content
            }
            return {...state}
        case ACTIONS_TYPE.RESET_COUNT_CHANGER:
            if (typeof state.content === "string") {
                state.content
            }else{
                state.content = state.startCount
            }
            return {...state}
        case ACTIONS_TYPE.BUTTON_SET_CLICK:
            state.content = state.startCount
            state.buttonIncDisable = false
            state.buttonResetDisable = false
            state.buttonSetDisable = true
            if(state.maxCount === state.startCount){
                state.content = "The max count cannot be equal start count. Please enter a correct values"
                state.buttonIncDisable = true
                state.buttonResetDisable = true
            }
            return {...state}
        default:
            return state
    }
}

//Action Type and Action Creator for max counter changer
export type MaxCountActionType = {
    type: ACTIONS_TYPE.MAX_COUNT_CHANGER
    countValue: number
    payload: { trigger: string }
}
export const maxCountChangerAC = (countValue: number): MaxCountActionType => {
    return {
        type: ACTIONS_TYPE.MAX_COUNT_CHANGER,
        countValue,
        payload: {trigger: "maxCountTrigger"}
    }
}

//Action Type and Action Creator for start counter changer
export type StartCountActionType = {
    type: ACTIONS_TYPE.START_COUNT_CHANGER
    countValue: number
    payload: { trigger: string }
}
export const startCountChangerAC = (countValue: number): StartCountActionType => {
    return {
        type: ACTIONS_TYPE.START_COUNT_CHANGER,
        countValue,
        payload: {trigger: "startCountTrigger"}
    }
}

//Action Type and Action Creator for reset counter
export type ResetCounterActionType = {
    type: ACTIONS_TYPE.RESET_COUNT_CHANGER
}
export const resetCounterAC = (): ResetCounterActionType => {
    return {
        type: ACTIONS_TYPE.RESET_COUNT_CHANGER
    }
}

//Action Type and Action Creator for increment counter
export type IncrementCountActionType = {
    type: ACTIONS_TYPE.INCREMENT_COUNT_TYPE
}
export const incrementCountAC = (): IncrementCountActionType => {
    return {
        type: ACTIONS_TYPE.INCREMENT_COUNT_TYPE
    }
}

// Action Type and Action Creator for button set click
export type ButtonSetClick = {
    type: ACTIONS_TYPE.BUTTON_SET_CLICK
}
export const buttonSetAC = (): ButtonSetClick => {
    return {
        type: ACTIONS_TYPE.BUTTON_SET_CLICK
    }
}

//Action Type and Action Creator for set max and start count from localStorage
export type SetCounterValues = {
    type: ACTIONS_TYPE.SET_COUNTER_VALUES
    maxCountStartValue: number
    startCountStartValue: number
}
export const setCounterValuesAC = (maxCountStartValue: number, startCountStartValue: number): SetCounterValues => {
    return {
        type: ACTIONS_TYPE.SET_COUNTER_VALUES,
        maxCountStartValue,
        startCountStartValue
    }
}

// Action type and Action for change content message
export type ChangeContentMessageType = {
    type:ACTIONS_TYPE.CHANGE_CONTENT_MESSAGE
}
export const changeContentMessageAC = ():ChangeContentMessageType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CONTENT_MESSAGE
    }
}

// Thunk for get state from localStorage
export const getSettingValuesTC = () => (dispatch: Dispatch) => {
    let getMaxCountValue = localStorage.getItem("maxCount")
    let getStartCountValue = localStorage.getItem("startCount")
    if (getMaxCountValue && getStartCountValue) {
        dispatch(setCounterValuesAC(JSON.parse(getMaxCountValue), JSON.parse(getStartCountValue)))
    }
}
/*export const setSettingValuesTC = () => (dispatch: Dispatch) => {
    let getMaxCountValue = localStorage.getItem("maxCount")
    let getStartCountValue = localStorage.getItem("startCount")
    if (getMaxCountValue && getStartCountValue) {
        dispatch(setCounterValuesAC(JSON.parse(getMaxCountValue), JSON.parse(getStartCountValue)))
    }
}*/
