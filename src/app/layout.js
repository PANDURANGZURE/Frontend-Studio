// src/app/layout.js
'use client';

import './globals.css';
import GlobalLoaderWrapper from './Components/GlobalLoaderWrapper';

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>
          Frontend Studio
        </title>
      </head>
      <body className='bg-black' >
        <GlobalLoaderWrapper>
          {children}
        </GlobalLoaderWrapper>
      </body>
    </html>
  );
}
