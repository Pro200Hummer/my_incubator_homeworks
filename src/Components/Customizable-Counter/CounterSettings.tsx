import React from 'react';
import s from '../../App.module.css';
import bs from '../Components-Styles/SuperButton.module.css'
import SuperNumberInput from "../SuperNumberInput";
import SuperButton from "../SuperButton";

export type CounterSettingsType = {
    maxCountValue: number
    startCountValue: number
    buttonSetDisable: boolean
    maxCountChanger: (maxCountValue: number, inputError: boolean) => void
    startCountChanger: (startCountValue: number, inputError: boolean) => void
    addCountValuesToLS: () => void
}

const CounterSettings: React.FC<CounterSettingsType> = (
    {
        addCountValuesToLS, buttonSetDisable,
        maxCountValue, startCountValue,
        maxCountChanger, startCountChanger
    }) => {
    return (
        <div className={ s.wrapper }>
            <div className={ s.settings }>
                <div>
                    <h3>max value:</h3>
                    <SuperNumberInput
                        maxCountValue={ maxCountValue }
                        maxCountChanger={ maxCountChanger }
                    />
                </div>
                <div>
                    <h3>start value:</h3>
                    <SuperNumberInput
                        startCountValue={ startCountValue }
                        startCountChanger={ startCountChanger }
                    />
                </div>
            </div>
            <div className={bs.buttons}>
                <SuperButton onClick={ addCountValuesToLS }
                             disabled={ buttonSetDisable }>
                    set
                </SuperButton>
            </div>
        </div>
    )
}

export default CounterSettings

