'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Figma, Github, Linkedin, Instagram } from 'lucide-react'
import { SiGithub, SiNextdotjs } from 'react-icons/si'
import { IoLogoVercel } from "react-icons/io5";
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <div className='flex w-full mx-5 md:mx-10 mb-10'>
        

        <div className='w-full text-white'>
          <div className='md:flex '>
            {/* Left Side */}
            <div className='md:w-1/2'>
              {/* About This Project */}
              <div className='p-4'>
                <div className='border border-gray-600 p-1 rounded-2xl'>
                  <div className='flex ml-1'>
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
                    ))}
                  </div>
                  <div className='bg-[#ffffff09] p-2 rounded-2xl'>
                    <p className='text-2xl font-bold'>About This Project</p>
                    <p className="text-white text-lg leading-relaxed">
                      <span className="font-bold text-purple-600">
                        <Link href="/">Frontend Studio</Link>
                      </span>{' '}
                      is a lightweight, in-browser HTML, CSS, and JavaScript compiler designed for quick prototyping, learning, and building responsive web interfaces in real-time. It empowers users to write, test, and run frontend code directly in the browser without installing any additional tools.
                      </p>
                  </div>
                </div>
              </div>

              {/* Why I Built */}
              <div className='p-4'>
                <div className='border border-gray-600 p-1 rounded-2xl'>
                  <div className='flex ml-1'>
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
                    ))}
                  </div>
                  <div className='bg-[#ffffff09] p-2 rounded-2xl'>
                    <p className='text-2xl font-bold'>Why I Built <span className="font-bold text-purple-600"><Link href="#">Frontend Studio</Link></span></p>
                    <p className="text-white text-lg leading-relaxed">
                      As a frontend developer and learner, I often found myself switching between online editors and tools just to test small code snippets or share simple demos. Most platforms were either too complex, required signups, or didn’t offer offline exporting.

I built Frontend Studio to solve this problem with a fast, minimal, and distraction-free coding playground.
                      </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Tech Stack */}
            <div className='md:w-1/2 md:mr-10'>
              <div className='p-4'>
                <div className='border border-gray-600 p-1 rounded-2xl'>
                  <div className='flex ml-1'>
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className='h-3 w-3 bg-amber-50 rounded-2xl ml-2 my-2'></div>
                    ))}
                  </div>
                  <div className='bg-[#ffffff09] p-2 rounded-2xl'>
                    <p className='text-2xl font-bold p-1 mb-2'>Tech Stack Used</p>

                    {/* UI/UX & Analytics */}
                    <div className='md:flex mb-1'>
                      <div className='md:w-1/2'>
                        <p className='text-xl p-2'>UI/UX</p>
                        <div className='flex px-2 gap-2 h-12'>
                          <Image src="data:image/png;base64,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" alt="canva" width={48} height={48} />
                          <Figma size={40} />
                        </div>
                      </div>
                      <div className='md:w-1/2'>
                        <p className='text-xl p-2'>PDF Download</p>
                        <div className="flex flex-wrap px-2 gap-2 h-auto">
                          <img className='bg-white h-10 w-24 rounded-3xl px-1' src="https://lh5.googleusercontent.com/proxy/5Xkgfg1aDhEyjS0koJHq4eh98IxcwvhXB069zAZlXZlcfLxfzBl0mJquCialkla2FsLqLI9vS-rP" alt="any" width={48} height={48} />
                        </div>
                      </div>
                    </div>

                    {/* Version Control & Execution */}
                    <div className='md:flex mb-1'>
                      <div className='md:w-1/2'>
                        <p className='text-xl p-2'>Version Control & Hosting</p>
                        <div className='flex px-2 gap-2'>
                          <SiGithub className="h-10 w-12" />
                          <IoLogoVercel className="h-10 w-10" />
                        </div>
                      </div>
                      
                    </div>

                    {/* Frontend Stack */}
                    <div className='mb-4'>
                      <p className='text-xl p-2'>Frontend</p>
                      <div className='flex px-2 gap-2 h-12 flex-wrap items-center'>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" width={48} height={48} />
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" width={48} height={48} />
                        <Image src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" width={48} height={48} alt="" />
                        <SiNextdotjs className='text-4xl' />
                        <Image src="data:image/svg+xml,%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%201024'%3e%3cstyle%3e.st0{fill:%23f6f6f6;fill-opacity:0}.st1{fill:%23fff}.st2{fill:%23167abf}%3c/style%3e%3cpath%20class='st0'%20d='M1024%201024H0V0h1024v1024z'/%3e%3cpath%20class='st1'%20d='M1024%2085.333v853.333H0V85.333h1024z'/%3e%3cpath%20class='st2'%20d='M0%2085.333h298.667v853.333H0V85.333zm1024%200v853.333H384V85.333h640zm-554.667%20160h341.333v-64H469.333v64zm341.334%20533.334H469.333v64h341.333l.001-64zm128-149.334H597.333v64h341.333l.001-64zm0-149.333H597.333v64h341.333l.001-64zm0-149.333H597.333v64h341.333l.001-64z'/%3e%3c/svg%3e" alt="Monaco" width={48} height={48} />
                        
                      </div>
                      <div className='m-4'>
                        <Image src="https://raw.githubusercontent.com/PANDURANGZURE/project-img/bc78cc1a3a962fb92cda3e74c44d079394581fd2/assets/icon/webpack.svg" alt="Webpack" width={48} height={48} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Card */}
          <div className="border border-gray-600 rounded-2xl md:mr-16 md:ml-8 md:m-0 mx-7">
            <div className="flex space-x-2 p-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-3 w-3 bg-amber-50 rounded-full"></div>
              ))}
            </div>

            <div className="bg-[#ffffff09] p-4 rounded-2xl flex md:flex-row gap-4">
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-4">Developer</h1>
                <div className="md:flex items-center justify-center gap-4">
                  <div className="bg-black rounded-xl overflow-hidden flex items-center justify-center">
                    <img src="https://codepaglu.netlify.app/assets/saurav-DBLYY0Jo.png" alt="Pandurang Zure" width={160} height={160} className="object-cover" />
                  </div>
                  <div>
                    <p className="text-2xl text-purple-600 font-bold">Pandurang Zure</p>
                    <p>
                      I'm a Web Developer based in Pune, Maharashtra, passionate about crafting responsive and visually appealing websites.
                      I enjoy transforming complex problems into simple, elegant, and user-friendly web experiences.
                      <br />
                      My goal is to build websites that are not only functional and efficient but also engaging and intuitive.
                    </p>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://github.com/PANDURANGZURE" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition">
                        <Github size={22} />
                      </a>
                      <a href="https://www.linkedin.com/in/pandurang-santosh-zure-au3112/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition">
                        <Linkedin size={22} />
                      </a>
                      <a href="https://www.instagram.com/_anonymous_3112_/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition">
                        <Instagram size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
