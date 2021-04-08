import React from 'react';
import s from '../../App.module.css'
import bs from '../Components-Styles/SuperButton.module.css'
import SuperButton from "../SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {CounterStateType} from "../../Redux/store";
import {SimpleCounterType} from "../../Redux/Simple-counter-reducer/simple-counter-reducer";


const SimpleCounter = () => {

    const state = useSelector<CounterStateType, SimpleCounterType>((state) => state.simpleCounter)
    const dispatch = useDispatch()

    const incSimpleCount = () => {
        dispatch({type:"INCREMENT"})
    }
    const resetSimpleCount = () => {
        dispatch({type:"RESET"})
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