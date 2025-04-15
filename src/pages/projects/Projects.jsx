import React from 'react'
import { projects } from '../../Data'
import { RiLink } from "react-icons/ri";
import './projects.css'

const Projects = () => {
  return (
    <section className="projects section">
      <h2 className="section-title">My <span>Projects</span></h2>

      <div className="projects-container container grid">
        {projects.map(({id, img, title, description, skills, link}) => {
          return (
            <article className="projects-card" key={id}>
              <a href={link} className="projects-img-wrapper">
                <img src={img} alt="" className="projects-img" />
              </a>

              <h3 className="projects-title">{title}</h3>
              <p className="projects-description">{description}</p>

              <div className="projects-skills">
                {skills.map((skill, index) => {
                  return (
                    <img src={skill} alt="" className="projects-skill" key={index} />
                  )
                })}
              </div>

              <a href={link} className="projects-link">
              <RiLink className='link-icon' />
              Visit Project
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects