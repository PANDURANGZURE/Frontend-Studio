"use client"
import {  useState , useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ onFinish }) => {
  const loaderRef = useRef();
  const textRef = useRef();
  const barRef = useRef(); 
  const [progress, setProgress] = useState(0);

  // Progress counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 20); // speed of the loader

    return () => clearInterval(interval); // cleanup
  }, []);

  // GSAP animations effect
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { scale: 0, opacity: 0, rotate: -90 },
      {
        scale: 1.5,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "back.out(1.7)",
      }
    )
      .to(textRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      })
      .to(textRef.current, {
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
      })
      // Step 1: Slide loader off screen
      .to(loaderRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power3.inOut",
      }, "<") // 👈 starts at same time as next one

      .fromTo(
        barRef.current,
        { y: "100%" },
        {
          y: "-100%",
          duration: 1,
          ease: "power2.inOut",
          onComplete: onFinish,
        },
        "<" // 👈 starts at same time as previous
      );
  }, [onFinish]);

  return (
    <>
      <div
        ref={loaderRef}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute bottom-10 right-10">
        <h1
          
          className=" number1 text-6xl font-extrabold text-purple-600   tracking-tight select-none"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          <span className="p-0  text-6xl text-white number1 mr-1">{progress}</span>%
        </h1>
        </div>
      </div>

      {/* Last div that slides up after loader */}
      <div
        ref={barRef}
        className="fixed inset-0 bg-purple-600 z-40"
      ></div>
    </>
  );
};

export default Loader;
