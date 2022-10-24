import React, {useState} from "react"
import { NavLink, Link } from "react-router-dom"

export default function Nav(){
    return (
        <nav id="navbar" role="navigation" aria-label="main navigation">
            <ul className="nav-links">
                <li className="name-logo">Amanda Toop</li>
                <li><NavLink to={`/`}>Home</NavLink></li>
                <li><NavLink to={`Projects/`}>Projects</NavLink></li>
            </ul>
            {/* end nav links */}
        </nav>
        // end nav bar
    )
}