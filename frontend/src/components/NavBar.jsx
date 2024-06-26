"use client"
import React from 'react'
import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import logo from "../assets/hoyee-high-resolution-logo.png"
import Image from 'next/image' // This help us to show the image or logo to show in the browser frm nextjs.org
import { useState } from 'react'

const NavbarItems = ({ title, classProps }) => {

  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>

}

const NavBar = () => {

  const [ toggleMenu, setToggleMenu] = useState(false)





  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <Image
        src={logo}alt='Hoyee logo'className='w-32 cursor-pointer'/>
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
         {[ "Market", "Exchange", "Rates", "Trade"].map((item, index) => (
            <NavbarItems key={item + index} title={item} />
         ))} 
      </ul>

      <div>
        {toggleMenu ? (
          <AiOutlineClose
          fontSize={28}
          className="text-white md:hidden cursor-pointer"
          onClick={() => setToggleMenu(true)}
          
          />

        ) : (
          <HiMenuAlt4
          fontSize={28}
          className="text-white md:hidden cursor-pointer"
          onClick={() => setToggleMenu(true)}
          />
          
        )}

        {toggleMenu && (
          <ul className=' fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
            <li className='text-xl w-full my-2'>
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>

            {[ "Market", "Exchange", "Rates", "Trade", "Account" ].map((item, index) =>(
              <NavbarItems 
              key={item + index} 
              title={item} 
              classProps="my-2 text-lg" />
            ))}
          </ul>
        )}
      </div>
      </nav>
  )
}

export default NavBar