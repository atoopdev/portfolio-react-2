import React, {useState} from "react"
import { NavLink, Link } from "react-router-dom"

export default function Nav(){
    return (
        <nav id="navbar" role="navigation" aria-label="main navigation">
            <ul className="nav-links">
                <li className="name-logo">Amanda Toop</li>
                <li ><NavLink to={`/`} className="nav-link">Home</NavLink></li>
                <li><NavLink to={`Projects/`} className="nav-link">Projects</NavLink></li>
            </ul>
            {/* end nav links */}
        </nav>
        // end nav bar
    )
}