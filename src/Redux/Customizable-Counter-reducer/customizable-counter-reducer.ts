import {Dispatch} from "redux";

export enum ACTIONS_TYPE {
    INCREMENT_COUNT_TYPE = "INCREMENT_COUNT_TYPE",
    MAX_COUNT_CHANGER = "MAX_COUNT_CHANGER",
    START_COUNT_CHANGER = "START_COUNT_CHANGER",
    RESET_COUNT_CHANGER = "RESET_COUNT_CHANGER",
    BUTTON_SET_CLICK = "BUTTON_SET_CLICK",
    SET_COUNTER_VALUES = "SET_COUNTER_VALUES",
}

export type CustomizableCounterStateType = {
    startCount: number
    count: number | string
    maxCount: number
    buttonSetDisable: boolean
    buttonIncDisable: boolean
    buttonResetDisable: boolean
    errorMessage: string
    infoMessage: string
}

export type ActionType = IncrementCountActionType
    | MaxCountActionType
    | StartCountActionType
    | ResetCounterActionType
    | ButtonSetClick
    | SetCounterValues

const initialState: CustomizableCounterStateType = {
    startCount: 0,
    count: 0,
    maxCount: 0,
    buttonIncDisable: false,
    buttonResetDisable: false,
    buttonSetDisable: true,
    errorMessage: "Incorrect value",
    infoMessage: "Enter values and press set"
}

export const customizableCounterReducer = (state = initialState, action: ActionType): CustomizableCounterStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_COUNTER_VALUES:
            state.maxCount = action.maxCountStartValue
            state.startCount = action.startCountStartValue
            state.count = action.startCountStartValue
            return {...state}
        case ACTIONS_TYPE.MAX_COUNT_CHANGER:
        case ACTIONS_TYPE.START_COUNT_CHANGER:
            state.buttonSetDisable = false
            state.buttonIncDisable = true
            state.buttonResetDisable = true
            state.count = state.infoMessage
            if (action.payload.trigger === "maxCountTrigger") {
                state.maxCount = action.countValue
                return {...state}
            }
            if (action.payload.trigger === "startCountTrigger") {
                state.startCount = action.countValue
                return {...state}
            }
            return {...state}
        case ACTIONS_TYPE.INCREMENT_COUNT_TYPE:
            if (typeof state.count === "number") {
                state.count !== state.maxCount ? state.count++ : state.count
            }
            return {...state}
        case ACTIONS_TYPE.RESET_COUNT_CHANGER:
            state.count = state.startCount
            return {...state}
        case ACTIONS_TYPE.BUTTON_SET_CLICK:
            state.count = state.startCount
            state.buttonIncDisable = false
            state.buttonResetDisable = false
            state.buttonSetDisable = true
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

// Thunk for get state from localStorage
export const getSettingValuesTC = () => (dispatch:Dispatch) => {
    let getMaxCountValue = localStorage.getItem("maxCount")
    let getStartCountValue = localStorage.getItem("startCount")
    if (getMaxCountValue && getStartCountValue) {
        dispatch(setCounterValuesAC(JSON.parse(getMaxCountValue), JSON.parse(getStartCountValue)))
    }
}
