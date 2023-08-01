import React from 'react'
import Profile from '../Images/ProfileImage.jpg'


const HeadContent = () => {
  return (
    <div id='HeadContent'>
        <div className=' flex flex-col justify-center items-center '>
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
        </div>
    </div>
  )
}

export default HeadContent