import React from "react"
import About from "../components/about"

// functions like main landing page

export default function Main(){
    return(
        <div className="content_wrapper">
            <h1>I am in src/routes/main.jsx</h1>
            <p>When completed, this will be the main landing page.</p>
            <About />
        </div>
    )
}