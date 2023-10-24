import { HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import React from 'react'
import {observer} from 'mobx-react-lite'
import Home from "../Home/Home";
import routes from "../../lib/routes";
import PageInstallationsOverview from "../pages/InstallationsOverview/InstallationsOverview";
import Navbar from "../../../core/components/UI/Navbar/Navbar";
import {Logo} from "../pages/Logo/Logo";


export default observer(() => {

    return (
        <HashRouter basename={routes.HOME}>
            <Navbar/>
            <Switch>
                <Route exact path={routes.HOME} component={Home}/>
                <Route exact path={routes.INSTALLATIONS_OVERVIEW} component={PageInstallationsOverview}/>
                <Route exact path={routes.LOGO} component={Logo}/>
                <Redirect from="*" to={routes.HOME}/>
            </Switch>
        </HashRouter>
    )
})

