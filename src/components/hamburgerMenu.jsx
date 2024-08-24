'use client'

import React from 'react'
import { AiFillInstagram} from "react-icons/ai";
import { FaGithub , FaLinkedin ,} from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi";

const HamburgerMenu = () => {
  return (
    <div>
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-40'>
           <ul>
               <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-blue-400'>
                   <a href="https://www.linkedin.com/in/ali-mohammadi-seta" target="_blank"
                       className='flex justify-between items-center w-full text-gray-300 pl-5 '>
                       Linkedin <FaLinkedin size={30}/>
                   </a>
               </li>
               <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700'>
                   <a  href="mailto:alimohammadiseta2@gmail.com" target="_blank"
                       className='flex justify-between items-center w-full text-gray-300 pl-5 '>
                       Mail Me <HiOutlineMail size={30}/>
                   </a>
               </li>
               <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f09433]'>
                   <a  href="https://www.instagram.com/alimohammadiseta" target="_blank"
                       className='flex justify-between items-center w-full text-gray-300 pl-5 '>
                       Instagram <AiFillInstagram size={30}/>
                   </a>
               </li>
               <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]'>
                   <a  href="https://github.com/Ali-Mohammadi-Seta" target="_blank"
                       className='flex justify-between items-center w-full text-gray-300 pl-5 '>
                       Github <FaGithub size={30}/>
                   </a>
               </li>
           </ul>
       </div>

    </div>
  )
}

export default HamburgerMenu
