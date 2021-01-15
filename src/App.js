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
        <title>PGA²CSV</title>

        <meta name="application-name" content="PGA²CSV" />

        <meta name="theme-color" content="#ce6a85" />

        <meta name="description" content="Convert a Hitachi PGA program file into CSV and plain text" />
        <meta name="rating" content="General" />

        <link rel="manifest" href="/manifest.json"></link>

        <link rel="icon" sizes="192x192" href="/pga-circle-pink-192.png" />

        <link rel="apple-touch-icon" href="/pga-circle-pink-512.png" color="white" />

        <link rel="mask-icon" href="/pga-circle-pink.svg" color="white" />
      </Head>
      <TheLayout />
    </Root>
  )
}