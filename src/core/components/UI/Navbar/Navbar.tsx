import {observer} from "mobx-react-lite"
import './Navbar.scss'
import {Link, useLocation} from "react-router-dom";
import routes from "../../../../app/lib/routes";
import {NavbarData} from "../../../../app/lib/projectData/NavbarData";
import appStateStore from "../../../../app/lib/store/app-state-store";
import {useEffect} from "react";

export default observer(() => {
    const url = useLocation().pathname

    useEffect(() => {
        appStateStore.setStateURL(url)
    }, [url])

    return (
        <div className="navbar bg-white sticky top-0 z-20 animate__animated">
            <div className="flex-none">
                <div className='dropdown'>
                    <label tabIndex={2} className="btn btn-ghost m-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-5 h-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            NavbarData.map((dataItem, index) => (
                                <li
                                    key={`Navbar-${index}-li`}>
                                    <Link tabIndex={2} to={dataItem.to}>
                                        {dataItem.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
            <div className="flex-1">
                <Link to={routes.HOME} className="btn btn-ghost normal-case text-lg p-0">
                    ToolBox
                </Link>
            </div>
            <div className="flex-none">

            </div>
        </div>
    )
})
