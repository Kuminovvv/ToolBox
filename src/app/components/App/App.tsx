import {observer} from "mobx-react-lite"
import './App.scss'
import Router from "../Router/Router";

export default observer(() => {

    return (
        <div>
            <Router/>
        </div>
    )
})
