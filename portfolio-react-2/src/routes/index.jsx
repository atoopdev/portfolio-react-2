import React from "react"
import About from "../components/about"
import FeaturedProjects from "../components/featuredprojects"
import WorkExperience from "../components/workexperience"
import Education from "../components/education"
import ContactInfo from "../components/contactinfo"

// functions like main landing page

export default function Index(){
    return(
        <div>
            <h1>I am in src/routes/index.jsx</h1>
            <p>When completed, this will be the home page.</p>
            <About />
            <FeaturedProjects />
            <WorkExperience />
            <Education />
            <ContactInfo />
        </div>
    )
}