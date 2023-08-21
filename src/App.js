import React from 'react';
import { Root, Head } from 'react-static';

import './app.css';

import TheLayout from './components/theLayout';

export default function App() {
  return (
    <Root>
      <Head>
        <meta charSet="UTF-8" />          
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SMT×</title>

        <meta name="application-name" content="SMT×" />

        <meta name="theme-color" content="#ce6a85" />

        <meta name="description" content="Convert Hitachi/Yamaha program files into CSV and plain text" />
        <meta name="rating" content="General" />

        <link rel="manifest" href="/manifest.json"></link>

        <link rel="icon" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" color="white" />
        <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />

        <link rel="mask-icon" href="/smtx-circle-pink.svg" color="white" />
      </Head>
      <TheLayout />
    </Root>
  )
}