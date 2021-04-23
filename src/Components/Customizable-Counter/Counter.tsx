import React, {MouseEvent, useCallback} from 'react';
import s from '../../App.module.css';
import SuperButton from "../SuperButton";

type CounterPropsType = {
    content: string | number
    buttonIncDisable: boolean
    buttonResetDisable: boolean
    finalContentStyles: string
    buttonIncHandler: () => void
    buttonResetHandler: () => void
}

const Counter: React.FC<CounterPropsType> = React.memo((props) => {
    console.log('Counter')
    const {
        content,
        buttonIncDisable,
        buttonResetDisable,
        finalContentStyles,
        buttonIncHandler,
        buttonResetHandler
    } = props

    // События кликов инкремента и сброса счётчика
    const buttonOnClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.dataset.button) {
            let trigger: string = e.currentTarget.dataset.button
            if (trigger === "inc") {
                buttonIncHandler()
            }
            if (trigger === "res") {
                buttonResetHandler()
            }
        }
    }, [content])

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
})

export default Counter;