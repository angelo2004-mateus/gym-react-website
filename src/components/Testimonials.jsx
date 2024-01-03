import { useState } from "react"

import Button from "./Button"

import { FaArrowRight } from "react-icons/fa";

import man1 from '../assets/img/man1.jpg'
import man2 from '../assets/img/man2.png'
import man3 from '../assets/img/man3.jpg'

const Testimonials = () => {

  const [count, setCount] = useState(1)  
  const [comment, setComment] = useState([
    {
        id: 1,
        name: 'MATHEW HENDRICKSON',
        profession: 'ENTREPRENEUR',
        text: 'I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body.',
        img: man1
    },

    {
        id: 2,
        name: 'JOHN KEVIN',
        profession: 'COACH',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint.',
        img: man2
    },

    {
        id: 3,
        name: 'FRANKLIN',
        profession: 'CUSTOMER',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem.',
        img: man3
    }
  ]  )  

  
  const prevComment = () => {
    if(count == 1) setCount(comment.length)
    else setCount(count - 1)
  }

  const nextComment = () => {
    if(count > 2) setCount(1)
    else if(count < 1) setCount(comment.length)
    else setCount(count + 1)
  }

  return (
    <section className="flex text-white flex-wrap gap-y-20 py-10">
        <div className="flex flex-col gap-y-5 flex-1 min-w-[400px] max-lg:items-center max-lg:text-center max-lg:px-[100px] max-md:px-0">
            <p className='text-fuchsia-500 font-bold'>TESTIMONIALS</p>
            <div>
                <h2 className="font-light text-[44px]">WHAT THEY</h2>
                <h2 className="font-bold text-[44px]">SAY ABOUT US</h2>
            </div>
            
            {comment.map(item => {
            if(item.id == count) 
                return (
                    <div className="flex flex-col gap-y-10">
                    <p className="text-[20px]">{item.text}</p>
                    <p className="text-[20px]">
                        <span className="text-fuchsia-500 font-medium">{item.name}</span> - {item.profession}</p>   
                    </div>  
                )})}

                    <div className="flex gap-x-5 mt-5">
                        <Button text={<FaArrowRight />} onClick={() => prevComment()} className={'bg-white text-black w-[40px] h-[40px] rounded-full rotate-180'}/>
                        <Button text={<FaArrowRight />} onClick={() => nextComment()} className={'bg-white text-black w-[40px] h-[40px] rounded-full'}/>
                    </div>
            
        </div>

         <div className="flex justify-center items-center flex-1 min-w-[570px] max-md:min-w-full">
            <div className="relative h-[350px] w-[300px]">
                 <div className="bg-gradient-to-br from-fuchsia-500 to-violet-500 h-[330px] w-[280px] absolute left-[20px] top-[20px]"></div>
                 <div className="border-2 border-violet-500 h-[330px] w-[280px] absolute right-[40px] bottom-[40px]"></div>
                {comment.map(item => item.id == count ? <div key={item.id} className="h-[330px] w-[280px] relative z-10 rounded" style={{backgroundImage: `url("${item.img}")`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div> : '')}
            </div>
        </div>   
       
    </section>
  )
}

export default Testimonials
