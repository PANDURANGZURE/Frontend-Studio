"use client";
import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import gsap from 'gsap';

function Hero() {
  const vLineRef = useRef(null);
  const hLineRef = useRef(null);
  const dotRef = useRef(null);

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    gsap.to(vLineRef.current, {
      x,
      duration: 0.2,
      ease: 'power3.out',
    });

    gsap.to(hLineRef.current, {
      y,
      duration: 0.2,
      ease: 'power3.out',
    });

    gsap.to(dotRef.current, {
      x: x - 4,
      y: y - 4,
      duration: 0.2,
      ease: 'power3.out',
    });
  };

  return (
    
    <div className="hero w-screen" onMouseMove={handleMouseMove}>
        <hr className='my-3' />
        
      {/* Fixed Crosshair Elements */}
      <div
        ref={vLineRef}
        className="fixed top-0 left-0 h-screen w-px bg-[#47250B] pointer-events-none z-50"
      />

      <div
        ref={hLineRef}
        className="fixed top-0 left-0 w-screen h-px bg-[#47250B] pointer-events-none z-50"
      />

      <div
        ref={dotRef}
        className=" rounded-full pointer-events-none z-50"
      />

      {/* Scrollable Content */}
      

        <Header />
        
        {/* Add more content or footer here to test scroll */}
        <div className="h-[150vh] p-10 text-center text-lg text-[#47250B]">
          <p>Saurav zure</p>
        </div>
        <Footer />
      </div>
    
  );
}

export default Hero;
