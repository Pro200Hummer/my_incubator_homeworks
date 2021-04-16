import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./Components-Styles/SuperNumberInput.module.css";


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    inputValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    inputValue: number
};

const SuperNumberInput: React.FC<SuperInputTextPropsType> = props => {
    const {
        inputValueHandler,
        inputValue
    } = props

    const superInputStyle = inputValue < 0 ? `${ s.errorInput }` : `${ s.superInput }`

    return (
        <>
            <input
                type={ "number" }
                value={ inputValue }
                onChange={ inputValueHandler }
                className={ superInputStyle }
                {...props}
            />
        </>
    );
}

export default SuperNumberInput;
