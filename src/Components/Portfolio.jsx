import React from 'react'
import Nav from './Nav'
import HeadContent from './HeadContent'
import TechStack from './TechStack'
import About from './About'
import Project from './Project'

const Portfolio = () => {
  return (
    <div>
      <Nav/>
      <HeadContent/>
      <About/>
      <TechStack/>
      <Project/>
    </div>
  )
}

export default Portfolio