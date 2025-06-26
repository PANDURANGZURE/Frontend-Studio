'use client';
import React from 'react'
import Link from 'next/link'
import { FaGithub,FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
    <hr className='text-white' />
    <footer className='md:flex justify-between text-white w-screen  p-10  '>
      <div><h1 className=" text1 text-white mx-6  text-3xl font-bold">Frontend Studio.</h1></div>
      <div className='flex text-3xl gap-6'>
      <a href="https://www.linkedin.com/in/pandurang-santosh-zure-au3112/"><FaLinkedin /></a>
      <a href="https://github.com/PANDURANGZURE"><FaGithub /></a>
      </div>
      <div className=' md:flex text-center gap-4'>
        <div><Link href='/'>Home</Link></div>
        <div><Link href='/Compiler'>Compiler</Link></div>
        <div><Link href='/about'>About</Link></div>
        </div>
    </footer>
    
    </>
  )
}

export default Footer