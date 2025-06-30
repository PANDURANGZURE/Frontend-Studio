'use client';

import { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

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
    },25); // speed of the loader

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className='w-screen h-screen bg-black text-white  ' >

      <div >{progress}%</div>
    </div>
  );
};



export default Loader;
