import React from "react"
import CounterSettings from "./CounterSettings";
import Counter from "./Counter";

const CustomizableCounter:React.FC = React.memo(() => {
    return(
        <div>
            <CounterSettings/>
            <Counter/>
        </div>
    )
})

export default CustomizableCounter