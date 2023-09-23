import {observer} from "mobx-react-lite"
import './App.scss'
import Router from "../Router/Router";
import {useEffect} from "react";
import appStateStore from "../../lib/store/app-state-store";

export default observer(() => {

    useEffect(() => {
        appStateStore.setStateURL(window.location.pathname)
    }, [])
    return (
        <div>
            <Router/>
        </div>
    )
})
