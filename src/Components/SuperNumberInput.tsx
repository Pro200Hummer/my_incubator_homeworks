import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./Components-Styles/SuperNumberInput.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    maxCountValue?: number
    startCountValue?: number
    maxCountChanger?: (maxCountValue: number, inputError: boolean) => void
    startCountChanger?: (startCountValue: number, inputError: boolean) => void
};

const SuperNumberInput: React.FC<SuperInputTextPropsType> = (
    {
        maxCountValue, startCountValue,
        maxCountChanger, startCountChanger,
        ...restProps
    }) => {

    let inputValue
    if (maxCountValue || maxCountValue === 0) {
        inputValue = maxCountValue
    }
    if (startCountValue || startCountValue === 0) {
        inputValue = startCountValue
    }

    const error = maxCountValue ?
        maxCountValue < 0 : maxCountValue === 0 ?
            true : startCountValue ?
                startCountValue < 0 : false

    const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (maxCountChanger) {
            maxCountChanger(JSON.parse(e.currentTarget.value), JSON.parse(e.currentTarget.value) < 0)
        }
        if (startCountChanger) {
            startCountChanger(JSON.parse(e.currentTarget.value), JSON.parse(e.currentTarget.value) < 0)
        }
    }

    const superInputStyle = error ? `${ s.errorInput }` : `${ s.superInput }`;

    return (
        <>
            <input
                type={ "number" }
                value={ inputValue }
                onChange={ inputValueHandler }
                className={ superInputStyle }
                { ...restProps }
            />
        </>
    );
}

export default SuperNumberInput;
