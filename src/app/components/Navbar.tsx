import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
const Navbar = () => {
  const [ismenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!ismenuOpen);
  }
  return ( 
    <div className='container pt-10 bg' >
        <div className='flex justify-between items-centre'>
            <div className='text-xl font-medium px-6'>S O L A N G I</div>
            <ul className='gab-10 lg:gap-16 hidden md:flex'>
            
             <li className='menuLink'><a href="#hero">Home</a></li>
             <li className='menuLink'><a href="#about">About</a></li>
             <li className='menuLink'><a href="#skills">Skills</a></li>
             <li className='menuLink'><a href="#contact">Contact</a></li>

            </ul>
           <div className='md:hidden' onClick={toggleMenu}>

             {ismenuOpen? <AiOutlineClose size={30} /> :
             <AiOutlineMenu size={30} /> }
           </div>
        </div>
      {
        ismenuOpen && (
        <ul className='flex flex-col gap-4 mt-4 md:hidden '>
          <li className='menuLink'><a href="#hero">Home</a></li>
          <li className='menuLink'><a href="#about">About</a></li>
          <li className='menuLink'><a href="#skills">Skills</a></li>
          <li className='menuLink'><a href="#contact">Contact</a></li>
        </ul>
        )
      }
    </div>
  )
}

export default Navbar
