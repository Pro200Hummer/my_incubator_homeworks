import React, {useReducer} from 'react';
import s from '../../App.module.css';
import bs from '../Components-Styles/SuperButton.module.css'
import SuperButton from "../SuperButton";

type InitialStateType = {
    simpleCount: number
    simpleIncDisable: boolean
    simpleResetDisable: boolean
}
type ActionType = {
    type: string
}

const initialState: InitialStateType = {
    simpleCount: 0,
    simpleIncDisable: false,
    simpleResetDisable: true
}

function reducer(state: InitialStateType, action:ActionType) {
    debugger
    switch (action.type){
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

const SimpleCounter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    /*let [simpleCount, setSimpleCount] = useState<number>(0)
    let [simpleResetDisable, setSimpleResetDisable] = useState<boolean>(true)
    let [simpleIncDisable, setSimpleIncDisable] = useState<boolean>(false)*/

    const incSimpleCount = () => {
        dispatch({type:"INCREMENT"})
        /*simpleCount < 5 ? simpleCount++ : simpleCount
        setSimpleResetDisable(false)
        setSimpleCount(simpleCount)
        if (simpleCount === 5) {
            setSimpleIncDisable(true)
        }*/
    }
    const resetSimpleCount = () => {
        dispatch({type:"RESET"})
        /*setSimpleCount(0)
        setSimpleResetDisable(true)
        setSimpleIncDisable(false)*/
    }

    let finalSimpleCounterStyles = state.simpleCount === 5 ? `${ s.red } ${ s.counter }` : `${ s.counter } ${ s.normal }`

    return (
        <div>
            <div className={ s.wrapper }>
                <div className={ finalSimpleCounterStyles }>
                    { state.simpleCount }
                </div>
                <div className={ bs.buttons }>
                    <SuperButton onClick={ incSimpleCount } disabled={state.simpleIncDisable}>
                        inc
                    </SuperButton>
                    <SuperButton onClick={ resetSimpleCount } disabled={ state.simpleResetDisable }>
                        reset
                    </SuperButton>
                </div>
            </div>
        </div>
    )
}

export default SimpleCounter;