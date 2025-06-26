"use client";
import React, { useEffect } from "react";
import Shery from "sheryjs";

export default function page() {
  useEffect(() => {
    // Shery.imageEffect(".shery-image", {
    //   style: 5,       // Pick from 1–6, each is a unique visual style
    // // Makes effect more fluid
    // distortion: 15,
    // interactive: true,
    // hoverEffect: true,
    // debug : true
    // });

    Shery.textAnimate(".text-target" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 0.5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});




  },[]);

  useEffect(()=>{
    Shery.imageEffect(".images", {
  style: 6,
  debug: true,
  gooey: true,
});
  })

  return (
    <div className="min-h-screen bg-[#fcd6e2] flex items-center justify-center">

      {/* Apply effect to this image */}
      <div className="shery-image w-[400px] h-[300px] overflow-hidden ">
        <img
          src="https://petsworld.in/cdn/shop/articles/Golden-Retriever-Puppies.jpg?v=1730873926"
          alt="Shery Demo"
          className=" img1 w-full h-full object-cover grayscale "
        />
      </div>
      
      <div className="images">
  <img src="https://petsworld.in/cdn/shop/articles/Golden-Retriever-Puppies.jpg?v=1730873926" />
  <img src="https://images.theconversation.com/files/625049/original/file-20241010-15-95v3ha.jpg?ixlib=rb-4.1.0&rect=4%2C12%2C2679%2C1521&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
</div>

      <div className="text-target">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vel magni tempora, consequatur voluptatibus nemo corrupti aut fugiat nobis numquam dolore aspernatur autem quas et praesentium? Nulla illum optio aut.</p>
      </div>

    </div>
  );
}
