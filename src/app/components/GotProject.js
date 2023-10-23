import React from 'react'
import Arrow from './icons/Arrow.js'
import Attachment from './icons/Attachment.js'

function GotProject() {
  return (
    <section id='#Contact' className='bg-section1 pt-32 pb-40'>
        <div className='container mx-auto'>
            <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <div className='text-white font-extrabold text-3xl'>
                            <span >Got a project?</span>
                            <br/>Let's talk.
                        </div>
                        <br></br>
                        <p className='text-text text-m  text-Light text-justify pt-6'>
                            Sed ut perspiciatis unde omnis iste natus error site <br/>
                            voluptatem accusantium
                        </p>
                        <br></br>                        
                        <div className=' text-yellowOrange text-xl text-Light pt-12'>
                            <a  className='flex gap-4 items-center font-bold '>
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
                    <div className="col-span">
                        <form action="" className='grid'>
                        <h2 className='text-white font-extrabold text-3xl'>Estimate your project? <br/> Let me know here.</h2>
                            <div className='border-b border-underline grid'>
                                <label htmlFor="name" className='text-white font-bold text-xl pt-5'>Waht's your name?</label>
                                <input id='name' type="text" className='bg-section1 outline-none pt-5 caret-white' />
                            </div>
                            <div className='border-b border-underline grid'>
                                <label htmlFor="email" className='text-white font-bold text-xl pt-5'>Your fancy email</label>
                                <input id='email' type="email" className='bg-section1 outline-none pt-5 caret-white' />
                            </div>


                            <div className='grid items-center pt-8'>
                                <div className='flex items-center justify-between gap-3'>
                                    <label htmlFor="are" className='text-white font-bold text-xl'>Tell me about your project</label>
                                    <div className='flex gap-4'>
                                        <div >
                                            <label htmlFor="files" className='text-text font-bold text-xl pt-5 '> <Attachment /></label>
                                            <input id='files' type="file" className='hidden' />
                                        </div>
                                        <div>
                                            <button type="submit" className='relative after:absolute after:top-[1.56rem] after:w-6 after:h-0.5
                                                after:left-0 after:bg-yellowOrange'><Arrow className="text-yellowOrange" /></button>           
                                        </div>
                                    </div>
                                    
                                </div>
                                <textarea name="" id="are" cols={10} rows={10} className='bg-section1 outline-none pt-5 caret-white'></textarea>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default GotProject
