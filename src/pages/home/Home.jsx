import React from 'react'
import Profile from '../../assets/murali.jpg'
import { Link } from 'react-router'
import { RiArrowRightLine } from "react-icons/ri";
import './home.css'

const Home = () => {
  return (
    <section className='home-container grid'>
      <img src={Profile} alt="" className='home-img' />

      <div className='home-content'>
        <h1 className='home-title'><span>I'm Murali Manohar</span><br /> Software Developer</h1>
        <p className='home-description'>I love turning ideas into reality through code! As a Software Developer, I specialize in Java, Spring Boot, ReactJS, and database management. I enjoy solving complex challenges and continuously learning new technologies to enhance my skills.</p>
        <Link to='/about' className='button'>More About Me
        <span className='button-icon'>
          <RiArrowRightLine />
        </span>
        </Link>
      </div>

      <div className="color-block"></div>
    </section>
  )
}

export default Home