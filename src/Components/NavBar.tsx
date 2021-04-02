import React from "react";
import {NavLink} from "react-router-dom";
import ns from './Components-Styles/NavBar.module.css'

function NavBar() {
    return (
        <div className={ns.main}>
            <ul className={ns.topmenu}>
                <li>
                    <h2 className={`${ns.fa}${ns.faAngleDown}`}>Menu</h2>
                    <ul className={ns.submenu}>
                        <li>
                            <NavLink className={ns.link} to={ "/simple-counter" }>Simple counter</NavLink>
                        </li>
                        <li>
                            <NavLink className={ns.link} to={ "/customizable-counter" }>Customizable counter</NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
