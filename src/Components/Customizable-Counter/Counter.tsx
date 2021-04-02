import React from 'react';
import s from '../../App.module.css';
import SuperButton from "../SuperButton";


export type CounterType = {
    count: string | number
    maxCount: number
    errorMessage: string
    buttonIncDisable: boolean
    buttonResetDisable: boolean
    newCount: () => void
    resetCounter: () => void
}


const Counter: React.FC<CounterType> = (
    {
        buttonIncDisable,  buttonResetDisable,
        count, maxCount,
        errorMessage,
        newCount, resetCounter
    }) => {

    let finalCounterStyles = count === errorMessage ||  count === maxCount ?
        `${ s.red } ${ s.counter }`:
        `${ s.normal } ${ s.counter }`

    return (
        <div>
            <div className={ s.wrapper }>
                <div className={finalCounterStyles}>
                    { count }
                </div>
                <div className={ s.buttons }>
                    <SuperButton onClick={ newCount } disabled={buttonIncDisable}>
                        inc
                    </SuperButton>
                    <SuperButton onClick={ resetCounter }  disabled={ buttonResetDisable}>
                        reset
                    </SuperButton>
                </div>
            </div>
        </div>
    )
}

export default Counter;