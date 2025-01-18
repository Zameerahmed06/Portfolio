import React from 'react'
import { RiMailSendLine } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container px-6'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-up">Contact Us For Detail</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                    Feel free to reach out. I'd be happy to help you.
                </p>
                <div className='flex gap-3 items-centre' data-aos="zoom-in-up">
                <RiMailSendLine size={30} />solangisadamali57@gmail.com
                </div>
                <div className='flex gap-3 items-centre' data-aos="zoom-in-up">
                <BsTelephoneFill size={30} /> +923201399645
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-accent' 
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    className='h-[40px] bg-transparent border border-accent' 
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    < textarea
                    className='bg-transparent border border-accent' 
                    id='msg' rows ={8}>
                        </textarea>
                </div>
                <button
  className="bg-white text-black border border-gray-300 hover:bg-gray-100 hover:shadow-md active:shadow-lg rounded-md p-2 px-6 transition-all duration-200 ease-in-out"
  data-aos="zoom-in-up"
><b>Send</b>
</button>

            </div>
        </div>
    </div>
  )
}

export default Contact
