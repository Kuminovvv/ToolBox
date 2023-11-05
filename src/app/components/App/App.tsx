import {observer} from "mobx-react-lite"
import './App.scss'
import Router from "../Router/Router";
import { ToastContainer } from "react-toastify";

export default observer(() => {


    return (
        <div>
            <ToastContainer/>
            <Router/>
        </div>
    )
})
