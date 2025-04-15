import React from 'react'
import Info from '../../components/Info'
import Cv from '../../pdf/murali_resume.pdf'
import { RiDownload2Line } from "react-icons/ri";
import { skill } from '../../Data';
import Skillsitem from '../../components/Skillsitem';
import ResumeItem from '../../components/ResumeItem';
import { resume } from '../../Data';
import './about.css'

const About = () => {
  return (
    <main className="section container">
      <section className='about'>
        <h2 className="section-title">About <span>Me</span></h2>

        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle">Personal Info</h3>

            <ul className="info-list grid">
              <Info />
            </ul>

            <a href={Cv} download='' className="button">
              Download Cv 
              <span className='button-icon'>
              <RiDownload2Line />
              </span>
            </a>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section-subtitle subtitle-center">My Skills</h3>

        <div className="skills-container grid">
          <div className="skills-group">
            <h3 className="skills-title">Full-stack Developer</h3>

            <div className="skills-items grid">
              {skill.map((val) => {
                if(val.category === 'developer'){
                  return <Skillsitem key={val.id} {...val} />
                }
              })}
            </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-title">Data Scientist</h3>

            <div className="skills-items grid">
            {skill.map((val) => {
                if(val.category === 'data-scientist'){
                  return <Skillsitem key={val.id} {...val} />
                }
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className='resume'>
      <h3 className="section-subtitle subtitle-center">Education</h3>

      <div className="resume-container grid">
        <div className="resume-group grid">
          {resume.map((val) => {
            if(val.category === 'education'){
              return <ResumeItem key={val.id} {...val} />
            }
          })}
        </div>
      </div>
      </section>      
    </main>
  )
}

export default About