import React, {ReactNode} from 'react';
import {Link} from "react-router-dom";
import appStateStore from "../../../lib/store/app-state-store";
import './Container.scss'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface IContainer {
    className?: string
    children: ReactNode
    panelElement?: ReactNode
}

const Container = ({className, children, panelElement}: IContainer) => {
    return (
        <div className={`container mx-auto pt-4 custom-animation `}>
            {
                appStateStore.stateURL !== '/' &&
                <div className='flex justify-between sticky'>
                    <Link to={'/'} className='btn mb-8'>
                        <FontAwesomeIcon icon={faArrowLeft}/>
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
