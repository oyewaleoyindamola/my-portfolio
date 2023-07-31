import React from 'react'
import profile from '../Images/ProfileImage.jpg'

const Project = () => {
  return (
    <div className=' flex flex-col m-[15.5rem]'>
        <div className=' flex flex-col items-center justify-center mb-20'>
          <h1> Projects</h1>
          <p>Projects I've worked on</p>
        </div>
        <div className=' flex gap-7 mb-10 m-[15.5rem]'>
          <div className=' h-[16rem] w-52 bg-black text-white '> 
            <img src={profile} alt="" className=' h-32 w-52'/>
            <h2>hgfjusdhjcdjkb</h2>
          </div>
          <div className=' h-[16rem] w-52 bg-black text-white '> 
            <img src={profile} alt="" className=' h-32 w-52'/>
            <h2>hgfjusdhjcdjkb</h2>
          </div>
          <div className=' h-[16rem] w-52 bg-black text-white '> 
            <img src={profile} alt="" className=' h-32 w-52'/>
            <h2>hgfjusdhjcdjkb</h2>
          </div>
          <div className=' h-[16rem] w-52 bg-black text-white '> 
            <img src={profile} alt="" className=' h-32 w-52'/>
            <h2>hgfjusdhjcdjkb</h2>
          </div>
        </div>
        <div className=' flex gap-7 m-[15.5rem]'>
          <div className=' h-[16rem] w-52 bg-black text-white '> 
            <img src={profile} alt="" className=' h-32 w-52'/>
            <h2>hgfjusdhjcdjkb</h2>
          </div>
          <div className=' h-[16rem] w-52 bg-black text-white '> 
            <img src={profile} alt="" className=' h-32 w-52'/>
            <h2>hgfjusdhjcdjkb</h2>
          </div>
          <div className=' h-[16rem] w-52 bg-black text-white '> 
            <img src={profile} alt="" className=' h-32 w-52'/>
            <h2>hgfjusdhjcdjkb</h2>
          </div>
          <div className=' h-[16rem] w-52 bg-black text-white '> 
            <img src={profile} alt="" className=' h-32 w-52'/>
            <h2>hgfjusdhjcdjkb</h2>
          </div>
        </div>
    </div>
  )
}

export default Project