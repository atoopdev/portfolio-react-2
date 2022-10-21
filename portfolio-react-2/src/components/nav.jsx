import React from "react"

export default function Nav(){
    return (
        <nav id="navbar">
            <ul className="nav-links">
                <li className="name-logo">Amanda Toop</li>
                <li><a href="index.html" className="nav-link">Home</a></li>
                <li><a href="https://amandatoop.com/blog/" className="nav-link">Blog</a></li>
                <li><a href="projects" className="nav-link">Projects</a></li>
            </ul>
            {/* end nav links */}
        </nav>
        // end nav bar
    )
}