import React from 'react'
import Arrow from './icons/Arrow'
function Project() {
  return (
    <section className='bg-section2 ' id='#Contact'>
        <div className='container mx-auto pt-32 pb-44'>
            <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="">
                    <h2 className='text-text text-xl text-Light mb-4'>-Contact</h2>
                        <div className='text-white font-extrabold text-3xl'>
                            <span >Any Type Of Query</span>
                            <br/>& Discussion
                        </div>
                        <br></br>
                        <p className='text-text text-m  text-Light text-justify '>
                            Sed ut perspiciatis unde omnis iste natus error site <br/>
                            voluptatem accusantium
                        </p>
                        <br></br>                        
                        <div className='mt-12 text-yellowOrange text-xl text-Light'>
                        <a  className='flex gap-4 items-center font-bold mt-12'>
                        <span className='text-2xl'>
                        <u>hi@carlos.com</u>
                        </span>
                        <div className="relative after:absolute after:top-[1.56rem] after:w-6 after:h-0.5
                            after:left-0 after:bg-yellowOrange" >
                            <Arrow />
                        </div>
                        </a>
                        </div>
                    </div>
                    <div className="col-span-2 mx-auto">
                    <div className='text-white font-extrabold text-3xl mt-6'>
                            <p >You can't use up creativity, <br/> the more you use, more you have <br/>
                            in your signifant mind.</p>
                </div>
                        <p className='text-text text-m text-Light text-justify mt-4'>
                            Sed ut perspiciatis unde omnis iste natus error sit <br/>
                            voluptatem accusantium doloremque laudantium,<br/>
                            totam rem aperiam, eaque ipsa.
                        </p>
                        <div className='flex flex-row gap-12 mt-6'>
                        <div className='flex gap-2'>
                            <span className='font-bold text-8xl text-yellowOrange'>
                                14
                            </span>
                            <div className='font-bold text-white pt-10'>
                                Years of <br/> Experience.
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <span className='font-bold text-8xl text-yellowOrange'>
                                187
                            </span>
                            <div className='font-bold text-white pt-10'>
                                Satisfied <br/> Cliets
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>

  )
}

export default Project
