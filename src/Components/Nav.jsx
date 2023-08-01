import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className=' flex justify-center m-16 mb-32' id='nav'>
        <div className=' flex gap-44'>
            <div className=' text-blue-950 font-bold text-2xl ml-10'>
                <h1>Wura</h1>
            </div>
            <div className=' flex gap-4 mt-[5px]'>

                <p>Home</p>
                <p>About</p>
                <Link to={"/TechStack"}>TechStack</Link>
                <Link>Projects</Link>
                <p>Connect</p>
            </div>
            <div className=' flex items-center gap-8'>
                <Link to={"https://github.com/oyewaleoyindamola?tab=repositories"}>
                    <BsGithub className=' font-bold text-3xl'/>
                </Link>
                <Link to={"https://twitter.com/notifications"}>
                    <AiFillTwitterCircle className=' font-bold text-4xl'/>
                </Link>
                <Link to={"https://www.linkedin.com/in/oyindamola-oyewale-404517206/"}>
                    <BsLinkedin className=' font-bold text-3xl'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Nav