import React, {MouseEvent} from 'react';
import s from '../../App.module.css'
import bs from '../../App.module.css'
import SuperButton from "../SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/store";
import {
    incrementActionCreator,
    resetActionCreator,
} from "../../Redux/Simple-counter-reducer/simple-counter-reducer";



const SimpleCounter = () => {

    const {
        simpleCount,
        simpleIncDisable,
        simpleResetDisable
    } = useSelector((state:AppStateType) => state.simpleCounter)

    const dispatch = useDispatch()

    const buttonOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        if(e.currentTarget.dataset.button) {
            let trigger: string = e.currentTarget.dataset.button
            if (trigger === "simpInc") {
                dispatch(incrementActionCreator())
            }
            if(trigger === "simpRes"){
                dispatch(resetActionCreator())
            }
        }
    }

    let finalSimpleCounterStyles = simpleCount === 5 ? `${ s.red } ${ s.counter }` : `${ s.counter } ${ s.normal }`

    return (
        <div>
            <div className={ s.wrapper }>
                <div className={ finalSimpleCounterStyles }>
                    { simpleCount }
                </div>
                <div className={ bs.buttons }>
                    <SuperButton onClickHandler={ buttonOnClick } disable={simpleIncDisable} data-button="simpInc">
                        Inc
                    </SuperButton>
                    <SuperButton onClickHandler={ buttonOnClick } disable={ simpleResetDisable } data-button="simpRes">
                        Reset
                    </SuperButton>
                </div>
            </div>
        </div>
    )
}

export default SimpleCounter;