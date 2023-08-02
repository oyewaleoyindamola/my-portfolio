import React from 'react'
// import Nav from './Nav'

const About = () => {
  return (
    <div >
      {/* <Nav/> */}
      <div className=' flex flex-col m-16 flex-wrap'>
        <h1 className=' font-bold text-4xl text-blue-950 mb-6'>
        About Me
        </h1>
       <div className=' mb-7'>
         <p className=' font-medium text-blue-950'>
           Oyindamola is a Frontend Developer with an academic background in History and International Studies. I have a solid interest in creating 
           engaging and user-friendly web interfaces. My passion is to create solutions that meet market demands,
           grow businesses and improve lifestyles for consumers. I specialize in the use of HTML, CSS, JavaScript,
           and React to bring designs to life and create interactive and responsive websites. I possess some 
           practical knowledge of Backend(Node.js) development and database(MongoDB) concepts with interface 
           designing and implementation. As an avid leaner, I willing to learn more languages.
         </p>
       </div>
       <div className=' flex flex-col'>
         <h1  className=' font-bold text-4xl text-blue-950  mb-6'>Education</h1>
         <h4 className=' font-bold text-xl'>Bowen University Iwo</h4>
         <p>History and Internation Studies, BA  </p>
         <p className=' mb-5'>2016-2020</p>

         <h4 className=' font-bold text-xl'>Sail (TechCampus)</h4>
         <p>Software Engineer</p>
         <p>2023</p>
        </div>
      </div>
    </div>
  )
}

export default About