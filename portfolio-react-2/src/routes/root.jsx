import React from "react"
import About from "../components/about"
import Nav from "../components/nav"

import {Outlet, Link} from "react-router-dom"


// functions like main container for modules to load in

export default function Root(){
    return(
        <body>
           <Nav />  
        <main>
        <div>
            <p>I am in src/routes/root.jsx</p>
            <p>When completed, this will be the container page.</p>
            
            {/* Outlet is where content renders */}
           <Outlet />
        </div>
        </main>
        </body>
    )
}