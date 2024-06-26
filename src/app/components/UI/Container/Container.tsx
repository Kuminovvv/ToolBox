import React, {ReactNode} from 'react';
import {Link, useLocation} from "react-router-dom";
import appStateStore from "../../../lib/store/app-state-store";
import './Container.scss'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavbarData} from "../../../lib/projectData/NavbarData";

interface IContainer {
    className?: string
    children: ReactNode
    panelElement?: ReactNode
}

const Container = ({className, children, panelElement}: IContainer) => {
    const url = useLocation().pathname
    return (
        <div className={`container mx-auto pt-4 custom-animation `}>
            {
                url !== '/' &&
                <div className='flex justify-between sticky'>
                    <Link to={'/'} className='btn mb-8'>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                        {
                            NavbarData.map((dataItem, index) => (
                                url===dataItem.to&&dataItem.title
                            ))
                        }
                    </Link>
                    <>
                        {panelElement}
                    </>
                </div>
            }
            <div className={className}>
                {children}
            </div>

        </div>
    );
};

export default Container;
