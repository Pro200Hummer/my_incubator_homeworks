export type SimpleCounterType = {
    simpleCount: number
    simpleIncDisable: boolean
    simpleResetDisable: boolean
}
export type IncrementActionCreatorType = {
    type: "INCREMENT"
}
export type ResetActionCreatorType = {
    type: "RESET"
}
type ActionType = IncrementActionCreatorType | ResetActionCreatorType

const initialState: SimpleCounterType = {
    simpleCount: 0,
    simpleIncDisable: false,
    simpleResetDisable: true
}

export function simpleCounterReducer(state: SimpleCounterType = initialState, action: ActionType): SimpleCounterType {
    switch (action.type) {
        case("INCREMENT"):
            state.simpleCount < 5 ? (state.simpleCount += 1) : state.simpleCount
            state.simpleResetDisable = false
            if (state.simpleCount === 5) {
                state.simpleIncDisable = true
            }
            return {...state}
        case("RESET"):
            state.simpleCount = 0
            state.simpleResetDisable = true
            state.simpleIncDisable = false
            return {...state}
        default:
            return state
    }
}

export const incrementActionCreator = (): IncrementActionCreatorType => {
    return {type: "INCREMENT"}
}
export const resetActionCreator = (): ResetActionCreatorType => {
    return {type: "RESET"}
}