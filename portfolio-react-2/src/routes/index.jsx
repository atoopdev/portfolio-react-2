import React from "react"
import About from "../components/about"

// functions like main landing page

export default function Index(){
    return(
        <div>
            <h1>I am in src/routes/index.jsx</h1>
            <p>When completed, this will be the home page.</p>
            <About />
        </div>
    )
}