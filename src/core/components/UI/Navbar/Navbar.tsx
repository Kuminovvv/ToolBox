import { observer } from "mobx-react-lite";
import './Navbar.scss';
import { Link } from "react-router-dom";
import { NavbarData } from "../../../../app/lib/projectData/NavbarData";
import React, { useState, useEffect } from "react";
import { Icons } from "../../../lib/Icons/Icons";

export default observer(() => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLinkClick = () => {
        setIsDropdownOpen(false);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (!document.querySelector('.dropdown')?.contains(event.target as Node)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <details className="dropdown" open={isDropdownOpen} onClick={handleDropdownClick}>
                    <summary className="m-1 btn btn-ghost">{Icons.bars3BottomLeft}</summary>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            NavbarData.map((item: any) => (
                                <li key={item.to}>
                                    <Link to={item.to} onClick={handleLinkClick}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </details>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">ToolBox</a>
            </div>
            <div className="navbar-end">

            </div>
        </div>
    );
});
