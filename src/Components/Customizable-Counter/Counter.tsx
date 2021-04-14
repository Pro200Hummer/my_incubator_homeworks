import React, {MouseEvent} from 'react';
import s from '../../App.module.css';
import SuperButton from "../SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/store";
import {
    incrementCountAC, resetCounterAC
} from "../../Redux/Customizable-Counter-reducer/customizable-counter-reducer";

const Counter: React.FC = () => {

    let {
        count,
        maxCount,
        startCount,
        errorMessage,
        buttonIncDisable,
        buttonResetDisable
    } = useSelector((state: AppStateType) => state.customizableCounter)

    const dispatch = useDispatch()

    // События кликов инкремента и сброса счётчика
    const buttonOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.dataset.button) {
            let trigger: string = e.currentTarget.dataset.button
            if (trigger === "inc") {
                dispatch(incrementCountAC())
            }
            if (trigger === "res") {
                dispatch(resetCounterAC())
            }
        }
    }

    let content
    (maxCount <= 0 || startCount < 0) ? content = errorMessage : content = count

    //Проверка для дизейбла кнопки "inc"
    if(count === maxCount){
        buttonIncDisable = true
    }

    // Стилизация отображаемой области счётчика
    let finalContentStyles = maxCount <= 0 || startCount < 0 || count === maxCount ?
        `${ s.red } ${ s.counter }`:
        `${ s.normal } ${ s.counter }`


    return (
        <div>
            <div className={ s.wrapper }>
                <div className={ finalContentStyles }>
                    { content }
                </div>
                <div className={ s.buttons }>
                    <SuperButton
                        onClickHandler={ buttonOnClick }
                        disable={ buttonIncDisable }
                        data-button="inc"
                    >
                        inc
                    </SuperButton>
                    <SuperButton
                        onClickHandler={ buttonOnClick }
                        disable={ buttonResetDisable }
                        data-button="res"
                    >
                        reset
                    </SuperButton>
                </div>
            </div>
        </div>
    )
}

export default Counter;