import React from 'react'
import Box from './icons/Box.js'
import Pen from './icons/Pen.js'
import Tv from './icons/Tv.js'
import Image from 'next/image'
import Imag1 from '../img/company1.png'
import Imag2 from '../img/company2.png'
import Imag3 from '../img/company3.png'
import Imag4 from '../img/company4.png'

function SectionPortfolio() {
  return (
    <section id='#Works' className='bg-section1 relative'>
        <div className='container mx-auto before:bg-section2 before:h-[calc(408px/2)] before:w-full before:absolute before:top-0 before:left-0'>
        <div className="relative grid gap-9 grid-cols-3">
            <div className='box-border pb-12 pt-40 p-4 bg-boxesdefault flex items-center justify-center gap-8 group hover:bg-yellowOrange '>
                <Box  className='text-white ml-5' />
                <div>
                    <h2 className='text-5xl text-white pt-16 mb-2'>
                        Product Designer
                    </h2>
                    <p className='text-text mb-2 group-hover:text-white'>
                        124 Projects
                    </p>
                </div>
            </div>
            <div className='box-border pb-12 pt-40 p-4 bg-boxesdefault flex items-center justify-center  gap-8 group  hover:bg-yellowOrange'>
                <Pen  className='text-white ml-5' />
                <div>
                    <h2 className='text-5xl text-white pt-16 mb-2'>
                        Branding Disigner
                    </h2>
                    <p className='text-text mb-2 group-hover:text-white'>
                        37 Projects
                    </p>
                </div>
            </div>
            <div className='box-border pb-12 pt-40 p-4 bg-boxesdefault flex items-center justify-center  gap-8 group hover:bg-yellowOrange'>
                <Tv  className='text-white ml-5' />
                <div>
                    <h2 className='text-5xl text-white pt-16 mb-2'>
                        Full stack Develper
                    </h2>
                    <p className='text-text mb-2 group-hover:text-white'>
                        62 Projects
                    </p>
                </div>
            </div>
        </div>
            {/* logos */}
        <div className="grid grid-cols-4 gap-4  pt-36 pb-36">
            <div className="flex justify-center grayscale">
                <Image src={Imag1} width={200} height={40} alt="company1"/>
            </div>
            <div className="flex justify-center">
                <Image src={Imag2} width={200} height={40} alt="company2"/>
            </div>
            <div className="flex justify-center">
                <Image src={Imag3} width={220} height={30} alt="company3"/>
            </div>
            <div className="flex justify-center">
                <Image src={Imag4} width={200} height={40} alt="company4"/>
            </div>
        </div>
             {/* end logos */}
        </div>
    </section>
  )
}

export default SectionPortfolio
