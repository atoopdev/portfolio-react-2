import React from "react"

export default function ProjectCard(props){
    return <section className="project-item">
       
        <a href={props.project.link} className="project-btn"><img src={props.project.img} alt={props.project.title} className="project-img"></img></a>
        <h3 className="project-title">{props.project.title}</h3>
        <p className="project-description">{props.project.description}</p>
        <p className="project-keywords">Keywords: {props.project.keywords}</p>

        {/* conditional display if there is blog link */}
        {props.project.blogLink && <p>Read more about my experience <a href={props.project.blogLink} className="blog-link">on my blog.</a></p>}
        <a href={props.project.link} className="btn">View Project</a>
    </section>
}