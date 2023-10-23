"use client"
import React from 'react'
import Arrow from './icons/Arrow'
import Image from 'next/image'
import Projet1 from '../img/projet-1.PNG'
import Projet2 from '../img/projet-2.PNG'
import Projet3 from '../img/projet-3.PNG'

function SectionProject() {
  return (
    <section className='bg-section1 pt-14 pb-32'>
        <div className='container mx-auto'>
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span">
            <div className="">
                        <h2 className='text-text text-xl text-Light mb-4'>-Portfolio</h2>
                            <div className='text-white font-extrabold text-3xl'>
                                <span >All Creative Works,</span>
                                <br/>Selected projects.
                            </div>
                            <br></br>
                            <p className='text-text text-m  text-Light text-justify '>
                                Sef ut Perspiciatis unde omnis iste natus error sit <br/> voluptatem accusantium
                            </p>
                            <br></br>                        
                            <div className='mt-12 text-yellowOrange text-xl text-Light'>
                            <a  className='flex gap-4 items-center font-bold mt-12'>
                            <span className='text-2xl'>
                            <u>Explore more</u>
                            </span>
                            <div className="relative after:absolute after:top-[1.56rem] after:w-6 after:h-0.5
                                after:left-0 after:bg-yellowOrange" >
                                <Arrow />
                            </div>
                            </a>
                            </div>
                            <div className="pt-40">
                                <Image src={Projet1} width="auto" height={650} alt="projet1"/>

                            </div>
                    </div>
            </div>
            <div>
                <div className="col-span-2 flex justify-end pt-12">
                    <Image src={Projet2} width="auto" height={650} alt="projet1"/>
                </div>
                <div className="row-span-2 col-span-2 flex justify-end pt-32 "> 
                    <Image src={Projet3} width="auto" height={650} alt="projet1"/>

                </div>
            </div>
        </div>
        </div>
    </section>
  )
}
export default SectionProject
