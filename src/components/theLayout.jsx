import React, { useState, Fragment } from 'react'
// import lodash from 'lodash';

import TheWork from './theWork';

const TheLayout = ()=> {
  
  const [ backgroundState, backgroundSet ] = useState(false);

  return(
    <Fragment>
      <header>
        <h1>PGA<sup>2</sup>CSV</h1> 
      </header>
      <main>
        {backgroundState ?
          <section>
            <button 
              id="byeBttn"
              className='navAction stickyNav'
              onClick={()=>backgroundSet(false)}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="100%" viewBox="0 0 512 512">
                <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M320 320L192 192M192 320l128-128"/>
              </svg><span>Close</span>
            </button>
          
            <h3>Information</h3>
            <p>PGA<sup>2</sup>CSV is a utility to convert a PGA file back into simple text files.
              The placement locations are converted into a formatted pick and place CSV file. The overall board information 
              and parts list are converted into plain text files.
            </p>
            <p>Input files must be formatted as UTF-8 text files with a `.pga` extension. Reliable results 
              should only be expected with program files optimized for Hitachi GXH Series machines.</p>
            <p>Downloaded output files are formatted as UTF-8 text files with a `.csv` or `.txt` extension.</p>
            <p>Printed output is generated as html for the browser's print utility. After the printer utility 
              is closed the generated content is destroyed.</p>
            <h4>Privacy</h4>
            <p>All files are processed locally. No file content or metadata is transported to any server, cloud 
              or 3rd party service. No file content or metadata is cached in the web browser once the browser 
              window is closed. File content or metadata is only saved to the local machine upon user action.</p>
            <p>Be aware that 
              content or metadata may be retained by your browser's download history or your computer's 
              printer queue.</p>

            <h4>Licence</h4>
            <p>MIT License</p>
            <p>Copyright (c) 2021 - present, Commutron Industries Ltd.</p>
            <p>Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:</p>
            <p>The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.</p>
            <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              SOFTWARE.</p>
          </section>
          : 
        <TheWork />
      }
      </main> 
      <footer>
        <button 
          id="heloBttn"
          className='navAction'
          onClick={()=>backgroundSet(true)}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="100%" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"/>
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M220 220h32v116"/>
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M208 340h88"/>
              <path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z"/>
          </svg>
        </button>
        <span>Commutron Industries Ltd. ©2021</span>
      </footer>
    </Fragment>
  );
};

export default TheLayout;