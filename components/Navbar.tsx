'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Butoon from './Butoon'
import { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={79} height={25} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter 
            cursor-pointer pb-1.25 transition-all hover:font-bold">
              {link.label}
            </Link>
          
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
          <Butoon
          type="button"
          title="LogIn" 
          icon="/user.svg"
          varient="btn_dark_green"/>
      </div>
      <div   className="inline-block cursor-pointer lg:hidden" >
    <button onClick={()=> setMenuOpen(!menuOpen)}><Image
      src="menu.svg"
      alt="menu"
      width={32}
      height={32}
    /></button></div>
        {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md px-6 py-4 z-50 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-gray-800 font-medium hover:text-primary"
                  onClick={() => setMenuOpen(false)} // close on click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
