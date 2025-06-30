'use client';

import { useState, useEffect } from 'react';

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          if (onFinish) {
            onFinish();
          }
          return 100;
        }
      });
    }, 25); // speed of the loader

    return () => clearInterval(interval); // cleanup
  }, [onFinish]);

  return (
    <div className='w-screen h-screen bg-black text-white flex justify-center items-center' >

      <div className='text-7xl font-saurav1' >{progress}%</div>
    </div>
  );
};



export default Loader;
