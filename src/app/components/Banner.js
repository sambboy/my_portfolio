import React from 'react'
import Navbar from './Navbar'
import Linkedin from './icons/Linkedin'
import Github from './icons/Github'
import Instegram from './icons/Instegram'
import Arrow from './icons/Arrow'


function Banner() {
  return (
    <header className="relative  bg-section1 before:absolute before:bg-cover before:bg-local before:bg-[url('./img/background.png')] before:w-[30%] before:h-[51rem] before:left-[30%] before:bottom-0 ">                    
    <div className="container mx-auto py-8 ">
        <Navbar  />
            <div className='grid grid-cols-3 gap-4 py-9' >
                    <div className="col-span-2">
                        <div className='mt-6 text-white font-extrabold text-9xl '>Samir</div>
                        <div className='mt-6 text-white font-extrabold text-9xl relative before:absolute before:top-[10rem] before:w-[5.6rem] before:left-[7px] before:h-3  before:bg-yellowOrange '>Meglaoui .</div>
                        <div className='mt-32 text-white flex gap-4'>
                            <a href=''><Linkedin /></a>
                            <a href=''><Github /></a>
                            <a href=''><Instegram /></a>
                        </div>
                    </div>
        

         <div>
            <h2 className='text-text text-xl text-Light'>- Introduction </h2>
            <br></br>
            <br></br>
            <div className='text-white font-extrabold text-3xl '>
                <span >Elevating Ideas to Code</span>
                <span>Full Stack Developer</span>
                <span>Morocco-Based Innovator</span>
            </div>
            <br></br>
            <br></br>
                <p className='text-text text-xl text-Light text-justify'>
                    Passionate Full Stack Developer based in Morocco, dedicated to bringing digital concepts to life through cutting-edge technologies and elegant solutions.
                </p>
                <br></br>
                <br></br>
            <div className='mt-12 text-yellowOrange text-xl text-Light'>
                <a  className='flex gap-4 items-center'>
                    <span className='text-2xl'>
                       <u>My Story</u>
                    </span>
                    <div className="relative after:absolute after:top-[1.56rem] after:w-6 after:h-0.5
                        after:left-0 after:bg-yellowOrange" >
                        <Arrow />
                    </div>
                    
                </a>
            </div>
            

         </div>
      </div>
    </div>
    </header>
  )
}

export default Banner
