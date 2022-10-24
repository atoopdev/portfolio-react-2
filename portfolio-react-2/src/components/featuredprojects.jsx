import React from "react"
import ProjectData from "../data"
import ProjectCard from "./projectcard"
import {Link} from "react-router-dom"

export default function FeaturedProjects(){
    const projectElements = ProjectData.map((project)=>{
        if(project.isFeatured===true){
            return <ProjectCard
            key={project.id}
            project={project} />
        }
    })

    console.log("projectElements: ", projectElements)


    return (
        <div className="featured-projects">
            <section className="content_wrapper">
                <h2>Featured projects</h2>
                <p>View selected projects below. Complete list of projects can be found at <Link to="projects/">https://www.amandatoop.com/projects/</Link>.</p>
                {projectElements}
            </section>
        </div>
    )
}