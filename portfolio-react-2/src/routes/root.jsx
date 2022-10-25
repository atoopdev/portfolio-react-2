import React from "react"
import { useNavigation, } from "react-router-dom";
import About from "../components/about"
import Nav from "../components/nav"

import {Outlet, Link} from "react-router-dom"


// functions like main container for modules to load in

export default function Root(){

    const navigation = useNavigation();
    return(
        <body>
           <Nav />  
        <main>
        {/* useNavigation retruns current navigation state - idle, submitting, or loading
        If site is not idle, a loading class is added to main part of app
        Must use css to make use of this feature */}
        <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
            {/* <p>I am in src/routes/root.jsx</p>
            <p>When completed, this will be the container page.</p> */}
            
            {/* Outlet is where content renders */}
           <Outlet />
        </div>
        </main>
        </body>
    )
}