import React from 'react'
import P1 from "../Images/p1.avif"
import P2 from "../Images/p2.avif"
import P3 from "../Images/p3.avif"

import { Link } from 'react-router-dom'
import {BsGithub} from 'react-icons/bs'

const Project = () => {
  return (
    <div className=' flex items-center justify-center'>
      <div className=' flex gap-5'>
        <div className=' w-52 h-[21rem] rounded-3xl bg-blue-950 text-white font-medium p-5'>
          <img src={P1} alt=""  className=' w-52 h-28 rounded'/>
          <h1 className=' font-bold text-center mb-1'>Weather App</h1>
          <p>This is an app that tells users the current weather of the city they enter</p>
          <p> Tech Stach: Html, Css and JavaScript</p>
          <Link to={"https://oyewaleoyindamola.github.io/weatherApi/"} target='_blank'>
            <BsGithub className=' font-bold text-2xl text-center'/>
          </Link>
        </div>
        <div className=' w-52 h-[21rem] rounded-3xl bg-blue-950 text-white font-medium p-5'>
          <img src={P1} alt=""  className=' w-52 h-28 rounded'/>
          <h1 className=' font-bold text-center mb-1'>Calculator</h1>
          <p>This is an app that allows users to perform basic arithmetic calculations.</p>
          <p> Tech Stach: Html, Css and JavaScript</p>
          <Link to={" https://oyewaleoyindamola.github.io/calll/"} target='_blank'>
            <BsGithub className=' font-bold text-2xl text-center'/>
          </Link>
        </div>
        <div className=' w-52 h-[21rem] rounded-3xl bg-blue-950 text-white font-medium p-5'>
          <img src={P1} alt=""  className=' w-52 h-28 rounded'/>
          <h1 className=' font-bold text-center mb-1'>Music Player</h1>
          <p>This is an app </p>
          <p> Tech Stach: Html, Css and JavaScript</p>
          <Link to={"https://oyewaleoyindamola.github.io/weatherApi/"} target='_blank'>
            <BsGithub className=' font-bold text-2xl text-center'/>
          </Link>
        </div>
        <div className=' w-52 h-[21rem] rounded-3xl bg-blue-950 text-white font-medium p-5'>
          <img src={P3} alt=""  className=' w-52 h-28 rounded'/>
          <h1 className=' font-bold text-center mb-1'>Weather App</h1>
          <p>This is an app that tells users the current weather of the city they enter</p>
          <p> Tech Stach: Html, Css and JavaScript</p>
          <Link to={"https://oyewaleoyindamola.github.io/weatherApi/"} target='_blank'>
            <BsGithub className=' font-bold text-2xl text-center'/>
          </Link>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Project