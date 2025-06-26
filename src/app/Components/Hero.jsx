"use client";
import React, { useRef, useEffect,useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import gsap from "gsap";
import bg from '../assets/bg1.png'
import SplineViewer from "./SplineViewer";
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link'
import { IoLogoHtml5, IoLogoCss3  } from "react-icons/io5";
import { FaJs } from "react-icons/fa";

function Hero() {
  const vLineRef = useRef(null);
  const hLineRef = useRef(null);
  const dotRef = useRef(null);
  const icons = [<IoLogoHtml5 key="html5" />, <IoLogoCss3 key="css3" />, <FaJs key="js" />];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Prevent scroll on body/html globally
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [icons.length]);

  const handleMouseMove = (e) => {
    const x = Math.min(window.innerWidth - 1, Math.max(0, e.clientX));
    const y = Math.min(window.innerHeight - 1, Math.max(0, e.clientY));

    gsap.to(vLineRef.current, {
      x,
      duration: 0.2,
      ease: "power3.out",
    });

    gsap.to(hLineRef.current, {
      y,
      duration: 0.2,
      ease: "power3.out",
    });

    gsap.to(dotRef.current, {
      x: x - 4,
      y: y - 4,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  return (
    <div
      className="hero w-screen absolute top-0 left-0 bg-black border scrollbar-hidden overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      
      {/* Fixed Crosshair Elements */}
      <div
        ref={vLineRef}
        className="fixed top-0 left-0 h-screen w-px bg-white pointer-events-none z-50"
      />

      <div
        ref={hLineRef}
        className="fixed top-0 left-0 w-screen h-px bg-white pointer-events-none z-50"
      />

      <div
        ref={dotRef}
        className=" bg-white fixed top-0 left-0 rounded-full pointer-events-none z-50"
      />

      {/* Content */}
      <Header />
      <img className="absolute top-0 right-0 -z-0  pointer-events-none " src="https://github.com/MiladiCode/3D-startup-app/blob/main/gradient.png?raw=true" alt="" />
      <div className="h-screen text-center text-lg text-white md:flex  md:mt-20  pointer-events-none">
      <div className="h-1/2 mb-10 md:w-1/2 z-50 flex  md:hidden justify-center items-center  ">
        <SplineViewer/>
        </div>
        <div className=" md:mt-12 md:w-1/2 text-start md:ml-14 ml-5 text-balance">
        <p className="md:text-7xl text-4xl text-balance text1"><span className="">T</span>ransforming Ideas</p>
        <p className="md:text-7xl text-4xl text-balance text1">into Innovative</p>
        <p className="md:text-7xl text-4xl text-balance text1"><div className="flex gap-3">
        <p>Websites</p> <span className="md:text-7xl text-4xl p-1 ">{icons[currentIndex]}</span>
        </div> </p>
        
        <p className="text2 mt-4 text-lg md:text-xl">Write.Compile.Launch.Your Website Starts Here.</p>
        
        <Link href="/Compiler">
        <button>
          <div className="flex md:text-md bg-white my-5 text-black md:py-2  md:px-3 py-1  px-2 rounded-4xl  font-semibold">
          <p>Get Started </p>
          <ArrowUpRight className="m-0.5"/>
          </div>
        </button>
        </Link>
        </div>
        <div className="md:h-1/2 md:w-1/2 z-50 hidden md:flex justify-center items-center  ">
        <SplineViewer/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
