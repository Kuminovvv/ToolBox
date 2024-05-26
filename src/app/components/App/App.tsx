import {observer} from "mobx-react-lite"
import './App.scss'
import Router from "../Router/Router";
import {Slide, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default observer(() => {

    return (
        <div>
            <ToastContainer
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="light"
                transition={Slide}
                position='top-right'
                stacked
                draggable
            />

            <Router/>
        </div>
    )
})
