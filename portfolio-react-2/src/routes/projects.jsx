import React from "react"
import ProjectData from "../data"
import ProjectCard from "../components/projectcard"
import {Link} from "react-router-dom"
import ProjectsIntro from "../components/projectsintro"
import ContactInfo from "../components/contactinfo"

export default function Root(){
    const projectElements = ProjectData.map((project)=>{
            return <ProjectCard
            key={project.id}
            project={project} />
    })

    console.log("projectElements: ", projectElements)

    return(
        <div className="">
            {/* <h1>I am in src/routes/projects.jsx</h1>
            <p>When completed, this will be the project page.</p> */}
            <ProjectsIntro />

        <div className="projects">
            <section className="">
                <div className="projects-container">
                <h2>Completed Projects</h2>
                {/* add divider class to below if want dashed lines seperating fields again */}
                <div className="projects-list">
                {projectElements}
                </div>
                </div>
            </section>
        </div>
        <ContactInfo />
        </div>
    )
}