'use client'
import Spline from '@splinetool/react-spline';

export default function SplineViewer() {
  return (
    <main>
      <div className='z-50 md:w-full w-screen  flex md:h-[1000px] h-screen'>
      <Spline 
        scene="https://prod.spline.design/T31pxjhejRDvdqrv/scene.splinecode" 
      />
      </div>
    </main>
  );
}
