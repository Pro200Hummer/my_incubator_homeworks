import React from "react"
import CounterSettings, {CounterSettingsType} from "./CounterSettings";
import Counter, {CounterType} from "./Counter";

type CustomizableCounterType ={
    counter: CounterType
    counterSettings: CounterSettingsType
}

const CustomizableCounter:React.FC<CustomizableCounterType> = (
    {
        counter, counterSettings
    }
) => {
    return(
        <div>
            <CounterSettings
                maxCountValue={counterSettings.maxCountValue}
                startCountValue={ counterSettings.startCountValue }
                buttonSetDisable={ counterSettings.buttonSetDisable }
                addCountValuesToLS={ counterSettings.addCountValuesToLS }
                maxCountChanger={ counterSettings.maxCountChanger }
                startCountChanger={ counterSettings.startCountChanger }
            />
            <Counter
                count={ counter.count }
                maxCount={ counter.maxCount }
                errorMessage={ counter.errorMessage }
                buttonIncDisable={ counter.buttonIncDisable }
                buttonResetDisable={ counter.buttonResetDisable }
                newCount={ counter.newCount}
                resetCounter={ counter.resetCounter }
            />
        </div>
    )
}

export default CustomizableCounter