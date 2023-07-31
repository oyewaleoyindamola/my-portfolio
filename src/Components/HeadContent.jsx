import React from 'react'
import Profile from '../Images/ProfileImage.jpg'
import {TfiHtml5} from 'react-icons/tfi'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {TbBrandVscode} from 'react-icons/tb'
import {FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss} from  'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const HeadContent = () => {
  return (
    <div>
        <div className=' flex flex-col justify-center items-center mb-28'>
            <div className=' flex items-center mb-44 gap-[20rem]'>
                <div>
                    <h1 className=' font-bold text-4xl  text-blue-950'>Hi  ,</h1>
                    <h1 className=' font-bold text-2xl  text-blue-950'> My name is </h1>
                    <h2 className=' font-bold text-2xl  text-blue-950'>OYEWALE OYINDAMOLA WURAOLA.</h2>
                    <h1 className=' font-bold text-2xl  text-blue-950'> I am a Software Developer</h1>
                </div>
                <div>
                    <img src={Profile} alt=""  className=' w-32 rounded-full'/>
                </div>
            </div>
            <div className=' flex flex-col items-center justify-center'>
                <div className=' flex flex-col items-center justify-center mb-10'>
                    <h2 className=' font-bold text-2xl text-blue-950'> My Tech Stack</h2>
                    <p className=' text-xl text-blue-950'>Technologies I've been working with recently</p>
                </div>
                <div className=' flex gap-16 mb-10'>
                    <TfiHtml5 className=' text-5xl text-[#F1662A]'/>
                    <SiCss3 className=' text-5xl text-blue-700'/>
                    <SiJavascript className=' text-5xl text-yellow-500'/>
                    <FaReact className=' text-5xl text-blue-700'/>
                </div>
                <div className=' flex gap-16'>
                    <SiTailwindcss className=' text-5xl text-blue-700'/>
                    <FaNodeJs className=' text-5xl text-green-700'/>
                    <TbBrandVscode className=' text-5xl text-blue-700'/>
                    <BsGithub className=' text-5xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeadContent