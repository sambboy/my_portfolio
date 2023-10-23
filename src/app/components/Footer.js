import React from 'react'
import Logo from './icons/Logo'
import Linkedin from './icons/Linkedin'
import Github from './icons/Github'
import Instegram from './icons/Instegram'

function Footer() {
  return (
    <footer className='bg-section1 pb-32'>
        <div className='container mx-auto grid grid-cols gap-4 place-items-center'>
            <div className=''>
                <Logo className="text-yellowOrange" />
            </div>
            <div className='text-white flex items-center'>
                <h2 className='text-xl font-bold'>Thanks for scrolling,</h2>
                <p className='text-l'>
                    taht's all floks
                </p>
            </div>
            
            <div className='flex items-center gap-4 text-white group cursor-pointer'>
                <a href=''><Instegram className="hover:text-yellowOrange" /></a>
                <a href=''><Github className="hover:text-yellowOrange" /></a>
                <a href=''><Linkedin className="hover:text-yellowOrange" /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
