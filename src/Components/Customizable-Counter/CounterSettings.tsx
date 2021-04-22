import React, {useCallback, useEffect} from 'react';
import s from '../../App.module.css';
import bs from '../../App.module.css'
import SuperNumberInput from "../SuperNumberInput";
import SuperButton from "../SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/store";
import {
    buttonSetAC, changeContentMessageAC,
    maxCountChangerAC,  startCountChangerAC, getSettingValuesTC,setSettingValuesTC
} from "../../Redux/Customizable-Counter-reducer/customizable-counter-reducer";

const CounterSettings: React.FC = React.memo(() => {
    console.log('Counter Settings')
    /*let {
        startCount,
        maxCount,
        buttonSetDisable,
    } = useSelector((state: AppStateType) => state.customizableCounter)*/

    const startCount = useSelector((state: AppStateType) => state.customizableCounter.startCount)
    const maxCount = useSelector((state: AppStateType) => state.customizableCounter.maxCount)
    let buttonSetDisable = useSelector((state: AppStateType) => state.customizableCounter.buttonSetDisable)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSettingValuesTC())
    }, [])

    // Callback for input onChange
    const inputValueHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        if (e.currentTarget.dataset.count) {
            let trigger: string = e.currentTarget.dataset.count
            if (trigger === "max") {
                dispatch(maxCountChangerAC(value))
                dispatch(changeContentMessageAC())
            }
            if (trigger === "start") {
                dispatch(startCountChangerAC(value))
                dispatch(changeContentMessageAC())
            }
        }
    }, [maxCount, startCount])

    // Callback for "set" button onClick
    const buttonOnClick = useCallback(() => {
        dispatch(buttonSetAC())
        dispatch(setSettingValuesTC())
    }, [maxCount, startCount])

    // Disable for "set" button
    if (maxCount < 0 || startCount < 0 || maxCount < startCount) {
        buttonSetDisable = true
    }

    return (
        <div className={ s.wrapper }>
            <div className={ s.settings }>
                <div>
                    <h3>max value:</h3>
                    <SuperNumberInput
                        inputValueHandler={ inputValueHandler }
                        inputValue={ maxCount }
                        data-count="max"
                    />
                </div>
                <div>
                    <h3>start value:</h3>
                    <SuperNumberInput
                        inputValueHandler={ inputValueHandler }
                        inputValue={ startCount }
                        data-count="start"
                    />
                </div>
            </div>
            <div className={ bs.buttons }>
                <SuperButton
                    onClickHandler={ buttonOnClick }
                    disable={ buttonSetDisable }
                >
                    set
                </SuperButton>
            </div>
        </div>
    )
})

export default CounterSettings

