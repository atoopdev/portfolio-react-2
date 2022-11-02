import React, {useState} from "react"
import { NavLink, Link } from "react-router-dom"

export default function Nav(){
    return (
        <div className="nav-wrapper">
            <a className="hamburger" href="#navbar" aria-label="Open main menu">
                <span className="sr-only">Open main menu</span>
                <i className="fas fa-bars" aria-hidden="true"></i>
            </a>
        <nav id="navbar" role="navigation" aria-label="main navigation">
            <ul className="nav-links">
                <li className="name-logo">Amanda Toop</li>
                <li ><NavLink to={`/`} className="nav-link">Home</NavLink></li>
                <li><NavLink to={`Projects/`} className="nav-link">Projects</NavLink></li>
                <li><a href="https://dev.to/atoopdev" target="_blank" rel="noreferrer noopener" className="nav-link">Blog</a></li>
            </ul>
            {/* end nav links */}
            <a className="close" href="#" aria-label="Close main menu">
                <span className="sr-only">Close main menu</span>
                <i className="fas fa-times" aria-hidden="true"></i>
            </a>
        </nav>
        {/* // end nav bar */}
        </div>
        // end nav wrapper
    )
}