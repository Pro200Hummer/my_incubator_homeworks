import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import CustomizableCounter from "./Components/Customizable-Counter/CustomizableCounter";
import Error404 from "./Components/Error404";
import SimpleCounter from "./Components/Simple-Counter/SimpleCounter";

export const PATH = {
    SIMPLE_COUNTER: "/simple-counter",
    CUSTOMIZABLE_COUNTER: "/customizable-counter",
}
export type RoutesType = {
    maxCountValue: number
    startCountValue: number
    buttonSetDisable: boolean
    maxCountChanger: (maxCountValue: number, inputError: boolean) => void
    startCountChanger: (startCountValue: number, inputError: boolean) => void
    addCountValuesToLS: () => void
    count: string | number
    maxCount: number
    errorMessage: string
    buttonIncDisable: boolean
    buttonResetDisable: boolean
    newCount: () => void
    resetCounter: () => void
}

const Routes:React.FC<RoutesType> = (
    {
        buttonIncDisable,  buttonResetDisable,
        count, maxCount,
        errorMessage,
        newCount, resetCounter,addCountValuesToLS, buttonSetDisable,
        maxCountValue, startCountValue,
        maxCountChanger, startCountChanger
    }
    ) => {
    const counter = {
        count:count,
        maxCount:maxCount,
        errorMessage:errorMessage,
        buttonIncDisable:buttonIncDisable,
        buttonResetDisable:buttonResetDisable,
        newCount:newCount,
        resetCounter:resetCounter,
    }
    const counterSettings = {
        addCountValuesToLS:addCountValuesToLS,
        maxCountChanger:maxCountChanger,
        startCountChanger:startCountChanger,
        buttonSetDisable:buttonSetDisable,
        maxCountValue:maxCountValue,
        startCountValue:startCountValue,

    }

    return (
        <>
            <Switch>
                <Route path={ "/" } exact render={ () => <Redirect to={ PATH.SIMPLE_COUNTER }/> }/>
                <Route path={ PATH.SIMPLE_COUNTER } render={ () => <SimpleCounter/> }/>
                <Route path={ "/" } exact render={ () => <Redirect to={ PATH.CUSTOMIZABLE_COUNTER }/> }/>
                <Route path={ PATH.CUSTOMIZABLE_COUNTER } render={ () => <CustomizableCounter
                    counter={counter}
                    counterSettings={counterSettings}
                /> }/>
                <Route render={ () => <Error404/> }/>
            </Switch>
        </>
    );
}

export default Routes;
