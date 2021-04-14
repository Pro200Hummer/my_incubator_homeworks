import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import bs from "../Components/Components-Styles/SuperButton.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disable: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = props => {

    const {
        onClickHandler,
        disable
    } = props

    return (
        <button
            className={ bs.button }
            onClick={onClickHandler}
            disabled={disable}
            {...props}
        />
    );
}

export default SuperButton;
