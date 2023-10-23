import React from 'react'
import Arrow from './icons/Arrow.js'

function SectionBlog() {
  return (
    <section className='bg-section2 pt-40 pb-40'>
        <div className='container mx-auto'>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span">
                    <h2 className='text-text text-xl text-Light mb-4'>-Blog</h2>
                                <div className='text-white font-extrabold text-3xl'>
                                    <span >What's new</span>
                                    <br/>My blog and news.
                                </div>
                </div>
                <div >
                    <div className='grid grid-cols-4 gap-4 border-b border-underline text-xl pb-14'>
                        <div className="text-text ">Feb 26.Blog</div>
                        <div className="col-span-2 text-white text-2xl font-bold flex justify-center">Let this be a lesson to you</div>
                        <div className="relative after:absolute after:top-[1.56rem] after:w-6 after:h-0.5
                                    after:left-[7.40rem] after:bg-yellowOrange flex justify-end" >
                            <Arrow className="text-yellowOrange" />
                        </div>
                        
                    </div>
                    <div className='grid grid-cols-4 gap-4 text-xl border-b border-underline pb-14 pt-10'>
                        <div className="text-text ">Feb 26.Blog</div>
                        <div className="col-span-2 text-white text-2xl font-bold flex justify-center">Let this be a lesson to you</div>
                        <div className="relative after:absolute after:top-[1.56rem] after:w-6 after:h-0.5
                                    after:left-[7.40rem] after:bg-yellowOrange flex justify-end" >
                            <Arrow className="text-yellowOrange" />
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-4 text-xl pb-14 pt-10'>
                        <div className="text-text ">Feb 26.Blog</div>
                        <div className="col-span-2 text-white text-2xl font-bold flex justify-center">Let this be a lesson to you</div>
                        <div className="relative after:absolute after:top-[1.56rem] after:w-6 after:h-0.5
                                    after:left-[7.40rem] after:bg-yellowOrange flex justify-end" >
                            <Arrow className="text-yellowOrange" />
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </section>
        
  )
}

export default SectionBlog
