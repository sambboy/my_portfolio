import React , {useState} from 'react'
import Image from 'next/image'
import Quots from './icons/Quots'
import naruto from '../img/naruto.jpg'
import ubito from '../img/ubito.png'
import itatchi from '../img/itatchi.png'

function Slider() {

    const quote = [
        {
             id:1,
             name:"-NARUTO UZUMAKI",
             url: naruto,
             quote : "“IF YOU DON’T LIKE THE HAND THAT FATE’S DEALT YOU WITH, FIGHT FOR A NEW ONE.”",
             role : "uzumaki"

         },
         {
             id:2,
             name:"– OBITO UCHIHA",
             url: ubito,
             quote : "“THE MOMENT PEOPLE COME TO KNOW LOVE, THEY RUN THE RISK OF CARRYING HATE.”",
             role : "uzumaki"
         },
         {
             id:3,
             name:"– ITACHI UCHIHA",
             url: itatchi,
             quote : "“GROWTH OCCURS WHEN ONE GOES BEYOND ONE’S LIMITS. REALIZING THAT IS ALSO PART OF TRAINING.”",
             role : "UCHIHA"
         },
         {
            id:4,
            name:"– ITACHI UCHIHA",
            url: itatchi,
            quote : "“GROWTH OCCURS WHEN ONE GOES BEYOND ONE’S LIMITS. REALIZING THAT IS ALSO PART OF TRAINING.”",
            role : "UCHIHA"
        }
     ]

     const [click,setClick] = useState(1);


  return (
    <section className='bg-section2 pt-16 pb-40'>
        <div className='container mx-auto'>
        {quote.map((d) =>
            click === d.id && (
                    <div className="grid grid-cols-2 gap-4 " key={d.id} >
                            <div >
                                <Image src={d.url}  height={400} width={400} alt="image"/>
                            </div>
                            <div className="">
                                <Quots className="text-underline" />
                                <h2 className='text-white text-3xl font-bold pt-7'>
                                    {d.quote}
                                </h2>
                                <span className='text-white text-2xl flex pt-20'>
                                    {d.name}
                                </span>
                                <span className='text-text font-Light flex pt-4 pb-14'>
                                    {d.role}
                                </span>
                                {quote.map((r)=>
                                    <button key={r.id} onClick={() => setClick(r.id)} className={click === r.id ? "top-[10rem] w-[5.6rem] left-[7px] h-3 bg-yellowOrange mx-3" : "bg-text top-[10rem] w-[5.6rem] left-[7px] h-3 mx-3"} ></button>
                                )}
                            </div>
                    </div>
                )
                )}
            
        </div>
    </section>

  )
}

export default Slider
