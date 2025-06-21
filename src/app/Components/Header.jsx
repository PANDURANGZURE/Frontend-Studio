import React from 'react'
import Link from 'next/link';
import Testing from './Loader'

function Header() {
  return (
    <div className='z-50 w-screen'>
      <nav className='md:h-20 z-50 h-14  p-2 flex items-center'>
          <div>
            <h1 className=" text1 text-black mx-6  text-3xl font-bold">CodePaglu</h1>
          </div>
          <div className='ml-auto md:mr-20 pt-1'>
            <ul className='hidden gap-4 md:flex'>
              <li className='text2 text-black'><Link href="/">Home</Link></li>
              <li className='text2 text-black'><Link href="/Compiler">Compiler</Link></li>
              <li className='text2 text-black'><Link href="/About">About</Link></li>
              <li className='text2 text-black'>Github</li>
            </ul>
          </div>
          
          </nav>
    </div>
  )
}

export default Header