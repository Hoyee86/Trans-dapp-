import React from 'react'
import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import logo from "../assets/hoyee-high-resolution-logo.png"
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className='W-full flex md:justify-center justify-between items-center p-4'>
      <div>
        <Image
        
        src={logo}
        alt='Hoyee logo'
        className='w-32 cursor-pointer'
        
        />
      </div>
      </nav>
  )
}

export default NavBar