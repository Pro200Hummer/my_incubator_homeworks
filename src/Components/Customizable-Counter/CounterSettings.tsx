import React, {useCallback, useEffect} from 'react';
import s from '../../App.module.css';
import bs from '../../App.module.css'
import SuperNumberInput from "../SuperNumberInput";
import SuperButton from "../SuperButton";
import {useDispatch} from "react-redux";
import {
    changeContentMessageAC,
     getSettingValuesTC,setSettingValuesTC
} from "../../Redux/Customizable-Counter-reducer/customizable-counter-reducer";

type CounterSettingsPropsType = {
    startCount: number
    maxCount: number
    buttonSetDisable: boolean
    buttonSetHandler: () => void
    changeMaxCountHandler: (maxCountValue: number) => void
    changeStartCountHandler: (startCountValue: number) => void
}

const CounterSettings: React.FC<CounterSettingsPropsType> = React.memo((props) => {
    console.log('Counter Settings')
    const {
        startCount,
        maxCount,
        buttonSetDisable,
        buttonSetHandler,
        changeMaxCountHandler,
        changeStartCountHandler
    } = props

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
                changeMaxCountHandler(value)
                dispatch(changeContentMessageAC())
            }
            if (trigger === "start") {
                changeStartCountHandler(value)
                dispatch(changeContentMessageAC())
            }
        }
    }, [maxCount, startCount])

    // Callback for "set" button onClick
    const buttonOnClick = useCallback(() => {
        buttonSetHandler()
        dispatch(setSettingValuesTC())
    }, [maxCount, startCount])

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

