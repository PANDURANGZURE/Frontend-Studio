'use client';
import React from 'react'
import Link from 'next/link';
import Testing from './Loader'
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className='z-50 w-screen '>
      <nav className='md:h-20 z-50 h-14  p-2 flex items-center'>
          <div>
            <h1 className=" text1 text-white mx-6  text-3xl font-bold">Frontend Studio<span className='text-purple-600 p-0 m-0'>.</span></h1>
          </div>
          <div className='ml-auto md:mr-20 pt-1'>
            <ul className='hidden gap-4 md:flex'>
              <li className='text2 hover:text-purple-500 text-white'><Link href="/">Home</Link></li>
              <li className='text2 hover:text-purple-500 text-white'><Link href="/Compiler">Compiler</Link></li>
              <li className='text2 hover:text-purple-500 text-white'><Link href="/About">About</Link></li>
              <li className='text2 hover:text-purple-500 text-white text-2xl ml-2'><Link href="https://github.com/PANDURANGZURE/Frontend-Studio"><FaGithub/></Link></li>
            </ul>
          </div>
          </nav>
          {/* <hr className='text-white' /> */}
    </div>
  )
}

export default Header