import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import CustomizableCounter from "./Components/Customizable-Counter/CustomizableCounter";
import Error404 from "./Components/Error404";
import SimpleCounter from "./Components/Simple-Counter/SimpleCounter";

export const PATH = {
    SIMPLE_COUNTER: "/simple-counter",
    CUSTOMIZABLE_COUNTER: "/customizable-counter",
}
const Routes:React.FC = () => {

    return (
        <>
            <Switch>
                <Route path={ "/" } exact render={ () => <Redirect to={ PATH.SIMPLE_COUNTER }/> }/>
                <Route path={ PATH.SIMPLE_COUNTER } render={ () => <SimpleCounter/> }/>
                <Route path={ "/" } exact render={ () => <Redirect to={ PATH.CUSTOMIZABLE_COUNTER }/> }/>
                <Route path={ PATH.CUSTOMIZABLE_COUNTER } render={ () => <CustomizableCounter/> }/>
                <Route render={ () => <Error404/> }/>
            </Switch>
        </>
    );
}

export default Routes;
