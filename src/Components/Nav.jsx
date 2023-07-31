import React from 'react'
import github from '../Images/github.svg'
import twitter from '../Images/Twitter.svg'
import linkedin from '../Images/Linkedin.svg'


const Nav = () => {
  return (
    <div className=' flex justify-center m-16'>
        <div className=' flex gap-44'>
            <div className=' text-blue-950 font-bold text-2xl ml-10'>
                <h1>Wura</h1>
            </div>
            <div className=' flex gap-4 mt-[5px]'>
                <p>Home</p>
                <p>About</p>
                <p>Tech Stack</p>
                <p>Projects</p>
                <p>Connect</p>
            </div>
            <div className=' flex gap-8'>
                <a href="https://github.com/oyewaleoyindamola?tab=repositories"><img src={github} alt="" /></a>
                <a href="https://twitter.com/notifications"><img src={twitter} alt="" /></a>
                <a href="https://www.linkedin.com/in/oyindamola-oyewale-404517206/"><img src={linkedin} alt="" /> </a>
            </div>
        </div>
    </div>
  )
}

export default Nav