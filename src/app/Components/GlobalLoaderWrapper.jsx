'use client';

import { useState, useEffect } from 'react';
import Loader from './Loader1'; // Your animated loader

export default function GlobalLoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [loaderVisible, setLoaderVisible] = useState(true);

  const handleLoaderFinish = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setLoaderVisible(false);
      }, 500); // Corresponds to the fade-out duration
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {loaderVisible && (
        <div
          className={`transition-opacity duration-500 ${!loading ? 'opacity-0' : 'opacity-100'}`}
        >
          <Loader onFinish={handleLoaderFinish} />
        </div>
      )}
      <div className={`transition-opacity duration-500 ${!loading ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </>
  );
} 