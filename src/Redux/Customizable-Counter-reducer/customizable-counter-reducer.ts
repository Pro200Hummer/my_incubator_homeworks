export enum ACTIONS_TYPE {
    INCREMENT_COUNT_TYPE = "INCREMENT_COUNT_TYPE",
    MAX_COUNT_CHANGER = "MAX_COUNT_CHANGER",
    START_COUNT_CHANGER = "START_COUNT_CHANGER",
    RESET_COUNT_CHANGER = "RESET_COUNT_CHANGER"
}

export type CounterStateType = {
    startCount: number
    count: number
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

const initialState: CounterStateType = {
    startCount: 0,
    count: 0,
    maxCount: 0,
    buttonIncDisable: false,
    buttonResetDisable: false,
    buttonSetDisable: true,
    errorMessage: "Incorrect value",
    infoMessage: "Enter values and press set"
}

export const customizableCounterReducer = (state = initialState, action: ActionType): CounterStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.MAX_COUNT_CHANGER:
            state.maxCount = action.countValue
            return {...state}
        case ACTIONS_TYPE.START_COUNT_CHANGER:
            state.startCount = action.countValue
            return {...state}
        case ACTIONS_TYPE.INCREMENT_COUNT_TYPE:
            state.count !== state.maxCount ? state.count++ : state.count
            return {...state}
        case ACTIONS_TYPE.RESET_COUNT_CHANGER:

            return {...state}
        default:
            return state
    }
}

//Action Type and Action Creator for max counter changer
export type MaxCountActionType = {
    type: ACTIONS_TYPE.MAX_COUNT_CHANGER
    countValue: number
}
export const maxCountChangerAC = (countValue: number): MaxCountActionType => {
    return {
        type: ACTIONS_TYPE.MAX_COUNT_CHANGER,
        countValue
    }
}
//Action Type and Action Creator for start counter changer
export type StartCountActionType = {
    type: ACTIONS_TYPE.START_COUNT_CHANGER
    countValue: number
}
export const startCountChangerAC = (countValue: number): StartCountActionType => {
    return {
        type: ACTIONS_TYPE.START_COUNT_CHANGER,
        countValue
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