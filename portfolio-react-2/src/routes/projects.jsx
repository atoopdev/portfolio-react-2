import React from "react"
import ProjectData from "../data"
import ProjectCard from "../components/projectcard"
import {Link} from "react-router-dom"

export default function Root(){
    const projectElements = ProjectData.map((project)=>{
            return <ProjectCard
            key={project.id}
            project={project} />
    })

    console.log("projectElements: ", projectElements)

    return(
        <div className="content_wrapper">
            <h1>I am in src/routes/projects.jsx</h1>
            <p>When completed, this will be the project page.</p>

        <div className="">
            <section className="content_wrapper divider">
                <h2>Featured projects</h2>
                <p>View selected projects below. Complete list of projects can be found at <Link to="projects/">https://www.amandatoop.com/projects/</Link>.</p>
                {projectElements}
            </section>
        </div>
        </div>
    )
}