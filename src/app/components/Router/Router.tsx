import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import React from 'react'
import {observer} from 'mobx-react-lite'
import Home from "../Home/Home";
import routes from "../../lib/routes";
import PageInstallationsOverview from "../pages/InstallationsOverview/InstallationsOverview";
import Navbar from "../../../core/components/UI/Navbar/Navbar";


export default observer(() => {

    return (
        <BrowserRouter basename={routes.HOME}>
            <Navbar/>
            <Switch>
                <Route exact path={routes.HOME} component={Home}/>
                <Route exact path={routes.INSTALLATIONS_OVERVIEW} component={PageInstallationsOverview}/>
                <Redirect from="*" to={routes.HOME}/>
            </Switch>
        </BrowserRouter>
    )
})

