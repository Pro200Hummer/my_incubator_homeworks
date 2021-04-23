import React, {useCallback} from "react"
import CounterSettings from "./CounterSettings";
import Counter from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/store";
import {
    buttonSetAC,
    incrementCountAC, maxCountChangerAC,
    resetCounterAC, startCountChangerAC
} from "../../Redux/Customizable-Counter-reducer/customizable-counter-reducer";
import s from "../../App.module.css";

const CustomizableCounter: React.FC = React.memo(() => {
    console.log("CustomizableCounter")
    let {
        content,
        maxCount,
        startCount,
        buttonIncDisable,
        buttonResetDisable,
        buttonSetDisable
    } = useSelector((state: AppStateType) => state.customizableCounter)

    const dispatch = useDispatch()

    const buttonIncHandler = useCallback(() => {
        dispatch(incrementCountAC())
    }, [])
    const buttonResetHandler = useCallback(() => {
        dispatch(resetCounterAC())
    }, [])
    const buttonSetHandler = useCallback(() => {
        dispatch(buttonSetAC())
    }, [])

    const changeMaxCountHandler = useCallback((maxCountValue: number) => {
        dispatch(maxCountChangerAC(maxCountValue))
    }, [maxCount])
    const changeStartCountHandler = useCallback((startCountValue: number) => {
        dispatch(startCountChangerAC(startCountValue))
    }, [startCount])

    let finalContentStyles = maxCount < 0 || startCount < 0 || content === maxCount || maxCount < startCount ?
        `${ s.red } ${ s.counter }` :
        `${ s.normal } ${ s.counter }`
    if (maxCount < 0 || startCount < 0 || maxCount < startCount) {
        buttonSetDisable = true
    }

    return (
        <div>
            <CounterSettings
                buttonSetDisable={ buttonSetDisable }
                startCount={ startCount }
                maxCount={ maxCount }
                buttonSetHandler={ buttonSetHandler }
                changeMaxCountHandler={ changeMaxCountHandler }
                changeStartCountHandler={ changeStartCountHandler }
            />
            <Counter
                content={ content }
                buttonIncDisable={ buttonIncDisable }
                buttonResetDisable={ buttonResetDisable }
                finalContentStyles={ finalContentStyles }
                buttonIncHandler={ buttonIncHandler }
                buttonResetHandler={ buttonResetHandler }
            />
        </div>
    )
})

export default CustomizableCounter