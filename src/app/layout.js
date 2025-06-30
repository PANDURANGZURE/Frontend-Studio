// src/app/layout.js
'use client';

import './globals.css';
import GlobalLoaderWrapper from './Components/GlobalLoaderWrapper';

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className='bg-black' >
        <GlobalLoaderWrapper>
          {children}
        </GlobalLoaderWrapper>
      </body>
    </html>
  );
}
