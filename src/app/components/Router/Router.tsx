import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import React from 'react'
import {observer} from 'mobx-react-lite'
import Home from "../Home/Home";
import routes from "../../lib/routes";
import PageCalculator from "../pages/PageCalculator/PageCalculator";


export default observer(() => {
    return (
        <BrowserRouter basename={routes.HOME}>
            <Switch>
                <Route exact path={routes.HOME} component={Home}/>
                <Route exact path={routes.CALCULATOR} component={PageCalculator}/>
                <Redirect from="*" to={routes.HOME}/>
            </Switch>
        </BrowserRouter>
    )
})

