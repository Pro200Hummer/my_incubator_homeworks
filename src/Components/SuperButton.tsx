import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import bs from "../Components/Components-Styles/SuperButton.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    buttonIncDisable?: boolean
    buttonSetDisable?: boolean
    buttonResetDisable?: boolean
    simpleResetDisable?: boolean
    simpleIncDisable?: boolean
    addCountValuesToLS?: () => void
    newCount?: () => void
    resetCounter?: () => void
    incSimpleCount?: () => void
    resetSimpleCount?: () => void
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        buttonIncDisable, buttonSetDisable,
        buttonResetDisable, resetCounter,
        newCount,
        addCountValuesToLS,
        incSimpleCount, resetSimpleCount,
        simpleResetDisable, simpleIncDisable,
        ...restProps
    }) => {



    return (
        <button
            className={bs.button}
            { ...restProps }
        />
    );
}

export default SuperButton;
