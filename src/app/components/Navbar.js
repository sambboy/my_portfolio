import React, { useState } from 'react';
import Logo from './icons/Logo';
function Navbar() {
    const menu = [
        {
            id:1,
            name:"Services",
            url:"#Services",
        },
        {
            id:2,
            name:"Works",
            url:"#Works",
        },
        {
            id:3,
            name:"Contact",
            url:"#Contact",
        }
    ]

    const [click,setClick] = useState(0);

  return (
    <nav className='flex justify-between'>
        <div className='flex items-end'>
            <Logo className="text-yellowOrange" /> 
            <span className='font-bold text-4xl text-text'>AMIR</span>
        </div>
        <ul className='flex fustify-between gap-8 items-center font-bold text-4xl mx-12'>
            {menu.map((d) => 
                <li key={d.id} className={click === d.id ? "text-white" : "text-text"} >
                    <a onClick={() => setClick(d.id)} href={d.url} className={click === d.id ? "relative before:absolute before:top-12 before:w-3 before:h-3 before:rounded-full before:bg-yellowOrange before:left-1/2 before:-translate-x-1/2" : ""}>{d.name}</a>
                    {/* <Dot className={click === d.id ? "relative before:absolute before:top-12 before:w-3 before:h-3 before:rounded-full before:bg-yellowOrange before:left-1/2 before:-translate-x-1/2" : ""}/> */}
                </li>
            ) }
        </ul>
    </nav>
  )
}




export default Navbar
