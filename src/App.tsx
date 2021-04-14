import React, {useEffect, useState} from 'react';
import ms from "./App.module.css"
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Routes from "./Routes";

export type CounterStateType = {
    startCount: number
    count: number | string
    maxCount: number
    buttonSetDisable: boolean
    buttonIncDisable: boolean
    buttonResetDisable: boolean
    errorMessage: string
    infoMessage: string
}

function App() {
    // Local state
 /*   let [state, setState] = useState<CounterStateType>({
        startCount: 0,
        count: 0,
        maxCount: 0,
        buttonIncDisable: false,
        buttonResetDisable: false,
        buttonSetDisable: true,
        errorMessage: "Incorrect value",
        infoMessage: "Enter values and press set"
    })

    useEffect(() => {
        let startCountItem = localStorage.getItem("start count")
        let maxCountItem = localStorage.getItem("max count")
        if (startCountItem != null) {
            state.startCount = JSON.parse(startCountItem)
            state.count = JSON.parse(startCountItem) // - присваиваем стартовому значению значение из localStorage
        }
        if (maxCountItem != null) {
            state.maxCount = JSON.parse(maxCountItem) // - присваиваем максимальному значению значение из localStorage
        }
        setState({...state})
    }, [])

    //  Функция, изменяющая максимальное значение
    const maxCountChanger = (maxCountValue: number, inputError: boolean) => {
        state.maxCount = maxCountValue
        state.count = state.infoMessage // - выводим текст информации во время изменения настроек
        if (inputError) {
            state.buttonSetDisable = true
            state.buttonIncDisable = true
        } else {
            state.buttonSetDisable = false
            state.buttonIncDisable = false
        }
        setState({...state})
    }
    //  Функция, изменяющая стартовое значение
    const startCountChanger = (startCountValue: number, inputError: boolean) => {
        state.startCount = startCountValue
        state.count = state.infoMessage // - выводим текст информации во время изменения настроек
        if (inputError) {
            state.buttonSetDisable = true
            state.buttonIncDisable = true
        } else {
            state.buttonSetDisable = false
            state.buttonIncDisable = false
        }
        setState({...state})
    }

    // Функция добавления значений в localStorage (клик по "set")
    const addCountValuesToLS = () => {
        localStorage.setItem("max count", JSON.stringify(state.maxCount))
        localStorage.setItem("start count", JSON.stringify(state.startCount))
        state.count = state.startCount // - присваиваем стартовое значение после нажатия set
        state.buttonSetDisable = true // - устанавливаем disable для set после его нажатия
        setState({...state})
    }
    //  Функция, меняющая значение счётчика (клик по "inc")
    const newCount = () => {
        if (typeof state.count === "number") {
            state.count !== state.maxCount ? state.count++ : state.count
        }
        setState({...state})
    }

    // Функция, сбрасывающая счётчик (клик по "reset")
    const resetCounter = () => {
        state.count = state.startCount // - откат к установленному стартовому значению
        state.buttonIncDisable = false // - активируем кнопку "inc"
        setState({...state})
    }

    let setDisable
    (state.maxCount <= 0 || state.startCount < 0) ? setDisable = true : setDisable = state.buttonSetDisable

    let incDisable
    incDisable = state.maxCount <= 0 || state.startCount < 0 || state.count === state.maxCount;
    /!*if(state.maxCount < 0 || state.startCount < 0 || state.count === state.maxCount){
        incDisable = true
    }else{
        incDisable = false
    }*!/

    let resetDisable
    (state.maxCount <= 0 || state.startCount < 0) ? resetDisable = true : resetDisable = false

    let count
    (state.maxCount <= 0 || state.startCount < 0) ? count = state.errorMessage : count = state.count*/

    return (
        <div className={ ms.body }>
            <div className={ms.header}>
                <Header/>
                <NavBar/>
            </div>
            <div className={ ms.content }>
                <Routes/>
            </div>
        </div>
    )
}

export default App;